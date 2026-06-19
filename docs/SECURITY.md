# Segurança

## Escopo Atual

Este projeto é acadêmico e usa JSON Server como backend didático.

## Dados Sensíveis

Não devem ser versionados:

- Arquivos `.env` reais.
- Tokens de deploy.
- Chaves privadas.
- Credenciais de banco externo.
- Configurações locais com dados pessoais sensíveis.

Use `.env.example` como referência.

## Autenticação

Os usuários em `db/db.json` usam senha em texto puro para demonstração:

```text
admin / 123
user  / 123
```

Isso não é seguro para produção. Antes de uso real, substitua por autenticação com backend apropriado, hash de senha, sessões/tokens e regras de permissão no servidor.

## API Pública

A URL em `public/assets/scripts/config.js` é pública por natureza, pois fica no front-end. Não coloque segredos nesse arquivo.

## FormSubmit

Os formulários de equipes, projetos e contato enviam dados, links e anexos para um serviço externo (`formsubmit.co`). Não solicite senhas, documentos pessoais sensíveis ou arquivos privados nesses formulários. As informações enviadas devem ser públicas ou autorizadas para divulgação.

## Checklist Antes de Publicar

- Rodar `npm run validate`.
- Confirmar que `.env` real não existe no commit.
- Confirmar que não há tokens em HTML, CSS, JS ou JSON.
- Revisar links externos e dados pessoais exibidos nas páginas públicas.
- Usar backend persistente para CRUD online.
