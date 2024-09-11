// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PaymentContainer, ItemsContainer, FinalizeButton } from './styles';
import { ContinueButton, CartFooter, CartScroll } from '../../components/Cart/styles';
import CartItem from '../../components/CartItem';

const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const PaymentPage = ({ items, onRemoveItem, onUpdateQuantity }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.').trim());
      return acc + itemPrice * item.quantity;
    }, 0);
  };

  const handleFinalizePurchase = () => {
    const formattedItems = items.map((item) => `Produto: ${item.name}\nPreço: R$${item.price}\nQuantidade: ${item.quantity}\n`).join('\n');
    const total = calculateTotal();
    const message = `Olá, gostaria de fazer o pedido dos seguintes itens:\n\n${formattedItems}\nTotal: R$${total.toFixed(2)}`;

    const whatsappNumber = '5511984914325';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;
  };

  const total = calculateTotal();

  return (
    <PaymentContainer>
      <h2>Revisão da Sacola</h2>
      <CartScroll>
        <ItemsContainer>{items && items.length > 0 ? items.map((item, index) => <CartItem key={index} item={item} onRemove={() => onRemoveItem(index)} onUpdateQuantity={(quantity) => onUpdateQuantity(index, quantity)} />) : <p>Sua sacola está vazia.</p>}</ItemsContainer>
      </CartScroll>
      {items.length > 0 && (
        <div>
          <h3>Total: {formatCurrency(total)}</h3>
        </div>
      )}
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
