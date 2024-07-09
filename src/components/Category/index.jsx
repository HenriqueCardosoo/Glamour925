// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Main, CategoryContent, CategoryContainer, CategoryImage, CategoryText } from './styles';

const categories = [
  { imgSrc: 'path/to/image1.jpg', text: 'Anéis' },
  { imgSrc: 'path/to/image2.jpg', text: 'Pulseiras' },
  { imgSrc: 'path/to/image3.jpg', text: 'Brincos' },
  { imgSrc: 'path/to/image4.jpg', text: 'Colares' },
  { imgSrc: 'path/to/image5.jpg', text: 'Pingentes' },
  { imgSrc: 'path/to/image6.jpg', text: 'Alianças' }
];

const CategoryItem = ({ imgSrc, text }) => (
  <CategoryContent>
    <CategoryImage src={imgSrc} alt={text} />
    <CategoryText>{text}</CategoryText>
  </CategoryContent>
);

CategoryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default function Category() {
  return (
    <Container>
      <Main>
        <h1>Escolha por categoria</h1>
        <span>Encontre a sua favorita</span>
        <CategoryContainer>
          {categories.map((category, index) => (
            <CategoryItem key={index} imgSrc={category.imgSrc} text={category.text} />
          ))}
        </CategoryContainer>
      </Main>
    </Container>
  );
}
