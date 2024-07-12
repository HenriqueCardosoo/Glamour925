/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Logo, NavLinks, NavLink, IconLink, MenuButton, MobileNavLinks, MobileNavLink, IconContainer, BurgerLine } from './styles';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SearchBar from '../Search';
import Cart from '../Cart';

export default function Navbar({ cartItems }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <Container>
        <Logo>Glamour925</Logo>
        <NavLinks>
          <NavLink href="#prata925">Prata 925</NavLink>
          <NavLink href="#semijoias">Semijóias</NavLink>
          <NavLink href="#pulseiras">Pulseiras</NavLink>
          <NavLink href="#correntes">Correntes</NavLink>
          <NavLink href="#pingentes">Pingentes</NavLink>
          <NavLink href="#aneis">Anéis</NavLink>

          <IconLink href="#search" onClick={toggleSearch}>
            <FaSearch />
          </IconLink>
          <IconLink href="#user">
            <FaUser />
          </IconLink>
          <IconLink href="#wishlist">
            <FaHeart />
          </IconLink>
          <IconLink href="#cart" onClick={toggleCart}>
            <FaShoppingBag />
          </IconLink>
        </NavLinks>
        <IconContainer>
          <MenuButton onClick={toggleMobileNav} className={isMobileNavOpen ? 'open' : ''}>
            <BurgerLine />
          </MenuButton>

          <IconLink href="#search" onClick={toggleSearch}>
            <FaSearch />
            <span>Buscar</span>
          </IconLink>
          <IconLink href="#cart" onClick={toggleCart}>
            <FaShoppingBag />
          </IconLink>
        </IconContainer>
        {isSearchOpen && <SearchBar isOpen={isSearchOpen} />}
        <MobileNavLinks isOpen={isMobileNavOpen}>
          <MobileNavLink href="#prata925">Prata 925</MobileNavLink>
          <MobileNavLink href="#semijoias">Semijóias</MobileNavLink>
          <MobileNavLink href="#pulseiras">Pulseiras</MobileNavLink>
          <MobileNavLink href="#correntes">Correntes</MobileNavLink>
          <MobileNavLink href="#pingentes">Pingentes</MobileNavLink>
          <MobileNavLink href="#aneis">Anéis</MobileNavLink>
        </MobileNavLinks>
      </Container>
      <Cart items={cartItems} isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
}

Navbar.propTypes = {
  cartItems: PropTypes.array.isRequired
};
