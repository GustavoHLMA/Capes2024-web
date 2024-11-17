import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  font-family: 'Poppins', sans-serif;
  color: #5c5c5c;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  color: white;

  div:first-of-type {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-size: 14px;
    }
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      color: white;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      background: none;
      color: white;
      border: 1px solid white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        background-color: #004b8a;
      }
    }
  }
`;

export const TextBla = styled.p`
  color: #898989;
  text-decoration: none;
  font-size: 0.9rem;
`;

export const GovNames = styled.p`
  color: #1351b4;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
  margin-left: 4vw;
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  margin-left: 2vw;
  margin-top: 1rem;

  input {
    width: 200%;
    color: #757575;
    height: 3.375rem;
    padding: 0.55rem 19.12375rem 0.575rem 3.28875rem;
    align-items: center;
    flex-shrink: 0;
    font-size: 16px;
    border-radius: 1rem;
    border: 0.8px solid #d5d5d5;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  font-size: 16px;
  font-weight: bold;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  color: #1d1d1d;
  transition: color 0.3s;

  &:hover {
    color: #004b8a;
    text-decoration: underline;
  }
`;

export const Banner = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  font-size: 16px;
  padding: 15px 20px;
  background-color: #1c1c5e;
  color: white;

  span {
    font-size: 1.1875rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AccessButton = styled.button`
  background-color: #1c1c5e;
  color: #b4d6e6;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.125rem;
  cursor: pointer;
  transition:
    transform 0.3s,
    background-color 0.3s;

  &:hover {
    background-color: #004b8a;
    transform: scale(1.05);
  }
`;

export const ButtonBar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 1rem;

  button {
    background-color: #f5f5f5;
    color: #000;
    border: 0px solid #005aa5;
    width: 17.70313rem;
    height: 4rem;
    padding: 1.4375rem 2.9375rem 1.375rem 2.95313rem;
    border-radius: 0.75rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      background-color: #1a8dc3;
      color: white;
    }
  }
`;
