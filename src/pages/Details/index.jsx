// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from '../../components/Carousel';
import { Container, TextColumn, Content, StaticImagesWrapper, Img } from './styles';

const images = ['path/to/image1.jpg', 'path/to/image2.jpg', 'path/to/image3.jpg', 'path/to/image4.jpg', 'path/to/image5.jpg'];

export function Details() {
  const desktopImagens = images.slice(0, 2);

  return (
    <Container>
      <Content>
        <TextColumn>
          <main>
            <h1>Delicadeza e Sofisticação em Prata</h1>
            <p>Com sua simplicidade elegante, a prata é uma escolha versátil para qualquer ocasião. Das linhas limpas aos detalhes delicados, cada peça adiciona um toque de refinamento ao seu estilo.</p>
          </main>
        </TextColumn>
        <StaticImagesWrapper>
          {desktopImagens.map((src, index) => (
            <Img key={index} src={src} alt={`Imagem ${index + 1}`} />
          ))}
        </StaticImagesWrapper>
        <Carousel images={images} />
      </Content>
    </Container>
  );
}
