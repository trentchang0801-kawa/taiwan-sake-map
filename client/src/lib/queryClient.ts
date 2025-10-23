import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * API base - 使用 Vite 的環境變數，若不存在就 fallback 到本機的開發位置
 * (開發時可在 client/.env 加入 VITE_API_URL=http://localhost:5001)
 */
const API_BASE = (import.meta.env.VITE_API_URL as string) || "http://localhost:5001";

/** 若 response 非 ok，拋出錯誤 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/** 小工具：把可能的相對路徑 or 絕對 API path 轉成完整 URL */
function buildUrl(pathOrUrl: string): string {
  // 若已經是完整 URL (http:// or https://)，就直接回傳
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  // 若以 / 開頭，當作 relative to API_BASE root
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${API_BASE}${normalizedPath}`;
}

/**
 * apiRequest - 你的原本函式，僅把 url 經過 buildUrl 處理
 * - method: "GET" / "POST" / ...
 * - url: 可以是絕對 URL 或相對 path (如 "/api/wineries" 或 "api/wineries")
 * - data: 若有則放在 body，並 set Content-Type
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined
): Promise<Response> {
  const fullUrl = buildUrl(url);

  const res = await fetch(fullUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * getQueryFn - React Query 的 queryFn factory
 * 會把 queryKey join 後視為 path (與原來行為一致)，但會先套上 API_BASE
 *
 * 注意：這裡改寫為顯式泛型函式宣告以避免 'Cannot find name T' 的錯誤
 */
export function getQueryFn<T>(options: { on401: UnauthorizedBehavior }): QueryFunction<T> {
  const { on401: unauthorizedBehavior } = options;

  return async ({ queryKey }) => {
    // queryKey 可能是 ["api", "wineries"] 或 ["/api/wineries"]
    const path = Array.isArray(queryKey) ? queryKey.join("/") : String(queryKey);
    const fullUrl = buildUrl(path);

    const res = await fetch(fullUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null as unknown as T;
    }

    await throwIfResNotOk(res);
    return (await res.json()) as T;
  };
}

/** React Query client 保留你原本的 defaultOptions */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
