// src/components/ItemDetails/styles.js
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
`;

export const ItemImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

export const ItemText = styled.h2`
  margin-bottom: 10px;
`;

export const ItemPrice = styled.p`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
`;

export const AddToCartButton = styled.button`
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

export const BackButton = styled.button`
  background: #ccc;
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;

  &:hover {
    background: #aaa;
  }
`;
// floating-anime
const flyToCart = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0.5;
    transform: translate(500px, -500px) scale(0.2);
  }
`;

export const AnimatedImage = styled.img`
  position: absolute;
  z-index: 1000;
  animation: ${flyToCart} 1s ease-in-out forwards;
  width: 100px;
  height: 100px;
`;
