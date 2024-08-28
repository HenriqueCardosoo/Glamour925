// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { CartContainer, CartHeader, CartFooter, ContinueButton, Overlay, CloseButton, GoToCartButton, CartScroll } from './styles';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem'; // Importa o componente reutilizável

const Cart = ({ items, isOpen, onClose, onRemoveItem, OnUpdateQuantity }) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    onClose();
    navigate('/payment');
  };

  return (
    <>
      {/* resolvido o erro isOpen, usando Transient Props que começa com o prefixo "$" que ajuda a filtrar props não reconhecidos automaticamente*/}
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <CartContainer $isOpen={isOpen}>
        <CartHeader>
          <h2>Sacola</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </CartHeader>
        <CartScroll>{items.length > 0 ? items.map((item, index) => <CartItem key={index} item={item} onRemove={() => onRemoveItem(index)} onUpdateQuantity={(quantity) => OnUpdateQuantity(index, quantity)} />) : <p>Sua sacola está vazia.</p>}</CartScroll>
        <CartFooter>
          <ContinueButton onClick={onClose}>Continuar Comprando</ContinueButton>
          <GoToCartButton onClick={handleGoToCart}>Ir para a Sacola</GoToCartButton>
        </CartFooter>
      </CartContainer>
    </>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  OnUpdateQuantity: PropTypes.func.isRequired
};

export default Cart;
