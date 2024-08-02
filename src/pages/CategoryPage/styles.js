import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 200px;
`;

export const CategoryItem = styled.div`
  width: 30%;
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
