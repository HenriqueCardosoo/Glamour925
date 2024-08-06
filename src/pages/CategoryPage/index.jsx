// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container, CategoryItem, Image, Info, Title, Price, BackButton, Installments, AddToCartButton } from './styles';
import { handleAddToCartWithAnimation } from '../../utils/cartUtils';

const CategoryPage = ({ onAddToCart }) => {
  const { categoryName } = useParams();

  const renderCategoryContent = () => {
    switch (categoryName) {
      case 'aneis':
        return (
          <Container>
            {[...Array(6)].map((_, index) => (
              <CategoryItem key={index}>
                <Image src="link-da-imagem" alt="Anéis" />
                <Info>
                  <Title>Conjunto Anéis Moments</Title>
                  <Price>R$ 6.170,00</Price>
                  <Installments>10x sem juros de R$ 617,00</Installments>
                  <AddToCartButton
                    onClick={() =>
                      handleAddToCartWithAnimation(
                        {
                          imgSrc: 'link-da-imagem',
                          name: `Conjunto Anéis Moments`,
                          price: 'R$ 6.170,00'
                        },
                        onAddToCart
                      )
                    }
                  >
                    Adicionar à Sacola
                  </AddToCartButton>
                </Info>
              </CategoryItem>
            ))}
          </Container>
        );

      case 'pulseiras':
        return (
          <Container>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Pulseiras" />
              <Info>
                <Title>Conjunto Pulseiras Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
                <AddToCartButton
                  onClick={() =>
                    handleAddToCartWithAnimation(
                      {
                        imgSrc: 'link-da-imagem',
                        name: `Conjunto Pulseiras Moments`,
                        price: 'R$ 6.170,00'
                      },
                      onAddToCart
                    )
                  }
                >
                  Adicionar à Sacola
                </AddToCartButton>
              </Info>
            </CategoryItem>
            {/* Outros itens */}
          </Container>
        );

      // Adicionar outros casos para diferentes categorias

      default:
        return <div>Categoria não encontrada</div>;
    }
  };

  return (
    <div>
      {renderCategoryContent()}
      <BackButton onClick={() => window.history.back()}>Voltar</BackButton>
    </div>
  );
};

CategoryPage.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default CategoryPage;
