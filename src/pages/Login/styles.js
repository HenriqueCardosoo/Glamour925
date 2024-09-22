import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  gap: 10px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  input,
  button {
    padding: 10px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid;
  }
`;

export const Register = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid;
`;
