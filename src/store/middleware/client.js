import baseURL from "../../utils/endpoint";
export async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "Content-Type": "application/json" };

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  const fullURL = baseURL + endpoint;
  try {
    const response = await window.fetch(fullURL, config);
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  } catch (err) {
    return Promise.reject(err.message ? err.message : response);
  }
}
