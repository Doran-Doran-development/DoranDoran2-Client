import { Logo } from "assets";
import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  grade: number;
  homeroom: number;
  certification_code: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRepassword: (rePassword: string) => void;
  setGrade: (grade: number) => void;
  setHomeroom: (homeroom: number) => void;
  setCertificaionCode: (code: string) => void;
  handleSignup: () => void;
}

const Signup: React.FC<Props> = (props) => {
  const {
    name,
    email,
    password,
    rePassword,
    grade,
    homeroom,
    certification_code,
    setName,
    setEmail,
    setPassword,
    setRepassword,
    setCertificaionCode,
    setGrade,
    setHomeroom,
    handleSignup,
  } = props;
  const [isChecked, toggleChecked] = useState<boolean>(false);
  const handleToggle = () => {
    toggleChecked(!isChecked);
  };

  return (
    <S.Positioner>
      <S.Wrapper>
        <S.IconWrapper>
          <Logo width={100} height={100} />
        </S.IconWrapper>
        <S.InputWrapper>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={rePassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          <label>
            <input type="checkbox" checked={isChecked} onClick={handleToggle} />
            선생님이십니까?
          </label>
          {isChecked ? (
            <S.TeacherWrapper>
              <input
                type="text"
                placeholder="인증코드"
                value={certification_code}
                onChange={(e) => setCertificaionCode(e.target.value)}
              />
              <S.ClassInputWrapper>
                <input
                  type="number"
                  placeholder="학년"
                  value={grade}
                  onChange={(e) => setGrade(parseInt(e.target.value))}
                />
                <input
                  type="number"
                  placeholder="반"
                  value={homeroom}
                  onChange={(e) => setHomeroom(parseInt(e.target.value))}
                />
              </S.ClassInputWrapper>
              <span>담임이 아니시라면 학년 반을 0으로 설정 해주세요</span>
            </S.TeacherWrapper>
          ) : null}
        </S.InputWrapper>
      </S.Wrapper>
      <S.SubmitBtnWrapper onClick={handleSignup}>
        <span>회원가입</span>
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
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  IconWrapper: styled.div`
    flex: 0.7;
    display: flex;
    align-self: flex-end;
    margin: 0 10px;
    & > * {
      align-self: flex-end;
    }
  `,
  InputWrapper: styled.div`
    width: 93%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    & > input {
      flex: 1;
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
    & > label {
      margin: 4px;
      font-weight: 300;
      font-size: 21px;
      padding: 5px;
      input {
        width: 5%;
      }
    }
  `,
  TeacherWrapper: styled.div`
    width: 93%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    & > input {
      flex: 1;
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
    span {
      font-style: normal;
      font-weight: 300;
      font-size: 21px;
      line-height: 28px;
      color: #6b6b6b;
    }
  `,
  ClassInputWrapper: styled.div`
    display: flex;
    & > input {
      width: 14%;
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
export default Signup;
