---
sidebar_position: 5
title: "Entidade: Empresa"
---

# Entidade: Empresa

Retorna os dados da sua empresa, como nome, contatos e configurações do site.

## Atributos da Empresa

| Atributo             | Tipo     | Descrição                                 |
| -------------------- | -------- | ----------------------------------------- |
| `id`                 | `Integer`| ID da empresa no sistema.                 |
| `empresarazaosocial` | `String` | Razão Social.                             |
| `empresanomefantasia`| `String` | Nome Fantasia.                            |
| `email`              | `String` | E-mail da empresa.                        |
| `tel1`               | `String` | Telefone principal.                       |
| `urlLogomarca`       | `String` | URL da logomarca.                         |

## Métodos de Consulta (Empresa)

### Obter Dados da Empresa

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empresa/{TOKEN}`
- **Retorno:** JSON com os dados cadastrais da sua empresa.

### Obter Configuração do Site

- **Método:** `GET`
- **URL:** `http://app.reaisystems.com.br/sites/v1/empresa/configuracaoSite/{TOKEN}`
- **Retorno:** JSON com as configurações de aparência do site (cores, etc.).
