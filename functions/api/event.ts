export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);

  return fetch("https://plausible.io/api/event", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": request.headers.get("User-Agent") || "",
      "X-Forwarded-For": request.headers.get("CF-Connecting-IP") || "",
    },
    body: request.body,
  });
};
