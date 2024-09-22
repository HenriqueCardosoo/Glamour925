// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function ProductForm({ product, onSubmit }) {
  const [title, setTitle] = useState(product?.title || '');
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || '');
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [price, setPrice] = useState(product?.price || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, imageUrl, quantity, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" required />
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL da Imagem" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" required />
      <button type="submit">{product ? 'Atualizar' : 'Adicionar'} Produto</button>
    </form>
  );
}
