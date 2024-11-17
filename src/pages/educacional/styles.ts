import styled from '@emotion/styled';

export const EducacionalStyled = styled.div`
  font-family: Arial, sans-serif;
  color: #5c5c5c;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

export const Header = styled.header`
  text-align: left;
  margin: 20px auto;
  width: 80%;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .underline {
    height: 2px;
    background-color: #f16421;
    width: 1190px;
    margin: 10px 0;
  }

  .search-container {
    display: flex;
    align-items: center;
    margin-top: 20px;

    input {
      flex: 1;
      max-width: 600px;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid #ccc;
      background-color: #fae5db;
      margin-right: 10px;
    }

    img {
      margin-right: 10px;
      width: 24px;
      height: 24px;
    }
  }
`;

export const Section = styled.section`
  margin: 80px auto;
  margin-top: 0px;
  text-align: left;
  width: 80%;

  p {
    font-size: 1rem;
    line-height: 1.8;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .underline {
    width: 1190px;
    height: 2px;
    background: #f16421;
    margin: 0;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%; /* Garante que o carrossel ocupe o espaço */
  margin-bottom: 40px; /* Margem inferior do carrossel */

  .carousel-container {
    overflow: hidden;
    display: flex;
    align-items: center; /* Alinhamento central vertical */
    justify-content: center; /* Centraliza horizontalmente */
    width: 50%; /* Ajusta o tamanho visível do carrossel */
    flex-direction: column;
  }

  .carousel-item {
    flex: 0 0 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      object-fit: contain;
      width: 50%;
    }

    h3 {
      margin-top: 10px; /* Espaçamento entre imagem e texto */
      text-align: center; /* Centraliza o texto */
    }
  }

  .carousel-nav {
    position: absolute;
    top: 50%; /* Centraliza verticalmente */
    transform: translateY(-50%);
    cursor: pointer;
    background: none; /* Remove fundo do botão */
    border: none; /* Remove borda do botão */
    padding: 0; /* Remove padding extra */

    &.prev {
      left: calc(
        50% - 400px
      ); /* Posiciona o botão esquerdo ao lado da imagem central */
    }

    &.next {
      right: calc(
        50% - 400px
      ); /* Posiciona o botão direito ao lado da imagem central */
    }

    img {
      width: 100px; /* Aumenta o tamanho das setas */
      height: 100px;
    }
  }
`;

export const Card = styled.div`
  max-width: 380px;
  max-height: 255px;
  border-radius: 10px;
  background: #f5e0d6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  flex-shrink: 0;
  margin-top: 0px;

  h3 {
    color: #034381;
    margin-top: 10px;
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    color: #034381;
    margin-top: 10px;
  }
`;

export const RelatedSection = styled.section`
  background-color: #1c1c5e;
  color: white;
  text-align: left;
  padding: 40px 0;

  h2 {
    margin-bottom: 10px;
    width: 80%;
    margin: 0 auto;
  }

  .related-content {
    margin: 0 auto;
    width: 80%;
    text-align: left;

    img {
      width: 100%;
      margin-top: 20px;
    }
  }

  p {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
