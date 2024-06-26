// src/components/Navbar/style.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  background-color: #efd2d7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 134px;
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #000;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;
  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
