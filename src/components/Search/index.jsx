// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { SearchContainer, SearchInput } from './styles';
import PropTypes from 'prop-types';

export const SearchBar = ({ isOpen, searchTerm, onSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <SearchContainer>
      <SearchInput ref={inputRef} type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => onSearch(e.target.value)} />
    </SearchContainer>
  );
};

SearchBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default SearchBar;
