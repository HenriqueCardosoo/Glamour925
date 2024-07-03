import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  right: 0;
  background-color: #efd2d7;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
