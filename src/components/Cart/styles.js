import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const CartContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const CartItem = styled.div`
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

export const CartFooter = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
`;

export const ContinueButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #444;
  }
`;

export const CartScroll = styled.div`
  max-height: 90vh;
  overflow-y: auto;
`;

export const GoToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
