// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container, ItemImage, ItemText, ItemPrice, AddToCartButton, BackButton } from './styles';

const items = [
  { id: 0, imgSrc: 'path/to/image1.jpg', name: 'Anel', price: 'R$100' },
  { id: 1, imgSrc: 'path/to/image2.jpg', name: 'Pulseira', price: 'R$150' },
  { id: 2, imgSrc: 'path/to/image3.jpg', name: 'Brinco', price: 'R$120' }
  // adicione todos os itens conforme necessário
];

const ItemDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const item = items[parseInt(id, 10)];

  return (
    <Container>
      <ItemImage src={item.imgSrc} alt={item.name} />
      <ItemText>{item.name}</ItemText>
      <ItemPrice>{item.price}</ItemPrice>
      <AddToCartButton onClick={() => onAddToCart(item)}>Adicionar à Sacola</AddToCartButton>
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </Container>
  );
};

ItemDetails.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default ItemDetails;
