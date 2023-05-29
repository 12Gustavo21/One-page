import React, { useState, useEffect } from "react";

//Styles
import { GlobalStyle } from "./global/style";
import * as S from "./assets/style/style";

//Images
import Gift from "./assets/img/gift.svg";

//Json
import Cards from "./cards.json";

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
      <main>
        <section>
          {cards.map((card) => (
            <section key={card.id}>
              <section className={card.color}></section>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </section>
          ))}
        </section>
      </main>
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
