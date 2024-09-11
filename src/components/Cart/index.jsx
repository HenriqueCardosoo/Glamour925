// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CartContainer, CartHeader, CartFooter, ContinueButton, Overlay, CloseButton, GoToCartButton, CartScroll } from './styles';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem'; // Importa o componente reutilizável
import { calculateTotal } from '../../utils/calculateTotal';
import { formatCurrency } from '../../utils/formatCurrency';

const Cart = ({ items, isOpen, onClose, onRemoveItem, onUpdateQuantity }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      // remove o scroll da pagina principal
      document.documentElement.style.overflow = 'hidden';
    } else {
      // retorna o scroll
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleGoToCart = () => {
    onClose();
    navigate('/payment');
  };

  const total = calculateTotal(items);

  return (
    <>
      {/* resolvido o erro isOpen, usando Transient Props que começa com o prefixo "$" que ajuda a filtrar props não reconhecidos automaticamente*/}
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <CartContainer $isOpen={isOpen}>
        <CartHeader>
          <h2>Sacola</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </CartHeader>
        <CartScroll>{items.length > 0 ? items.map((item, index) => <CartItem key={index} item={item} onRemove={() => onRemoveItem(index)} onUpdateQuantity={(quantity) => onUpdateQuantity(index, quantity)} />) : <p>Sua sacola está vazia.</p>}</CartScroll>
        {items.length > 0 && (
          <div>
            <h3>Total: {formatCurrency(total)}</h3>
          </div>
        )}
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
  onUpdateQuantity: PropTypes.func.isRequired
};

export default Cart;
