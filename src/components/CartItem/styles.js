import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;

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
  padding: 8px 10px;
  border-radius: 5px;
  margin: 30px;

  cursor: pointer;
  font-size: 0.8rem;

  &:hover {
    background: pink;
    color: #fff;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 50px;
  /* padding: 0 10px; */

  &:hover {
    border: 1px solid pink;
    transition: 0.3s ease;
    box-shadow: 0px 0px 0px 1.6px pink;
  }
`;

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 20px;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: black;
  background: transparent;
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 0px 1.6px black;
    border: 1px solid black;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:nth-last-child(1) {
    color: pink;
  }
`;

export const QuantityDisplay = styled.span`
  padding: 0 10px;
  font-size: 16px;
  display: inline-block;
  min-width: 30px;
  text-align: center;
`;
