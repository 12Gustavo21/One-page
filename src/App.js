import React, { useState, useEffect } from "react";

//Styles
import { GlobalStyle } from "./global/style";
import * as S from "./assets/style/style";

//Images
import Gift from "./assets/img/gift.svg";

//Json
import Cards from "./cards.json";

//Aos library
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {

  const [cards, setCards] = useState([]);

  const getCards = () => {
    const data = Cards.map((card) => ({
      ...card,
    }));
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    getCards();
  }, []);

  function getCurrentYear() {
    const year = new Date().getFullYear();
    return year;
  }

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <GlobalStyle />
      <S.Header>
        <S.HeaderContainer>
          <S.Informations>
            <S.TextBox>
              <h1>
                Lorem ipsum dolor <span>sit amet</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur{" "}
                <span>adipiscing elit. Maecenas eu massa sit amet</span> augue
                consectetur ullamcorper non ac massa.
              </p>
              <button>Botão</button>
            </S.TextBox>
          </S.Informations>
          <S.HeaderFigure>
            <img src={Gift} alt="Gift" draggable="false" />
          </S.HeaderFigure>
        </S.HeaderContainer>
      </S.Header>
      <S.Main>
        <ScrollToTopButton />
        <S.Cards>
          <S.CardBox>
            {cards.slice(0, 3).map((card) => (
              <S.Card key={card.id} data-aos="fade-up" data-aos-duration="1000">
                <S.Color className={card.color}></S.Color>
                <S.Description>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </S.Description>
              </S.Card>
            ))}
          </S.CardBox>
          <S.CardBox>
            {cards.slice(3, 6).map((card) => (
              <S.Card key={card.id} data-aos="fade-up" data-aos-duration="1000">
                <S.Color className={card.color}></S.Color>
                <S.Description>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p> 
                </S.Description>
              </S.Card>
            ))}
          </S.CardBox>
        </S.Cards>
      </S.Main>
      <footer>
        <form>
          <section>
            <h3>Entre em contato</h3>
          </section>
          <section>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Telefone" />
            <textarea placeholder="Mensagem" spellCheck="true"></textarea>
            <button type="submit">Enviar</button>
          </section>
        </form>
        <section>
          <p>
            Copyright © {getCurrentYear()}
            <a
              href="https://www.instagram.com/iuricode/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @iuricode
            </a>
          </p>
        </section>
      </footer>
    </>
  );
}
