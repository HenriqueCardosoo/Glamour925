import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: fixed;
  top: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  padding: 10px;
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.875rem;
    color: #666;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;
