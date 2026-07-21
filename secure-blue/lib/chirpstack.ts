const API_URL = process.env.CHIRPSTACK_API_URL;
const API_KEY = process.env.CHIRPSTACK_API_KEY;

export async function fetchChirpStack(endpoint: string, options: RequestInit = {}) {
  const url = `${API_URL}${endpoint}`;
  const headers = {
    'Grpc-Metadata-Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`ChirpStack API error: ${response.status} ${response.statusText} - ${text}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
}