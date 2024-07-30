// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container, ItemImage, ItemText, ItemPrice, AddToCartButton, BackButton } from './styles';
import images from '../../assets/carousel-img/images';

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

  const handleAddToCart = () => {
    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.style.position = 'absolute';
    img.style.zIndex = '1000';
    img.style.transition = 'transform 1s ease-in-out';
    img.style.width = '100px';
    img.style.height = '100px';

    document.body.appendChild(img);

    const rect = img.getBoundingClientRect();
    img.style.left = `${rect.left}px`;
    img.style.top = `${rect.top}px`;

    // Inicia a animação
    setTimeout(() => {
      img.style.transform = `translate(${window.innerWidth - rect.left}px, ${-rect.top}px) scale(0.2)`;
    }, 100);

    img.addEventListener('transitionend', () => {
      img.remove();
      onAddToCart(item);
    });
  };

  return (
    <Container>
      <ItemImage src={item.imgSrc} alt={item.name} />
      <ItemText>{item.name}</ItemText>
      <ItemPrice>{item.price}</ItemPrice>
      <AddToCartButton onClick={handleAddToCart}>Adicionar à Sacola</AddToCartButton>
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </Container>
  );
};

ItemDetails.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default ItemDetails;
