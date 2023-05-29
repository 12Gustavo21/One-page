import styled from "styled-components";

export const ButtonBox = styled.section`
    .scroll-to-top-button {
        display: none;
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        width: 3rem;
        height: 3rem;
        border: none;
        background-color: #D7D4FF;
        color: #2F2E41;
        border: 0.125rem solid #2F2E41;
        font-size: 2em;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        z-index: 1;
    }

    .scroll-to-top-button.visible {
        display: block;
        opacity: 1;
    }
`;