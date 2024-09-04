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
          <NavLink href="/category/aneis">Anéis</NavLink>
          <NavLink href="/category/pulseiras">Pulseiras</NavLink>
          <NavLink href="/category/brincos">Brincos</NavLink>
          <NavLink href="/category/colares">Colares</NavLink>
          <NavLink href="/category/pingentes">Pingentes</NavLink>
          <NavLink href="/category/aliancas">Alianças</NavLink>

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
          <MobileNavLink href="/category/aneis" onClick={toggleMobileNav}>
            Anéis
          </MobileNavLink>
          <MobileNavLink href="/category/pulseiras" onClick={toggleMobileNav}>
            Pulseiras
          </MobileNavLink>
          <MobileNavLink href="/category/brincos" onClick={toggleMobileNav}>
            Brincos
          </MobileNavLink>
          <MobileNavLink href="/category/colares" onClick={toggleMobileNav}>
            Colares
          </MobileNavLink>
          <MobileNavLink href="/category/pingentes" onClick={toggleMobileNav}>
            Pingentes
          </MobileNavLink>
          <MobileNavLink href="/category/aliancas" onClick={toggleMobileNav}>
            Alianças
          </MobileNavLink>
        </MobileNavLinks>
      </Container>
    </>
  );
}

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired
};
