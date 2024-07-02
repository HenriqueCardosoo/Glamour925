import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 100px;
  padding-top: 236px;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 30px;
    padding-top: 200px;
    overflow: hidden;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;
  box-sizing: border-box;

  main {
    width: 100%;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #222;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  gap: 65px;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;

export const StaticImagesWrapper = styled.div`
  display: flex;
  gap: 65px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 417px;
  height: 654px;
  flex-shrink: 0;
  background-color: gray;

  @media (max-width: 1100px) {
    width: 317px;
    height: 400px;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: none;
  align-items: center;

  @media (max-width: 1100px) {
    display: flex;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
  transform: translateX(${({ translate }) => translate}px);
  transition: transform 0.3s ease-in-out;
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
