# Banco de Dados

## Tecnologia

O projeto usa JSON Server para expor `db/db.json` como API REST.

URL local padrao:

```text
http://localhost:3000
```

## Recursos

### `usuarios`

Campos:

| Campo | Tipo | Descricao |
| --- | --- | --- |
| `id` | string | Identificador do usuario |
| `login` | string | Nome de login |
| `senha` | string | Senha didatica em texto puro |
| `nome` | string | Nome exibido na interface |
| `email` | string | Email de exemplo |
| `admin` | boolean | Permissao para acessar CRUD |
| `favoritos` | array | IDs de eventos favoritos |

### `eventos`

Campos:

| Campo | Tipo | Descricao |
| --- | --- | --- |
| `id` | string | Identificador do evento |
| `nome` | string | Nome da competicao ou evento |
| `tipo` | string | Modalidade ou categoria |
| `descricao` | string | Resumo exibido em cards |
| `conteudo` | string | Texto detalhado |
| `local` | string | Local ou sede |
| `data` | string | Janela de realizacao |
| `organizador` | string | Organizacao responsavel |
| `destaque` | boolean | Define exibicao no carrossel |
| `imagemPrincipal` | string | URL da imagem do evento |

## Endpoints JSON Server

```text
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PUT    /usuarios/:id
DELETE /usuarios/:id

GET    /eventos
GET    /eventos/:id
POST   /eventos
PUT    /eventos/:id
DELETE /eventos/:id
```

## Observacoes de Seguranca

As senhas em `db/db.json` sao apenas exemplos academicos. JSON Server nao deve ser usado como autenticacao de producao.
