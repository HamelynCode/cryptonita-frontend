class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _makeRequest(method, url, body) {
    return fetch(`${this._url}${url}`, {
      method: method,
      headers: this._headers,
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.statusText}`);
    });
  }

  getCoinInfo(id) {
    return this._makeRequest("GET", `/coins/${id}`);
  }

  getInitialCoins() {
    return this._makeRequest("GET", "/coins/markets/?vs_currency=usd");
  }
}

const api = new Api({
  url: 'https://api.coingecko.com/api/v3',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;