import { Container, Img, TextColumn, ImagesColumn, Content } from './styles';

export function Details() {
  return (
    <Container>
      <Content>
        <TextColumn>
          <h1> Delicadeza e Sofisticação em Prata</h1>
          <p>Com sua simplicidade elegante, a prata é uma escolha versátil para qualquer ocasião. Das linhas limpas aos detalhes delicados, cada peça adiciona um toque de refinamento ao seu estilo.</p>
        </TextColumn>
        <ImagesColumn>
          <Img />
          <Img />
        </ImagesColumn>
      </Content>
    </Container>
  );
}
