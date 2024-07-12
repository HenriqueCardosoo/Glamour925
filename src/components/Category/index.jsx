/* eslint-disable no-unused-vars */
// src/components/Category/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Main, CategoryContent, CategoryContainer, CategoryImage, CategoryText } from './styles';

const categories = [
  { imgSrc: 'path/to/image1.jpg', text: 'Anéis', price: 'R$100' },
  { imgSrc: 'path/to/image2.jpg', text: 'Pulseiras', price: 'R$150' },
  { imgSrc: 'path/to/image3.jpg', text: 'Brincos', price: 'R$120' },
  { imgSrc: 'path/to/image4.jpg', text: 'Colares', price: 'R$200' },
  { imgSrc: 'path/to/image5.jpg', text: 'Pingentes', price: 'R$130' },
  { imgSrc: 'path/to/image6.jpg', text: 'Alianças', price: 'R$180' }
];

const CategoryItem = ({ imgSrc, text, price, onAddToCart }) => (
  <CategoryContent>
    <CategoryImage src={imgSrc} alt={text} />
    <CategoryText>{text}</CategoryText>
    <button onClick={() => onAddToCart({ imgSrc, name: text, price })}>Adicionar à Sacola</button>
  </CategoryContent>
);

CategoryItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

const Category = ({ onAddToCart }) => (
  <Container>
    <Main>
      <h1>Escolha por categoria</h1>
      <span>Encontre a sua favorita</span>
      <CategoryContainer>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            imgSrc={category.imgSrc}
            text={category.text}
            price={category.price}
            onAddToCart={onAddToCart} // Verifique se `onAddToCart` está sendo passada corretamente aqui
          />
        ))}
      </CategoryContainer>
    </Main>
  </Container>
);

Category.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default Category;
