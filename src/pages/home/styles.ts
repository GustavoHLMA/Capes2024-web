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
          color: #1c1c5e;
          border: 2px solid #1c1c5e;
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
  justify-content: center;
  align-items: center;
  padding: 40px;

  .text-content {
    max-width: 600px;
    margin-left: 20px;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      margin-bottom: 20px;
      margin-left: 40px;
    }

    button {
      background: white;
      color: #1c1c5e;
      border: 2px solid #1c1c5e;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      margin-left: 40px;
    }
    
    image-placeholder {
      width: 100%;
      height: 200px;
      background: #ddd;
      border-radius: 10px;
      margin-bottom: 10px;
  }
`;

// Linha decorativa
export const Line = styled.div<{ bgColor?: string; width?: string }>`
  height: 2px;
  background: ${({ bgColor }) => bgColor || '#F16421'};
  width: ${({ width }) => width || '100%'};
  margin: 10px 0;
  margin-bottom: 20px;
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
    color: #1c1c5e;
    border: 2px solid #1c1c5e;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 0px;
    width: 100%;
  }

  .image-placeholder {
    width: 100%;
    height: 200px;
    background: #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
