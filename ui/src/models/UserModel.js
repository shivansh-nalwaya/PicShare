import { extendObservable } from "mobx";

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
      .then(data => data.json())
      .then(res => {
        this.currentUser = res.result;
        localStorage.setItem("currentUser", JSON.stringify(res.result));
      })
      .catch(err => console.log("err", err));
  };

  signup = values => {
    return fetch(`${this.baseApi}/signup`, {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(data => data.json())
      .then(res => {})
      .catch(err => console.log("err", err));
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
      .then(data => data.json())
      .then(() => {
        this.currentUser = null;
        localStorage.clear();
      })
      .catch(err => console.log("err", err));
  };
}

const user = new UserModel();

export default user;
