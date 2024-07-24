import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 134px;
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  user-select: none;

  @media (max-width: 1100px) {
    padding: 0 10px;
    height: 90px;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #000;
  margin: 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }
`;

export const CenterIconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-decoration: none;
  margin: 0 10px;
  gap: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const MenuButton = styled.div`
  display: none;
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 1100px) {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: transform 0.3s, opacity 0.3s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  &.open::before {
    transform: rotate(45deg);
    top: 50%;
  }

  &.open::after {
    transform: rotate(-45deg);
    top: 50%;
  }

  &.open > div {
    opacity: 0;
  }
`;

export const BurgerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition: opacity 0.2s;
`;

export const MobileNavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen' //Resolvido bug (react does not recognize the `isOpen` prop on a DOM element)
})`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  padding: 20px;
  z-index: 999;

  @media (max-width: 1100px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

export const MobileNavLink = styled.a`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  text-decoration: none;
  margin: 10px 0;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;
