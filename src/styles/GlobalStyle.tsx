import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
  * {
    font-family : "NanumBarunGothic"
  }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
    button {
        cursor: pointer;
        outline: none;
    }
    
  ::-webkit-scrollbar {
    width: 11px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #6983DC;
    border-radius: 20px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;
