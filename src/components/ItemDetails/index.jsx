// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container, ItemImage, ItemText, ItemPrice, AddToCartButton, BackButton } from './styles';
import images from '../../assets/carousel-img/images';
import { handleAddToCartWithAnimation } from '../../utils/cartUtils';

const items = [
  { id: 0, imgSrc: images.image1, name: 'Anel', price: 'R$100' },
  { id: 1, imgSrc: images.image2, name: 'Pulseira', price: 'R$150' },
  { id: 2, imgSrc: images.image3, name: 'Brinco', price: 'R$120' },
  { id: 3, imgSrc: images.image4, name: 'Colares', price: 'R$200' },
  { id: 4, imgSrc: images.image5, name: 'Pingentes', price: 'R$120' },
  { id: 5, imgSrc: images.image6, name: 'Alianças', price: 'R$200' }
];

const ItemDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const item = items[parseInt(id, 10)];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); //usei useEffect para deixar o scrool sempre ao topo

  return (
    <Container>
      <ItemImage src={item.imgSrc} alt={item.name} />
      <ItemText>{item.name}</ItemText>
      <ItemPrice>{item.price}</ItemPrice>
      <AddToCartButton onClick={() => handleAddToCartWithAnimation(item, onAddToCart)}>Adicionar à Sacola</AddToCartButton>
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </Container>
  );
};

ItemDetails.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default ItemDetails;
