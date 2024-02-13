import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #333;
        flex-direction: column;
    }
`;

export const Center = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
