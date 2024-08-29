import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 200px;

  @media (max-width: 950px) {
    padding: 10px;
    padding-top: 200px;
  }
`;

export const CategoryItem = styled.div`
  width: 30%; /* Exibe 3 itens lado a lado no desktop */

  @media (max-width: 950px) {
    width: 30%; /* Exibe 2 itens lado a lado no mobile */
  }

  @media (max-width: 700px) {
    width: 45%; /* Exibe 2 itens lado a lado no mobile */
  }

  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Info = styled.div`
  padding: 10px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Installments = styled.p`
  font-size: 14px;
  color: #555;
`;

export const AddToCartButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;

  @media (max-width: 950px) {
    padding: 5px 10px;
  }

  &:hover {
    background: #444;
  }
`;
