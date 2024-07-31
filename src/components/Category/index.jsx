// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Main, CategoryContent, CategoryContainer, CategoryImage, CategoryText, StyledLink } from './styles';
import images from '../../assets/category-img/images';

const categories = [
  { imgSrc: images.image1, text: 'Anéis', categoryName: 'aneis' },
  { imgSrc: images.image2, text: 'Pulseira', categoryName: 'pulseiras' },
  { imgSrc: images.image3, text: 'Brincos', categoryName: 'brincos' },
  { imgSrc: images.image4, text: 'Colares', categoryName: 'colares' },
  { imgSrc: images.image5, text: 'Pingentes', categoryName: 'pingentes' },
  { imgSrc: images.image6, text: 'Alianças', categoryName: 'aliancas' }
];

const CategoryItem = ({ imgSrc, text, categoryName }) => (
  <CategoryContent>
    <StyledLink to={`/category/${categoryName}`}>
      <CategoryImage src={imgSrc} alt={text} />
      <CategoryText>{text}</CategoryText>
    </StyledLink>
  </CategoryContent>
);

CategoryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired
};

const Category = () => (
  <Container>
    <Main>
      <h1>Escolha por categoria</h1>
      <span>Encontre a sua favorita</span>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryItem key={index} imgSrc={category.imgSrc} text={category.text} categoryName={category.categoryName} />
        ))}
      </CategoryContainer>
    </Main>
  </Container>
);

export default Category;
