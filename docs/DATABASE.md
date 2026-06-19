# Banco de Dados

## Tecnologia

O projeto usa JSON Server para expor `db/db.json` como API REST.

URL local padrão:

```text
http://localhost:3000
```

## Recursos

### `usuarios`

Campos:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string | Identificador do usuário |
| `login` | string | Nome de login |
| `senha` | string | Senha didática em texto puro |
| `nome` | string | Nome exibido na interface |
| `email` | string | E-mail de exemplo |
| `admin` | boolean | Permissão para acessar CRUD |
| `favoritos` | array | IDs de eventos favoritos |

### `eventos`

Campos:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string | Identificador do evento |
| `nome` | string | Nome da competição ou evento |
| `tipo` | string | Modalidade ou categoria |
| `descricao` | string | Resumo exibido em cards |
| `conteudo` | string | Texto detalhado |
| `local` | string | Local ou sede |
| `data` | string | Janela de realização |
| `organizador` | string | Organização responsável |
| `destaque` | boolean | Define exibição no carrossel |
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

## Observações de Segurança

As senhas em `db/db.json` são apenas exemplos acadêmicos. JSON Server não deve ser usado como autenticação de produção.

## Fallback Local do Radar

`public/RadarDeCompeticoes.html` tenta usar o JSON Server primeiro. Se a API configurada em `public/assets/scripts/config.js` não responder, a página usa uma cópia local dos recursos `usuarios` e `eventos` em `localStorage`.

Esse fallback existe para manter login, favoritos e CRUD funcionais em demonstrações locais ou no GitHub Pages sem backend. Ele não sincroniza dados entre navegadores, não atualiza `db/db.json` e não deve ser tratado como banco de produção.
