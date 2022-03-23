import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 960px;
  margin: 0 auto;

  @media (max-width: 1080px) {
    width: 640px;
  }

  @media (max-width: 720px) {
    width: 320px;
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const Search = styled.div`
  text-align: center;
  margin: 20px 0;
  & > input {
    font-size: 18px;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 10px 15px;
    outline: none;
  } & > input:hover, > input:focus {
    background-color: #ddd;
  } & > button {
    cursor: pointer;
    font-size: 18px;
    margin-left: 10px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding 10px 15px;
  } & > button:hover {
    background-color: #ddd;
  }

  @media (max-width: 720px) {
    & > button {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;

export const Pagination = styled.div`
  text-align: center;
  padding: 20px 0;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
  } & > button {
    cursor: pointer;
    font-size: 18px;
    width: 150px;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding 10px 15px;
  } & > button:hover {
    background-color: #ddd;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > button {
      font-size: 16px;
    }
  }
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 230px;
    margin: 0 auto;
  }
`;