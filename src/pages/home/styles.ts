import styled from '@emotion/styled';

// Contêiner principal
export const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

// Header (Carrossel)
export const Header = styled.header`
  background: #f4f4f4;
  padding: 20px;

  .carousel {
    display: flex;
    align-items: center;

    .arrow {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }

    .slides {
      display: flex;
      gap: 20px;
      overflow: hidden;

      .slide {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffc107;
        border-radius: 10px;
        padding: 20px;
        min-width: 300px;
      }

      .content {
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin-bottom: 20px;
        }

        button {
          background: white;
          color: #003087;
          border: 2px solid #003087;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;

// Seção geral
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  .text-content {
    max-width: 600px;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    button {
      background: white;
      color: #003087;
      border: 2px solid #003087;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .image-placeholder {
    width: 300px;
    height: 200px;
    background: #ddd;
    border-radius: 10px;
  }
`;

// Linha decorativa
export const Line = styled.div<{ bgColor?: string; width?: string }>`
  height: 4px;
  background: ${({ bgColor }) => bgColor || '#F16421'};
  width: ${({ width }) => width || '50px'};
  margin: 10px 0;
`;

// Contêiner de cartões
export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

// Cartão individual
export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 300px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  span {
    font-size: 12px;
    color: #666;
  }

  button {
    background: white;
    color: #003087;
    border: 2px solid #003087;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  .image-placeholder {
    width: 100%;
    background: #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
