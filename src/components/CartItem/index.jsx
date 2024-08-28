// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { CartItemContainer, RemoveButton, QuantitySelector } from './styles';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <CartItemContainer>
      <img src={item.imgSrc} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <QuantitySelector type="number" value={item.quantity} onChange={(e) => onUpdateQuantity(parseInt(e.target.value))} min="1" max="5" />
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
