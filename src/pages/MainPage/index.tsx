import React from "react";
import styled from "styled-components";
import background from "../../assets/background/back.png";

const MainPage: React.FC = () => {
  return (
    <Positioner>
      <div>hello</div>
    </Positioner>
  );
};

const Positioner = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
`;

export default MainPage;
