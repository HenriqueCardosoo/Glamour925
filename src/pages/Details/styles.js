import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 100px;
  padding-top: 236px;
  overflow-y: auto;
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
    color: #222;
  }

  p {
    font-size: 18px;
    margin: 10px 0;
  }
`;

export const ImagesColumn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 65px;
`;

export const Img = styled.img`
  width: 417px;
  height: 654px;
  flex-shrink: 0;
  background-color: gray;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 65px;
`;
