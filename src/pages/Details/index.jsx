// eslint-disable-next-line no-unused-vars
import React from 'react';
import Carousel from '../../components/Carousel';
import { Container, TextColumn, Content } from './styles';
import images from '../../assets/images/images';

const imagesArray = [images.image1, images.image2, images.image3, images.image4, images.image5, images.image6];

export default function Details() {
  return (
    <Container>
      <Content>
        <TextColumn>
          <main>
            <h1>Delicadeza e Sofisticação em Prata</h1>
            <p>Com sua simplicidade elegante, a prata é uma escolha versátil para qualquer ocasião. Das linhas limpas aos detalhes delicados, cada peça adiciona um toque de refinamento ao seu estilo.</p>
          </main>
        </TextColumn>

        <Carousel images={imagesArray} />
      </Content>
    </Container>
  );
}
