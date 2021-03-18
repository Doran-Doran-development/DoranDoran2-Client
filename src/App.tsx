import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MainPage, MainRoomPage } from "pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} />
      <Route exact path="/" component={MainRoomPage} />
    </BrowserRouter>
  );
};

export default App;
