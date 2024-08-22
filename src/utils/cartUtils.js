// utils/cartUtils.js

export const handleAddToCartWithAnimation = (item, onAddToCart) => {
  // Adiciona o item ao carrinho
  onAddToCart(item);

  // Encontra o botão que foi clicado
  const button = document.querySelector(`[data-id="${item.id}"]`);
  const cartIcon = document.querySelector('#cart-icon'); // Ícone da sacola

  if (button && cartIcon) {
    // Pega as posições dos elementos
    const buttonRect = button.getBoundingClientRect();
    const cartIconRect = cartIcon.getBoundingClientRect();

    // Cria uma animação visual do item
    const flyingItem = document.createElement('img');
    flyingItem.src = item.imgSrc;
    flyingItem.style.position = 'fixed';
    flyingItem.style.width = '50px';
    flyingItem.style.height = '50px';
    flyingItem.style.top = `${buttonRect.top}px`;
    flyingItem.style.left = `${buttonRect.left}px`;
    flyingItem.style.transition = 'all 0.5s ease-in-out';
    flyingItem.style.zIndex = '1000';

    document.body.appendChild(flyingItem);

    // Move o item na direção do ícone da sacola
    setTimeout(() => {
      flyingItem.style.top = `${cartIconRect.top}px`;
      flyingItem.style.left = `${cartIconRect.left}px`;
      flyingItem.style.width = '25px';
      flyingItem.style.height = '25px';
    }, 100);

    // Remove o item após a animação
    setTimeout(() => {
      document.body.removeChild(flyingItem);
    }, 600);
  }
};
