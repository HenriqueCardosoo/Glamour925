import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 45px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    @media (max-width: 950px) {
      font-size: 30px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 25px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    @media (max-width: 950px) {
      font-size: 18px;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  justify-items: center;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const CategoryContent = styled.div`
  width: 230px;
  height: 230px;

  @media (max-width: 1600px) {
    width: 200px;
  }

  @media (max-width: 1100px) {
    width: 170px;
    height: 200px;
  }

  @media (max-width: 950px) {
    width: 150px;
    height: 170px;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  /* border-radius: 8px; */
`;

export const CategoryText = styled.span`
  margin-top: 10px;
  font-size: 18px;
  color: #333;
`;
