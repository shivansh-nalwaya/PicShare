import { extendObservable } from "mobx";
import { handleReponse } from "./ErrorHandler";

class UserModel {
  constructor() {
    this.baseApi = "http://localhost:3001/api";
    extendObservable(this, {
      currentUser: localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null
    });
  }

  login = values => {
    return fetch(`${this.baseApi}/login`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(handleReponse)
      .then(res => {
        this.currentUser = res.result;
        localStorage.setItem("currentUser", JSON.stringify(res.result));
      });
  };

  signup = values => {
    return fetch(`${this.baseApi}/signup`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(handleReponse);
  };

  logout = () => {
    return fetch(`${this.baseApi}/logout`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: this.currentUser.email })
    })
      .then(handleReponse)
      .then(() => {
        this.currentUser = null;
        localStorage.clear();
      });
  };
}

const user = new UserModel();

export default user;
