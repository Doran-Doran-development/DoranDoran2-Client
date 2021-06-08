import { FilterIcon, Search } from "assets";
import React from "react";
import styled from "styled-components";

interface ClassType {
  grade: number;
  classnum: number;
  teacher: string;
  currentPerson: number;
  personCount: number;
}

interface PersonType {
  classnum: number;
  name: string;
  status: number;
  etc: string;
}

const ClassItem: React.FC<ClassType> = ({ grade, classnum, teacher, currentPerson, personCount }) => {
  return (
    <S.ClassItemWrapper>
      <S.ClassInfoWrapper>
        <div>
          <S.ClassCircle />
          <span>
            {grade}학년 {classnum}반
          </span>
        </div>
        <span>{teacher}</span>
      </S.ClassInfoWrapper>
      <S.PersonCountWrapper>
        <span>{currentPerson}</span>
        <span>/{personCount}명</span>
      </S.PersonCountWrapper>
    </S.ClassItemWrapper>
  );
};
const PersonStatusItem: React.FC<PersonType> = ({ classnum, name, status, etc }) => {
  return (
    <S.PersonStatusListItemWrapper>
      <span>{classnum}</span>
      <span>{name}</span>
      <span>교실</span>
      <span>{etc}</span>
    </S.PersonStatusListItemWrapper>
  );
};

interface HomeType {
  ClassList: ClassType[];
  PersonStatusList: PersonType[];
}

const Home: React.FC<HomeType> = ({ ClassList, PersonStatusList }) => {
  return (
    <S.Positioner>
      <S.Wrapper>
        <S.SearchWrapper>
          <S.HomeTitleWrapper>
            <S.HomeTitleText>학생 전체 현황</S.HomeTitleText>
          </S.HomeTitleWrapper>
          <S.SearchFilterWrapper>
            <FilterIcon />
            <S.SearchInputWrapper>
              <input type="text" placeholder="검색.." />
              <Search />
            </S.SearchInputWrapper>
          </S.SearchFilterWrapper>
        </S.SearchWrapper>
        <S.ClassStatusWrapper>
          <S.ClassListWrapper>
            {ClassList.map(item => (
              <ClassItem {...item} />
            ))}
          </S.ClassListWrapper>
          <S.PersonStatusListWrapper>
            <S.PersonStatusListTitleWrapper>
              <span>학번</span>
              <span>이름</span>
              <span>상태</span>
              <span>기타</span>
            </S.PersonStatusListTitleWrapper>
            <S.PersonStatusListContainer>
              {PersonStatusList.map(item => (
                <PersonStatusItem {...item} />
              ))}
            </S.PersonStatusListContainer>
          </S.PersonStatusListWrapper>
        </S.ClassStatusWrapper>
      </S.Wrapper>
    </S.Positioner>
  );
};

const S = {
  Positioner: styled.div`
    width: 100%;
    height: calc(100% - 90px);
    display: flex;
    justify-content: center;
    background-color: #f7f9fb;
  `,
  Wrapper: styled.div`
    width: 90%;
    height: 85%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  `,
  HomeTitleWrapper: styled.div`
    flex: 0.75;
  `,
  HomeTitleText: styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.05em;

    color: #000000;
    border-bottom: 1.5px solid black;
  `,
  SearchWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 18px;
  `,
  SearchFilterWrapper: styled.div`
    flex: 0.35;
    display: flex;
    justify-content: space-between;
  `,
  SearchInputWrapper: styled.div`
    flex: 0.97;
    background-color: white;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      font-size: 22px;
      flex: 0.9;
      border: none;
      &::placeholder {
        color: #c1c1c1;
      }
    }
  `,
  ClassStatusWrapper: styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 10px;
    display: flex;
  `,
  ClassListWrapper: styled.div`
    flex: 0.25;
    border-radius: 10px;
    margin: 10px;
    margin-right: 0;
    background-color: #f0f0f0;
    overflow: auto;
    padding: 30px;
  `,
  ClassItemWrapper: styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    box-shadow: 1px 1px 1px 2px rgba(204, 204, 204, 0.25);
    border-radius: 10px;
    margin: 35px 0px;
  `,
  ClassInfoWrapper: styled.div`
    & > div > span {
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;

      color: #000000;
    }
    & > span {
      margin-left: 20px;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;

      color: #aeaeae;
    }
    & > div {
      display: flex;
      align-items: center;
    }
  `,
  ClassCircle: styled.div`
    margin: 3px 3px 5px 3px;
    width: 15px;
    height: 15px;
    background: #98b2d1;
    border-radius: 100%;
  `,
  PersonCountWrapper: styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #818181;
    & > span:first-child {
      color: #98b2d1;
    }
  `,
  PersonStatusListWrapper: styled.div`
    flex: 0.85;
    display: flex;
    flex-direction: column;
  `,
  PersonStatusListTitleWrapper: styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 3px solid #b5b5b5;
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;

      color: #737373;
    }
  `,
  PersonStatusListContainer: styled.div`
    width: 100%;
    height: 90%;
    overflow: auto;
  `,
  PersonStatusListItemWrapper: styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #b5b5b5;
    span {
      flex: 1;
      font-style: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #a2a2a2;
    }
  `,
};
export default Home;
