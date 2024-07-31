// src/components/Carousel/styles.js
import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  transform: translateX(${({ translate }) => translate}px);
  transition: transform 0.3s ease-in-out;
`;

export const Img = styled.img`
  width: 417px;
  height: 654px;
  flex-shrink: 0;
  background-color: gray;
  cursor: pointer;

  @media (max-width: 1100px) {
    width: 317px;
    height: 400px;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
  color: #000;

  &:hover {
    color: #222;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

export const Indicator = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})`
  transition: 1s;
  width: 10px;
  height: 10px;
  background-color: ${({ isActive }) => (isActive ? '#000' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
`;
