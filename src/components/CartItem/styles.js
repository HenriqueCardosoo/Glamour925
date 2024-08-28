import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 5px 0 0;
  }
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: #000;
  border: none;
  padding: 5px 10px;
  margin: 30px;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: pink;
    color: #fff;
  }
`;

export const QuantitySelector = styled.input`
  width: 50px;
  padding: 5px;
  margin-top: 10px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
