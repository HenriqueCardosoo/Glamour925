// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CategoryItem, Image, Info, Title, Price, Installments, AddToCartButton, BackButton } from './styles';
import { categoryData } from '../../data/categoryData';
import { handleAddToCartWithAnimation } from '../../utils/cartUtils';
import PropTypes from 'prop-types';

const CategoryPage = ({ onAddToCart }) => {
  const { categoryName } = useParams();
  const items = categoryData[categoryName];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]); //usei useEffect para deixar o scrool sempre ao topo quando mudar de categoria

  if (!items) {
    return <div>Categoria não encontrada</div>;
  }

  return (
    <>
      <Container>
        {items.map((item, index) => (
          <CategoryItem key={index}>
            <Image src={item.imgSrc} alt={item.name} />
            <Info>
              <Title>{item.name}</Title>
              <Price>{item.price}</Price>
              <Installments>{item.installments}</Installments>
              <AddToCartButton onClick={() => handleAddToCartWithAnimation(item, onAddToCart)}>Adicionar à Sacola</AddToCartButton>
            </Info>
          </CategoryItem>
        ))}
      </Container>{' '}
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </>
  );
};

CategoryPage.propTypes = { onAddToCart: PropTypes.func.isRequired };

export default CategoryPage;
