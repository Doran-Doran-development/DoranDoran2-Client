import React from "react";
import { Route } from "react-router-dom";
import { MainPage, MainRoomPage } from "pages";

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={MainPage} />
      <Route exact path="/" component={MainRoomPage} />
    </>
  );
};

export default App;
