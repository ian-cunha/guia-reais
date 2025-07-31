---
category: ""
sidebar_position: 1
title: Início Rápido e Autenticação
---

# Introdução à API de Integração

Bem-vindo à documentação da nossa API! Ela foi projetada para possibilitar a integração do sistema RE.AI.s com o site e as Landing Pages do seu negócio através de consultas em tempo real.

A API utiliza a tecnologia **JSON**, com uma linguagem simples e de fácil entendimento para programadores e designers.

## Autenticação: O Token de Acesso

Para acessar qualquer método da API, você **sempre** deverá informar o seu token de acesso através do parâmetro `token`.

- **`token`**: O token é uma chave secreta de acesso à API e deve ser solicitada ao nosso suporte.

:::danger ATENÇÃO: Segurança do Token
Este token **nunca deve ser exposto ao usuário final** (no código front-end, como JavaScript).

Se você for utilizar nossa API em uma aplicação web, faça as requisições do seu front-end para o seu próprio back-end (server-side) e, de lá, faça as chamadas para a nossa API, incluindo o token. Este cuidado garante a segurança das suas informações.
:::

## Estrutura da Documentação

Este documento está organizado por **entidades** que podem ser consultadas pela nossa API. Cada entidade tem:

- **Atributos:** As informações retornadas em cada consulta.
- **Parâmetros:** Os filtros que você pode usar nas pesquisas.
- **Métodos:** As URLs e funções específicas para obter os dados.

As entidades disponíveis são:

- **[Imóvel](./imovel)**
- **[Empreendimento](./empreendimento)**
- **[Localização](./localizacao)**
- **[Empresa](./empresa)**
