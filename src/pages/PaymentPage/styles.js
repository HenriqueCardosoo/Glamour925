import styled from 'styled-components';

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  min-height: 100%;
  position: fixed;
`;

export const ItemsContainer = styled.div`
  max-height: 65vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ItemImage = styled.img`
  width: 100px; // Defina a largura desejada
  height: auto;
  object-fit: cover;
  border-radius: 5px;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

export const FinalizeButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
