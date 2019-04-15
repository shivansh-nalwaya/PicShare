import { extendObservable } from "mobx";

class UserModel {
  constructor() {
    this.baseApi = "http://localhost:3001/api";
    extendObservable(this, {
      currentUser: null
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
        console.log(res);
        this.currentUser = res.result;
      })
      .catch(err => console.log("err", err));
  };
}

const user = new UserModel();

export default user;
