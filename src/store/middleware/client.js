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
  let result = {};
  let data;
  try {
    const response = await window.fetch(endpoint, config);
    result.response = response;
    try {
      data = await response.json();
    } catch (error) {
      data = await response;
    }
    result.data = data;
    if (response.ok) {
      return result;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}
