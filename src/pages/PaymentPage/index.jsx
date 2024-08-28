// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PaymentContainer, ItemsContainer, FinalizeButton } from './styles';
import { ContinueButton, CartFooter, CartScroll } from '../../components/Cart/styles';
import CartItem from '../../components/CartItem';

const PaymentPage = ({ items, onRemoveItem, onUpdateQuantity }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleFinalizePurchase = () => {
    // Lógica para finalizar a compra
    console.log('Finalizando compra...');
  };

  return (
    <PaymentContainer>
      <h2>Revisão da Sacola</h2>
      <CartScroll>
        <ItemsContainer>{items && items.length > 0 ? items.map((item, index) => <CartItem key={index} item={item} onRemove={() => onRemoveItem(index)} onUpdateQuantity={(quantity) => onUpdateQuantity(index, quantity)} />) : <p>Sua sacola está vazia.</p>}</ItemsContainer>
      </CartScroll>
      <CartFooter>
        <ContinueButton onClick={handleContinueShopping}>Continuar Comprando</ContinueButton>
        <FinalizeButton onClick={handleFinalizePurchase}>Finalizar Compra</FinalizeButton>
      </CartFooter>
    </PaymentContainer>
  );
};

PaymentPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
};

export default PaymentPage;
