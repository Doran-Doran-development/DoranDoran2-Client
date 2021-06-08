import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "../../lib/atoms/userAtom";
import { Login } from "../../components";
import User from "../../lib/apis/UserAPI";
import { withRouter } from "react-router";

const LoginContainer = withRouter(({ history }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfo, setUserInfo] = useRecoilState(userAtom);
  const handleLogin = useCallback(async () => {
    await User.login(email, password).then((res) => {
      switch (res.status) {
        case 400:
          alert("이메일 또는 비밀번호가 다릅니다");
          break;
        case 200:
          const { user, token } = res.data;
          const { id, email, name, role } = user;
          localStorage.setItem("dorandoran-client", token);
          console.log(user);
          setUserInfo({ id, email, name, role });
          console.log(userInfo);
          alert("로그인에 성공하였습니다");
          history.push("/Home");
      }
    });
  }, [email, history, password, setUserInfo, userInfo]);
  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
});

export default LoginContainer;
