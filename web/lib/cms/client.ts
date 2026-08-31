/**
 * Thin client for the future Wagtail GraphQL endpoint (wagtail-grapple).
 * Every getter in lib/cms/* currently returns invented placeholder content
 * so pages can be built against a stable, async, CMS-shaped API today.
 * Once Wagtail is live, point NEXT_PUBLIC_WAGTAIL_GRAPHQL_URL at it and
 * swap each getter's body for a `cmsFetch(QUERY)` call — the page
 * components that consume them do not need to change.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_WAGTAIL_GRAPHQL_URL;

export async function cmsFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!ENDPOINT) {
    throw new Error("NEXT_PUBLIC_WAGTAIL_GRAPHQL_URL is not configured — this app is running on mock CMS data.");
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`CMS request failed: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  if (json.errors) {
    throw new Error(`CMS query error: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}
