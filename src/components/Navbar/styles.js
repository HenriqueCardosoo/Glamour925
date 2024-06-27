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
  color: ${({ theme }) => theme.COLORS.GRAY_300};
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

  &:hover {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  @media (max-width: 1100px) {
    margin: 0;
  }
`;

export const MenuButton = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const MobileNavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen' //Resolvido bug (react does not recognize the `isOpen` prop on a DOM element)
})`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: #efd2d7;
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
