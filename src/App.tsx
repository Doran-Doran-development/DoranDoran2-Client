import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AdminEscapePage, HomePage, LoginPage, MainOutingPage, MainPage, MainRoomPage,
  MeetingRoomPage, Mypage, OutingPage, RentalRoomPage, RoomDetailPage, SignupPage } from "pages";
import { RecoilRoot } from "recoil";

const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainRoomPage} />
          <Route exact path="/" component={MainOutingPage} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/home" component={HomePage} />
          <Route path="/outing" component={OutingPage} />
          <Route path="/conference" component={MeetingRoomPage} />
          <Route path="/room/:roomdetail" component={RoomDetailPage} />
          <Route path="/rental/:roomname" component={RentalRoomPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/escape" component={AdminEscapePage} />
        </Router>
      </RecoilRoot>
    </>
  );
};

export default App;
