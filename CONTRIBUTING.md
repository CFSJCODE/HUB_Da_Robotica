# Contribuindo

Obrigado pelo interesse em contribuir com o HUB Da Robótica.

## Fluxo Recomendado

1. Crie uma branch a partir de `main`.
2. Faça alterações pequenas e focadas.
3. Rode a validação local:

```bash
npm run validate
```

4. Abra um Pull Request descrevendo:
   - O que mudou.
   - Por que mudou.
   - Como foi validado.

## Padrões do Projeto

- Mantenha links internos relativos.
- Não adicione credenciais reais.
- Não versione `node_modules/`.
- Preserve a estrutura `public/` para GitHub Pages.
- Atualize a documentação quando alterar fluxo, dados ou páginas.

## Dados

Novos eventos devem ser cadastrados em `db/db.json` ou via CRUD conectado ao JSON Server. Mantenha os campos descritos em `docs/DATABASE.md`.
