// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { SearchContainer, SearchInput } from './styles';
import PropTypes from 'prop-types';

export const SearchBar = ({ isOpen }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <SearchContainer>
      <SearchInput ref={inputRef} type="text" placeholder="Buscar..." />
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default SearchBar;
