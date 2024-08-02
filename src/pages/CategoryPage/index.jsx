// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, CategoryItem, Image, Info, Title, Price, Installments } from './styles';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const renderCategoryContent = () => {
    switch (categoryName) {
      case 'aneis':
        return (
          <Container>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
            <CategoryItem>
              <Image src="link-da-imagem" alt="Anéis" />
              <Info>
                <Title>Conjunto Anéis Moments</Title>
                <Price>R$ 6.170,00</Price>
                <Installments>10x sem juros de R$ 617,00</Installments>
              </Info>
            </CategoryItem>
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
              </Info>
            </CategoryItem>
            {/* Outros itens */}
          </Container>
        );

      case 'brincos':
        return <div>Conteúdo da categoria Brincos</div>;
      // Adicione outras categorias
      default:
        return <div>Categoria não encontrada</div>;
    }
  };

  return <div>{renderCategoryContent()}</div>;
};

export default CategoryPage;
