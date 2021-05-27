import React from "react";
import { Route } from "react-router-dom";
import { AdminEscapePage, HomePage, LoginPage, MainOutingPage, MainPage, MainRoomPage, Mypage, OutingPage, RentalRoomPage, RoomDetailPage, SignupPage } from "pages";

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/" component={MainRoomPage} />
      <Route exact path="/" component={MainOutingPage} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/home" component={HomePage} />
      <Route path="/outing" component={OutingPage} />
      <Route path="/room/:roomdetail" component={RoomDetailPage} />
      <Route path="/rental/:roomname" component={RentalRoomPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/escape" component={AdminEscapePage} />
    </>
  );
};

export default App;
