import styled from 'styled-components';

export const InputDiv = styled.div`
  width: 80%;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  margin: 1%;
  border-radius: 15px;
  width: 30%;
  background: white;
  color: green;
  &:hover {
    background: green;
    color: white;
  }
`;

export const InputLabel = styled.label`
  text-align: start;
  color: green;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: .8rem;
  margin-top: 1%;
`;

export const LoginBox = styled.div`
  width: 40%;
  margin: 2% auto;
  padding: 1%;
  border: 1px solid black;
  border-radius: 25px;
  box-shadow: 5px 5px 5px black;
`;

export const AppTitle = styled.h1`
  color: green;
  margin: 1%;
`;

export const AppLogin = styled.h3`
  color: green;
  margin: 1%;
  font-size: 1.6rem;
`;