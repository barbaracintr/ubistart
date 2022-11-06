import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        font-family: Inter, sans-serif;
    }
    button{
        cursor: pointer;
    }
    ul, ol, li{
        list-style: none;
    }
    body{
        // margin: 0 auto;
        width: 100vw;
        height: 100vh;
        overflow: auto;

        ::-webkit-scrollbar {
                width: 0.2rem;
            }
            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
            ::-webkit-scrollbar-thumb {
                background: #c51162;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: #f50057;
            }
    }
    ::selection {
        background-color: pink;
    }
`;