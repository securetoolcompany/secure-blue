export async function fetchChirpStack(path: string, init: RequestInit = {}) {
  const baseUrl =
    process.env.CHIRPSTACK_URL ||
    process.env.CHIRPSTACK_API_URL;

  const token =
    process.env.CHIRPSTACK_API_TOKEN ||
    process.env.CHIRPSTACK_TOKEN ||
    process.env.CHIRPSTACK_API_KEY;

  if (!baseUrl) {
    throw new Error("ChirpStack base URL is not set");
  }

  if (!token) {
    throw new Error("ChirpStack API token is not set");
  }

  const url = `${baseUrl}${path}`;

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  const text = await res.text();
  let data: any = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new Error(
      `ChirpStack API error: ${res.status} ${res.statusText} - ${
        typeof data === "string" ? data : JSON.stringify(data)
      }`
    );
  }

  return data;
}