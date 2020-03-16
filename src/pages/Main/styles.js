import styled from "styled-components";

export const Container = styled.div`
  max-width: 360px;
  background: #191920;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 80px auto;
`;

export const ButtonList = styled.ul`
  color: #fff;
  background: #191920;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  list-style: none;

  li button {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    font-weight: bold;
    color: #ff8700;
    font-family: "Roboto", sans-serif;
    border: 0;
    cursor: pointer;
    margin: 0 auto;
    width: 50%;
    align-items: center;
    text-align: center;
    padding: 30px;
    background: #191920;
  }
`;

export const Input = styled.input`
  background: #191920;
  border: 0;
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #fff;
  margin: 0 auto;
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
  padding-right: 10px;
  padding-left: 25px;
  padding-top: 100px;
  max-width: 320px;
`;
