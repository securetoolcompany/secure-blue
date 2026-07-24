const API_URL = process.env.CHIRPSTACK_API_URL;
const API_KEY = process.env.CHIRPSTACK_API_KEY;

export async function fetchChirpStack(path: string, init: RequestInit = {}) {
  const res = await fetch(`${process.env.CHIRPSTACK_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Grpc-Metadata-Authorization": `Bearer ${process.env.CHIRPSTACK_API_TOKEN}`,
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