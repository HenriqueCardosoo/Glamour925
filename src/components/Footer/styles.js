// src/components/styles.js
import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 20px 0;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LinksItem = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 0 15px;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Copy = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
