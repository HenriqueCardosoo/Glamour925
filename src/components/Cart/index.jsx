/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { CartContainer, CartItem, CartHeader, CartFooter, ContinueButton, Overlay, CloseButton } from './styles';

const Cart = ({ items, isOpen, onClose }) => {
  return (
    <>
      {/* resolvido o erro isOpen, usando Transient Props que começa com o prefixo "$" que ajuda a filtrar props não reconhecidos automaticamente*/}
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <CartContainer $isOpen={isOpen}>
        <CartHeader>
          <h2>Sacola</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </CartHeader>
        {items.length > 0 ? (
          items.map((item, index) => (
            <CartItem key={index}>
              <img src={item.imgSrc} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            </CartItem>
          ))
        ) : (
          <p>Sua sacola está vazia.</p>
        )}
        <CartFooter>
          <ContinueButton onClick={onClose}>Continuar Comprando</ContinueButton>
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
      price: PropTypes.string.isRequired
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Cart;
