export default class BaseModel {
  constructor(api) {
    this.baseApi = "http://localhost:3001";
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
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
        "x-access-token": this.currentUserToken
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
