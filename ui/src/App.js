import React, { Component } from "react";
import LoginModal from "./components/LoginModal";

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg')"
        }}
      >
        <LoginModal />
      </div>
    );
  }
}

export default App;
