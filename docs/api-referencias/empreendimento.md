---
category: ""
sidebar_position: 3
title: "Entidade: Empreendimento"
---

# Entidade: Empreendimento

Representa empreendimentos imobiliários com seus tipos, unidades disponíveis e estágio da obra.

## Atributos do Empreendimento

| Atributo              | Tipo         | Descrição                                                  |
| --------------------- | ------------ | ---------------------------------------------------------- |
| `idEmpreendimento`    | `Long`       | ID do Empreendimento.                                      |
| `codigo`              | `String`     | Código de Referência do Empreendimento.                    |
| `nome`                | `String`     | Nome do Empreendimento.                                    |
| `categoria`           | `String`     | "0" para Residencial, "1" para Comercial.                  |
| `estagioObra`         | `Short`      | 1 (Planta), 2 (Fundação), ..., 6 (Pronto).                 |
| `situacaoEmpreendimento` | `Short`   | 0 (Pré-Lançamento), ..., 3 (Totalmente Vendido).           |
| `dataEntrega`         | `Date`       | Data de entrega do empreendimento.                         |
| `menorPrecoUnidades`  | `BigDecimal` | Menor preço das unidades disponíveis.                      |
| `diferenciais`         | `String`     | Diferenciais do empreendimento.                           |
| `urlHotsite`          | `String`     | URL do hotsite do empreendimento.                          |
| `urlVideo`            | `String`     | URL do vídeo do empreendimento.                            |
| `precoPersonalizado`  | `String`     | Texto com dados sobre o preço (Ex: "A partir de R$ ...").  |
| `quartoPersonalizado` | `String`     | Texto com dados sobre quartos (Ex: "1 ou 2").              |
| ...                   | ...          | *E todos os outros atributos de características e listas.* |

## Parâmetros de Filtro (Empreendimentos)

Similares aos de Imóveis, incluindo `token`, `quantidade`, `idCidade`, `precoMinimo`, `quartosMinimo`, `estagioObra`, etc.

## Métodos de Consulta (Empreendimentos)

### Obter um Empreendimento Específico

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empreendimento/{ID}/{TOKEN}`
- **Retorno:** JSON com os dados do empreendimento solicitado.

### Obter Total de Empreendimentos por Filtro

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empreendimento/totalEmpreendimentosFiltro?filtro={FILTRO_JSON}`
- **Retorno:** JSON com o número total de empreendimentos que correspondem ao filtro.

### Listar Empreendimentos por Filtro

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empreendimento/listarEmpreendimentosFiltro?filtro={FILTRO_JSON}`
- **Retorno:** JSON com a lista de empreendimentos.

### Obter Andamento da Obra

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empreendimento/andamentoObra/{ID}/{TOKEN}`
- **Retorno:** JSON com os percentuais e marcos do andamento da obra.
