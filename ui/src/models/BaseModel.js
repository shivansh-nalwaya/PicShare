import { handleReponse } from "./ErrorHandler";

export default class BaseModel {
  constructor(api) {
    this.baseApi = "http://localhost:3001";
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    this.api = api;
  }

  find = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`).then(handleReponse);
  };

  create = data => {
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    return fetch(`${this.baseApi}/${this.api}`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.currentUserToken
      },
      body: JSON.stringify(data)
    }).then(handleReponse);
  };

  delete = id => {
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "delete"
    }).then(handleReponse);
  };

  update = (id, data) => {
    this.currentUserToken = (
      JSON.parse(localStorage.getItem("currentUser")) || {}
    ).token;
    return fetch(`${this.baseApi}/${this.api}/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": this.currentUserToken
      },
      body: JSON.stringify(data)
    }).then(handleReponse);
  };
}
