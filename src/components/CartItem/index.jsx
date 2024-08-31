// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { CartItemContainer, RemoveButton, QuantityControls, QuantityButton, QuantityDisplay } from './styles';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleIncrement = () => {
    if (item.quantity < 5) {
      onUpdateQuantity(item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.quantity - 1);
    }
  };

  return (
    <CartItemContainer>
      <img src={item.imgSrc} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <QuantityControls>
          <QuantityButton onClick={handleDecrement} disabled={item.quantity <= 1}>
            -
          </QuantityButton>
          <QuantityDisplay>{item.quantity}</QuantityDisplay>
          <QuantityButton onClick={handleIncrement} disabled={item.quantity >= 5}>
            +
          </QuantityButton>
        </QuantityControls>
      </div>
      <RemoveButton onClick={onRemove}>Remover</RemoveButton>
    </CartItemContainer>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired
};

export default CartItem;
