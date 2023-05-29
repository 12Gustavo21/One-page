import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 60vh;
    background-color: #d7d5ff;

    @media (width <= 768px) {
        height: 100vh;
    }
`;

export const HeaderContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (width <= 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Informations = styled.section`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (width <= 768px) {
        width: 100%;
        height: 50%;
        justify-content: flex-start;
        padding-top: 3rem;
    }
`;

export const TextBox = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    h1 {
        display: flex;
        flex-direction: column;
        font: 400 2vw "Merriweather", serif;
        color: #2b2b2b;
        font-size: clamp(1.5rem, 2vw, 2rem);
    }

    p {
        display: flex;
        flex-direction: column;
        font: 400 1.5vw "Lato", sans-serif;
        color: #555555;
        font-size: clamp(0.9rem, 1.5vw, 1rem);
    }

    button {
        width: 8rem;
        height: 2.5rem;
        background: #6c63ff;
        box-shadow: 0 0.3125rem 0.3125rem rgba(23, 23, 23, 0.1);
        border-radius: 0.3125rem;
        border: none;
        cursor: pointer;
        color: #fff;
        font: 700 1em "Lato", sans-serif;
        transition: all 0.2s ease-in-out;

        &:hover {
        background: #5a4fff;
        }

        &:active {
        background: #4a3eff;
        transform: scale(0.9);
        }
    }

    @media (width <= 768px) {
        width: 90%;
        align-items: flex-start;
    }
`;

export const HeaderFigure = styled.figure`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        width: 60%;
        height: 60%;
    }

    @media (width <= 1024px) {
        width: 50%;

        img {
            width: 90%;
            height: 90%;
        }
    }

    @media (width <= 768px) {
        width: 90%;
        height: 50%;
        justify-content: center;
        

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    margin: 7rem 0;
`;

export const Cards = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
`;

export const CardBox = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 0 1rem;
    gap: 2rem;

    @media (width <= 1024px) {
        flex-direction: column;
    }
`;

export const Card = styled.article`
    width: clamp(19.5rem, 20vw, 20rem);
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);

    .red {
        background-color: #FF6363;
    }

    .cyan {
        background-color: #63ECFF;
    }

    .magenta {
        background-color: #F363FF;
    }

    .green {
        background-color: #63FF73;
    }

    .yellow {
        background-color: #FFDD63;
    }

    .purple {
        background-color: #6663FF;
    }
`;

export const Color = styled.section`
    width: 100%;
    height: 60%;
`;

export const Description = styled.section`
    width: 100%;
    height: 50%;
    padding: 1.5rem 5rem 2rem 2rem;
    gap: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font: 700 1.2em "Merriweather", serif;
        color: #2B2B2B;
    }

    p {
        font: 400 1em/1.875rem "Lato", sans-serif;
        color: #555555;
    }
`;