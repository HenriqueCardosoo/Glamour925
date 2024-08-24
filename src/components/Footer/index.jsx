// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Content, Links, LinksItem, Copy } from './styles';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Links>
          <LinksItem href="/about">Sobre Nós</LinksItem>
          <LinksItem href="/content">Contato</LinksItem>
          <LinksItem href="/privacy">Política de Privacidade</LinksItem>
          <LinksItem href="/terms">Termos de Serviço</LinksItem>
        </Links>
        <Copy>&copy; 2024 Henrique Cardoso. Todos os direiros reservados.</Copy>
      </Content>
    </Container>
  );
};

export default Footer;
