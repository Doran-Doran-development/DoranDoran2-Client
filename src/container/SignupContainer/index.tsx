import React, { useCallback, useState } from "react";
import { Signup } from "../../components";
import { withRouter } from "react-router";
import UserAPI from "lib/apis/UserAPI";

const SignupContainer = withRouter(({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRepassword] = useState("");
  const [certification_code, setCertificationCode] = useState("");
  const [grade, setGrade] = useState(0);
  const [homeroom, setHomeroom] = useState(0);
  const handleSignup = useCallback(async () => {
    await UserAPI.teacherSignup(
      name,
      email,
      password,
      grade,
      homeroom,
      certification_code
    ).then((res) => console.log(res));
  }, [certification_code, email, grade, homeroom, name, password]);
  return (
    <Signup
      name={name}
      email={email}
      password={password}
      rePassword={rePassword}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      setRepassword={setRepassword}
      certification_code={certification_code}
      setCertificaionCode={setCertificationCode}
      grade={grade}
      setGrade={setGrade}
      homeroom={homeroom}
      setHomeroom={setHomeroom}
      handleSignup={handleSignup}
    />
  );
});

export default SignupContainer;
