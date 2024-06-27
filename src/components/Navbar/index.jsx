// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Logo, NavLinks, NavLink, IconLink, MenuButton, MobileNavLinks, MobileNavLink, IconContainer } from './styles';
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <Container>
      <Logo>Glamour925</Logo>
      <NavLinks>
        <NavLink href="#prata925">Prata 925</NavLink>
        <NavLink href="#semijoias">Semijóias</NavLink>
        <NavLink href="#pulseras">Pulseiras</NavLink>
        <NavLink href="#correntes">Correntes</NavLink>
        <NavLink href="#pingentes">Pingentes</NavLink>
        <NavLink href="#aneis">Anéis</NavLink>

        <IconLink href="#search">
          <FaSearch />
        </IconLink>
        <IconLink href="#user">
          <FaUser />
        </IconLink>
        <IconLink href="#wishlist">
          <FaHeart />
        </IconLink>
        <IconLink href="#cart">
          <FaShoppingBag />
        </IconLink>
      </NavLinks>
      <IconContainer>
        <MenuButton onClick={toggleMobileNav}>
          <FaBars />
        </MenuButton>

        <IconLink href="#search">
          <FaSearch />
          <span>Buscar</span>
        </IconLink>
        <IconLink href="#cart">
          <FaShoppingBag />
        </IconLink>
      </IconContainer>
      <MobileNavLinks isOpen={isMobileNavOpen}>
        <MobileNavLink href="#prata925">Prata 925</MobileNavLink>
        <MobileNavLink href="#semijoias">Semijóias</MobileNavLink>
        <MobileNavLink href="#pulseras">Pulseiras</MobileNavLink>
        <MobileNavLink href="#correntes">Correntes</MobileNavLink>
        <MobileNavLink href="#pingentes">Pingentes</MobileNavLink>
        <MobileNavLink href="#aneis">Anéis</MobileNavLink>
      </MobileNavLinks>
    </Container>
  );
}

export default Navbar;
