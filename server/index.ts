import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    // @ts-ignore preserve typing but allow apply
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        try {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        } catch {
          // ignore stringify errors
        }
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // For local development we will prefer binding to 127.0.0.1 (loopback)
  // to avoid platform-specific issues binding to 0.0.0.0.
  const portStr = process.env.PORT;
  if (!portStr) {
    throw new Error("PORT environment variable is not set");
  }
  const port = parseInt(portStr, 10);

  // Try listen on loopback first (127.0.0.1). If that fails, try without host.
  try {
    server.listen(port, "127.0.0.1", () => {
      log(`Server running on http://127.0.0.1:${port}`);
    });
  } catch (err) {
    console.error("Failed to listen on 127.0.0.1:", err);
    try {
      server.listen(port, () => {
        log(`Server running on port ${port} (no host specified)`);
      });
    } catch (err2) {
      console.error("Also failed to listen without host:", err2);
      // give a helpful message and exit so user can diagnose
      console.error(
        "Unable to start server. Possible causes: port in use, platform/network restrictions, or insufficient permissions."
      );
      process.exit(1);
    }
  }
})();
