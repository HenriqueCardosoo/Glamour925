// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Container, CategoryItem, Image, Info, Title, Price, Installments, AddToCartButton } from './styles';
import { categoryData } from '../../data/categoryData';
import { handleAddToCartWithAnimation } from '../../utils/cartUtils';
import PropTypes from 'prop-types';

const getRandomItems = (numItems) => {
  const allItems = Object.values(categoryData).flat();
  const shuffledItems = allItems.sort(() => 0.5 - Math.random());
  const uniqueImages = new Set();
  const uniqueItems = [];

  for (let item of shuffledItems) {
    if (uniqueImages.size < numItems && !uniqueImages.has(item.imgSrc)) {
      uniqueImages.add(item.imgSrc);
      uniqueItems.push(item);
    }
    if (uniqueItems.length === numItems) {
      break;
    }
  }

  return uniqueItems;
};

const RandomItemsSection = ({ onAddToCart, numItems = 4 }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getRandomItems(numItems));
  }, [numItems]);

  return (
    <Container>
      {items.map((item, index) => (
        <CategoryItem key={index}>
          <Image src={item.imgSrc} alt={item.name} />
          <Info>
            <Title>{item.name}</Title>
            <Price>{item.price}</Price>
            <Installments>{item.installments}</Installments>
            <AddToCartButton onClick={() => handleAddToCartWithAnimation(item, onAddToCart)}>Adicionar à Sacola</AddToCartButton>
          </Info>
        </CategoryItem>
      ))}
    </Container>
  );
};

RandomItemsSection.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  numItems: PropTypes.number
};

export default RandomItemsSection;
