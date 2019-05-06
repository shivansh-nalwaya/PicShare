export default class BaseModel {
  constructor(api) {
    this.baseApi = "http://localhost:3001";
    this.api = api;
  }

  find = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`).then(data => data.json());
  };

  create = data => {
    return fetch(`${this.baseApi}/${this.api}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QwMWNhNDYyYTRiYTY3ODMzMDY0YjciLCJlbWFpbCI6InNoaXZhbnNoQGdtYWlsLmNvbSIsImlhdCI6MTU1NzE0MjY5N30.aatx_Sqnxwbms765MXe2qUiGsraYk4mo1LduZHq_CTY"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };

  delete = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "delete"
    }).then(data => data.json());
  };

  update = (id, data) => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  };
}
