// The only place that talks to platform-api.
// Reads the API base URL from the public env var; falls back to a placeholder
// so static builds don't crash in environments that didn't set it.

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.fgl-services.example";

export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export async function api<T>(
  path: string,
  init?: RequestInit,
): Promise<Result<T>> {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init?.headers ?? {}),
      },
    });
    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}` };
    }
    return { ok: true, data: (await res.json()) as T };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

// TODO: typed helpers, e.g.:
// export const createJob = (body: CreateJobInput) =>
//   api<Job>("/v1/jobs", { method: "POST", body: JSON.stringify(body) });
