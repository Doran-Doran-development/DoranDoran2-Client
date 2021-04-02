import React from "react";
import { Route } from "react-router-dom";
import {
  HomePage,
  MainOutingPage,
  MainPage,
  MainRoomPage,
  Mypage,
} from "pages";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/" component={MainRoomPage} />
      <Route exact path="/" component={MainOutingPage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/home" component={HomePage} />
    </>
  );
};

export default App;
