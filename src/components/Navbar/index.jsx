// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Logo, NavLinks, NavLink, IconLink, MenuButton, MobileNavLinks, MobileNavLink, IconContainer, BurgerLine, Badge } from './styles';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import SearchBar from '../Search';

export default function Navbar({ toggleCart, cartItemCount }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
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
          <IconLink
            href="#cart"
            onClick={(e) => {
              e.preventDefault();
              toggleCart();
            }}
          >
            <FaShoppingBag />
            {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
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
          <IconLink
            href="#cart"
            onClick={(e) => {
              e.preventDefault();
              toggleCart();
            }}
          >
            <FaShoppingBag />
            {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
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
    </>
  );
}

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired
};
