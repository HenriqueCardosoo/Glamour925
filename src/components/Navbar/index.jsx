// src/components/Navbar/index.jsx
import React from 'react';
import { Container, Logo, NavLinks, NavLink, IconLink } from './styles';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';

function Navbar() {
  return (
    <Container>
      <Logo>Glamour925</Logo>
      <NavLinks>
        <NavLink href="#prata925">Prata 925</NavLink>
        <NavLink href="#semijoias">Semijóias</NavLink>
        <NavLink href="#acessorios">Pulaseiras</NavLink>
        <NavLink href="#acessorios">Correntes</NavLink>
        <NavLink href="#acessorios">Pingentes</NavLink>
        <NavLink href="#acessorios">Anéis</NavLink>

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
    </Container>
  );
}

export default Navbar;
