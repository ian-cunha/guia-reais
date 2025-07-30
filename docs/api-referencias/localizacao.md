---
sidebar_position: 4
title: Entidade: Localização
---

# Entidade: Localização

Permite a consulta de estados, cidades e bairros.

## Métodos de Consulta (Localização)

### Obter Estados do Brasil

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/localizacao/estados`
- **Retorno:** Uma lista em JSON com todos os estados brasileiros (`codigo`, `nome`, `uf`).

### Obter um Estado Específico

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/localizacao/estado/{CODIGO_ESTADO}`
- **Retorno:** JSON com os dados do estado solicitado.

### Obter Cidades por Estado

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/localizacao/cidades/{CODIGO_ESTADO}`
- **Retorno:** Uma lista em JSON com as cidades do estado informado.

### Obter Bairros por Cidade

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/localizacao/bairros/{CODIGO_CIDADE}`
- **Retorno:** Uma lista em JSON com os bairros da cidade informada.
