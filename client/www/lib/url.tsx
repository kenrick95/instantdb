export function url(base: string, path: string, querty: Record<string, any>) {
  const url = new URL(path, base);
  Object.entries(querty).forEach(([key, value]) => {
    if (value === undefined) return;
    url.searchParams.set(key, value);
  });
  return url.toString();
}

export function getQueryParam(param: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
