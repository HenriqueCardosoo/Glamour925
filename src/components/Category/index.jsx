// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Main, CategoryContent, CategoryContainer, CategoryImage, CategoryText } from './styles';
import images from '../../assets/category-img/images';

const categories = [
  { imgSrc: images.image1, text: 'Anéis', price: 'R$100' },
  { imgSrc: images.image2, text: 'Pulseira', price: 'R$150' },
  { imgSrc: images.image3, text: 'Brincos', price: 'R$120' },
  { imgSrc: images.image4, text: 'Colares', price: 'R$200' },
  { imgSrc: images.image5, text: 'Pingentes', price: 'R$130' },
  { imgSrc: images.image6, text: 'Alianças', price: 'R$180' }
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

const Category = () => (
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

export default Category;
