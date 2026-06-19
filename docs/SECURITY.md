# Seguranca

## Escopo Atual

Este projeto e academico e usa JSON Server como backend didatico.

## Dados Sensiveis

Nao devem ser versionados:

- Arquivos `.env` reais.
- Tokens de deploy.
- Chaves privadas.
- Credenciais de banco externo.
- Configuracoes locais com dados pessoais sensiveis.

Use `.env.example` como referencia.

## Autenticacao

Os usuarios em `db/db.json` usam senha em texto puro para demonstracao:

```text
admin / 123
user  / 123
```

Isso nao e seguro para producao. Antes de uso real, substitua por autenticacao com backend apropriado, hash de senha, sessoes/tokens e regras de permissao no servidor.

## API Publica

A URL em `public/assets/scripts/config.js` e publica por natureza, pois fica no front-end. Nao coloque segredos nesse arquivo.

## Checklist Antes de Publicar

- Rodar `npm run validate`.
- Confirmar que `.env` real nao existe no commit.
- Confirmar que nao ha tokens em HTML, CSS, JS ou JSON.
- Revisar links externos e dados pessoais exibidos nas paginas publicas.
- Usar backend persistente para CRUD online.
