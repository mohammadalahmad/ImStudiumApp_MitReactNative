import React, { Component } from "react";
import MenuListe from "./MenuListe";
import { View } from "react-native";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

class Index extends Component {
  render() {
    return <MenuListe />;
  }
}
export default Index;
