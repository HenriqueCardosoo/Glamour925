// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Logo, NavLinks, NavLink, IconLink, MenuButton, MobileNavLinks, MobileNavLink, IconContainer, BurgerLine, Badge } from './styles';
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { SearchContainer, SearchInput, SearchItem } from '../Search/styles';
import { categoryData } from '../../data/categoryData';

export default function Navbar({ toggleCart, cartItemCount }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Ref para o campo de busca
  const searchInputRef = useRef(null);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Foca no campo de busca quando a pesquisa é aberta
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 0);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const allItems = Object.values(categoryData).flat();
      const filtered = allItems.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()) || item.price.toLowerCase().includes(term.toLowerCase()));
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
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
      </Container>

      {isSearchOpen && (
        <SearchContainer>
          <SearchInput
            ref={searchInputRef} // Adicionando o ref ao campo de busca
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div>
            {filteredItems.map((item, index) => (
              <SearchItem key={index}>
                <img src={item.imgSrc} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <p>{item.installments}</p>
                </div>
              </SearchItem>
            ))}
          </div>
        </SearchContainer>
      )}

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
    </>
  );
}

Navbar.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number.isRequired
};
