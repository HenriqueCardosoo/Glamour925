// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../ProductForm';

export default function AdminPanel() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Verificação de Admin
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1])); // Decodifica o JWT
      setIsAdmin(user.isAdmin);
    } else {
      navigate('/login'); // Redireciona se não estiver logado
    }
  }, [navigate]);

  if (!isAdmin) {
    return <div>Acesso negado</div>;
  }

  // CRUD (Create, Read, Update, Delete)
  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = (product) => {
    fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    }).then(() => {
      setProducts([...products, product]);
    });
  };

  const handleEditProduct = (product) => {
    fetch(`/api/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    }).then(() => {
      setProducts(products.map((p) => (p.id === product.id ? { ...p, ...product } : p)));
      setEditingProduct(null);
    });
  };

  const handleDeleteProduct = (id) => {
    fetch(`/api/products/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setProducts(products.filter((p) => p.id !== id));
    });
  };

  return (
    <div>
      <h1>Painel Admin</h1>
      <ProductForm product={editingProduct} onSubmit={editingProduct ? handleEditProduct : handleAddProduct} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.quantity} unidades
            <button onClick={() => setEditingProduct(product)}>Editar</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
