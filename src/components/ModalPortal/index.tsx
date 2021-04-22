import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalType {
  isShow: boolean;
}

const ModalPortal: React.FC<ModalType> = ({ isShow, children }) => {
  return isShow
    ? ReactDOM.createPortal(
        <>
          <S.ModalOverlay />
          {children}
        </>,
        document.body
      )
    : null;
};

const S = {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  `,
};
export default ModalPortal;
