import React from "react";
//Components
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
