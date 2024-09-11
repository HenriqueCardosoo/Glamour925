export const calculateTotal = (items) => {
  return items.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price.replace('R$', '').replace('.', '').replace(',', '.').trim());
    return acc + itemPrice * item.quantity;
  }, 0);
};
