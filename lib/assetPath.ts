import { BASE_PATH } from "./config";

/** Prefix public asset paths for GitHub Pages subpath deployment */
export function assetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
