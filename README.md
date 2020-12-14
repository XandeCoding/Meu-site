## Card Visit
![reactIcon](/src/logo.svg)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Sumário

Este projeto é um cartão de visitas que fiz em que as principais características dele é ser rápido, leve, extensível e que pudesse ser usado por qualquer pessoa que tenha um conhecimento basico de Javascript e HTML mesmo que não tenha experiência com React.<br>

## Demo 

__[Meu cartão de Visitas](https://xande.dev.br/)__

## Features e tecnologias implementadas

As principais features são os esquemas de trocas de linguagem e de temas além disso é usado React como lib principal o que possibilitou ser bem rápido e eficiente, Styled Components para deixar que cada componente trabalhe bem sozinho devido as configurações de estilo ficarem no mesmo arquivo (de forma organizada) e Styled Icons para fornecer ícones de várias fontes diferentes como FontAwesome, Entypo e Boxicons.

## Como usar
Para facilitar o uso é possível além de usar o comum `npm start` pode ser usado docker da seguinte forma:

### Em modo de desenvolvimento

**docker-compose up --build**

## Deploy
Há também um arquivo docker configurado para modo de produção, indico usar a hospedagem da [Vercel](https://vercel.com/) por ser free (há planos pagos também com suas vantagens) já vem com certificado SSL e é super simples de instalar o projeto, que é inclusive onde hospedei meu cartão de visitas.

### Docker para produção

**export VISIT_CARD_PORT=9090** *- É necessário exportar uma variável de ambiente* <br>
**docker-compose -f docker-compose-prod.yml up**


## Análise feita usando LightHouse do Google
![Lighthouse](/preview.png)