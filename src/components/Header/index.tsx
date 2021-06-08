import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../../assets";

const NonMember = () => {
  return (
    <>
      <S.HeaderLink to="/login">로그인</S.HeaderLink>
      <S.HeaderLink to="/signup">회원가입</S.HeaderLink>
    </>
  );
};

const MemberStudent = () => {
  const handleLogout = () => {
    sessionStorage.clear();
  };
  return (
    <>
      <S.HeaderLink to="/Home">회의실 목록보기</S.HeaderLink>
      <S.HeaderLink to="/outing">외출 신청하기</S.HeaderLink>
      <S.HeaderLink to="/mypage">마이페이지</S.HeaderLink>
      <S.HeaderLink to="/" onClick={handleLogout} id="logout">
        로그아웃
      </S.HeaderLink>
    </>
  );
};
const MemberTeacher = () => {
  const handleLogout = () => {
    sessionStorage.clear();
  };
  return (
    <>
      <S.HeaderLink to="/Home">회의실 목록보기</S.HeaderLink>
      <S.HeaderLink to="/escape">외출 관리하기</S.HeaderLink>
      <S.HeaderLink to="/mypage">마이페이지</S.HeaderLink>
      <S.HeaderLink to="/" onClick={handleLogout} id="logout">
        로그아웃
      </S.HeaderLink>
    </>
  );
};
const Header: React.FC = () => {
  const token = window.sessionStorage.getItem("dorandoran_token") || true;
  return (
    <S.Positioner>
      <S.LogoWrapper>
        <Logo width={51} height={51} />
      </S.LogoWrapper>
      <S.ContentWrapper>
        {token ? <MemberStudent /> : <NonMember />}
      </S.ContentWrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
  `,
  LogoWrapper: styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    flex: 0.65;
  `,
  ContentWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0.6;
    padding-right: 10rem;
  `,
  HeaderLink: styled(Link)`
    margin: 0px 2vw;
    &#logout {
      color: #566fc9;
    }
    text-decoration: none;
    font-size: 22px;
    font-weight: 400;
    color: #878787;
  `,
};

export default Header;
