---
sidebar_position: 2
title: "Entidade: Imóvel"
---

# Entidade: Imóvel

Representa os imóveis avulsos para venda, aluguel ou temporada, com todas as suas informações, imagens e vídeos.

## Atributos do Imóvel

| Atributo         | Tipo        | Descrição                                         |
| ---------------- | ----------- | ------------------------------------------------- |
| `codigoImovel`   | `String`    | Código do Imóvel.                                 |
| `codigoReferenciaImovel` | `String` | Código de Referência do Imóvel.                |
| `nomeImovel`     | `String`    | Nome do Imóvel.                                   |
| `preco`          | `BigDecimal`| Preço do imóvel (venda e aluguel mensal).         |
| `temporada`      | `char`      | '0' para normal, '1' para temporada.              |
| `precoTemporada` | `BigDecimal`| Preço da diária se for de temporada.              |
| `endereco`       | `String`    | Logradouro do imóvel.                             |
| `nomeBairro`     | `String`    | Nome do Bairro.                                   |
| `nomeCidade`     | `String`    | Nome da Cidade.                                   |
| `siglaEstado`    | `String`    | Sigla do Estado.                                  |
| `areautil`       | `Double`    | Área privativa.                                   |
| `iptu`           | `BigDecimal`| Valor do IPTU.                                    |
| `condominio`     | `BigDecimal`| Valor do Condomínio.                              |
| `nquartos`       | `String`    | Número de quartos.                                |
| `nsuites`        | `Integer`   | Número de Suítes.                                 |
| `ngaragens`      | `String`    | Número de vagas de garagem.                       |
| `fotoImovel1` a `fotoImovel30` | `String` | Nomes das fotos do imóvel.             |
| `descricaoFoto1` a `descricaoFoto30` | `String` | Descrições das fotos.           |
| `descricao`      | `String`    | Descrição completa do Imóvel.                     |
| `tipoImovel`     | `String`    | Descrição do tipo do imóvel (Ex: "Apartamento").  |
| `idTipoImovel`   | `String`    | ID do tipo do imóvel (Ex: "1").                   |
| `tipoOperacao`   | `Character` | 'V' para Venda, 'L' para Aluguel.                 |
| `urlDetalhe`     | `String`    | URL amigável para a página de detalhes do imóvel. |
| ...              | ...         | *E todos os outros atributos de características (`temPiscina`, etc.)* |

## Parâmetros de Filtro (Imóveis)

| Atributo         | Tipo        | Obrigatório | Descrição                                                       |
| ---------------- | ----------- | ----------- | --------------------------------------------------------------- |
| `token`          | `String`    | **Sim** | Token de Integração da Empresa.                                 |
| `quantidadeImoveis` | `Integer` | **Sim** | Número máximo de imóveis a serem retornados.                    |
| `tipoImovel`     | `String`    | Não         | IDs dos tipos de imóvel, separados por `;` (Ex: "1;2").         |
| `idCidade`       | `Integer`   | Não         | ID da Cidade.                                                   |
| `idBairros`      | `Integer[]` | Não         | Array de IDs de Bairros (Ex: `[297, 298]`).                     |
| `statusImovelStr`| `String`    | Não         | Tipo de operação, separado por `;` (Ex: "V;L").                 |
| `precoMinimo`    | `String`    | Não         | Preço Mínimo (Ex: "100000").                                    |
| `precoMaximo`    | `String`    | Não         | Preço Máximo (Ex: "750000").                                    |
| `quartosMinimo`  | `String`    | Não         | Número de Quartos Mínimo.                                       |
| `ordenacao`      | `String`    | Não         | Critério de ordenação (Ex: "PMIN" para menor preço).            |
| `termo`          | `String`    | Não         | Termo para busca ampla (código, nome, bairro, etc.).          |
| `destaqueNoBanner`| `Boolean`  | Não         | `true` para obter imóveis marcados para o banner.               |
| `paginado`       | `Boolean`   | Não         | `true` para ativar a paginação.                                 |
| `startpag`       | `Integer`   | Se `paginado` | Offset para paginação (inicia em 0).                            |

## Métodos de Consulta (Imóveis)

### Obter um Imóvel Específico

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/imovel/{CODIGO_IMOVEL}/{TOKEN}`
- **Retorno:** JSON com os dados do imóvel solicitado.

### Obter Total de Imóveis por Filtro

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/imovel/totalImoveisFiltro?filtro={FILTRO_JSON}`
- **Retorno:** JSON com o número total de imóveis que correspondem ao filtro.

### Listar Imóveis por Filtro

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/imovel/listarImoveisFiltro?filtro={FILTRO_JSON}`
- **Retorno:** JSON com a lista de imóveis que correspondem ao filtro.

### Listar Imóveis por Códigos

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/imovel/listarImoveisLista?codigos={CODIGOS}&token={TOKEN}`
- **Parâmetros:** `CODIGOS` (separados por ';') e `TOKEN`.
- **Retorno:** JSON com a lista dos imóveis solicitados.

### Obter Imóveis Sugeridos (Semelhantes)

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/imovel/imoveisSugeridos/{CODIGO}/{TOKEN}`
- **Retorno:** JSON com uma lista de imóveis semelhantes ao imóvel de referência.
