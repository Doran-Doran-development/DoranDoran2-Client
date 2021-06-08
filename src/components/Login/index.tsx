import { Logo } from "assets";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleLogin: () => void;
}

const Login: React.FC<Props> = props => {
  const { email, password, setEmail, setPassword, handleLogin } = props;
  return (
    <S.Positioner>
      <S.IconWrapper>
        <Logo width={100} height={100} />
      </S.IconWrapper>
      <S.InputWrapper>
        <input type="text" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} />
        <span>
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </span>
      </S.InputWrapper>
      <S.SubmitBtnWrapper onClick={handleLogin}>
        <span>로그인</span>
      </S.SubmitBtnWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 34%;
    height: 85%;
    border: 1px solid #bbbbbb;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  `,
  IconWrapper: styled.div`
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  `,
  InputWrapper: styled.div`
    width: 93%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    & > input {
      margin: 7px;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
      font-size: 24px;
      padding: 3px;
      border: none;
      border-bottom: 1px solid #a6a6a6;
    }
    & > span {
      align-self: flex-end;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      & > * {
        text-decoration: none;
        color: #025f94;
      }
    }
  `,
  SubmitBtnWrapper: styled.div`
    width: 90%;
    background: #ffffff;
    border: 3px solid #025f94;
    box-sizing: border-box;
    border-radius: 50px;
    padding: 4px;
    text-align: center;
    align-self: flex-end;
    margin: 3vh;
    cursor: pointer;
    & > span {
      font-style: normal;
      font-weight: normal;
      font-size: 28px;
      line-height: 32px;

      color: #025f94;
    }
  `,
};

export default Login;
