// src/utils/cartUtils.js
export const handleAddToCartWithAnimation = (item, onAddToCart) => {
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
