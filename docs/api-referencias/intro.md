---
sidebar_position: 1
title: Introdução à API
---

# Introdução à API RE.AI.s

Bem-vindo à documentação de referência da nossa API. Este guia fornece todos os detalhes técnicos que você, desenvolvedor, precisa para integrar suas aplicações com a plataforma RE.AI.s de forma rápida e segura.

### Estrutura da Documentação

Nossas referências de API estão organizadas em torno dos **recursos** principais do sistema (ex: Usuários, Projetos, etc.). Cada seção descreve:

* Os **endpoints** disponíveis para cada recurso.
* Os **parâmetros** de requisição necessários.
* Os **códigos de resposta** HTTP.
* **Exemplos de requisição e resposta** em formatos comuns, como JSON.

### Autenticação

Todas as requisições à API devem ser autenticadas. Para isso, inclua sua chave de API no cabeçalho de autorização de cada chamada, utilizando o esquema `Bearer`.

**Exemplo de Cabeçalho:**
`Authorization: Bearer SUA_CHAVE_DE_API`

### Base URL

O endereço base para todas as chamadas da API é:
`https://api.guiareais.com/v1`

Navegue pelos recursos na barra lateral para encontrar o endpoint que você precisa e comece a construir!
