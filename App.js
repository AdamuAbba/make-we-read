import React from "react";
import HomeScreen from "./app/screens/HomeScreen";
import { store } from "./app/redux/store";
import { Provider } from "react-redux";
import MainStack from "./app/routes/MainStack";

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
