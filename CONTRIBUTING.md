# Contribuindo

Obrigado pelo interesse em contribuir com o HUB Da Robotica.

## Fluxo Recomendado

1. Crie uma branch a partir de `main`.
2. Faça alteracoes pequenas e focadas.
3. Rode a validacao local:

```bash
npm run validate
```

4. Abra um Pull Request descrevendo:
   - O que mudou.
   - Por que mudou.
   - Como foi validado.

## Padroes do Projeto

- Mantenha links internos relativos.
- Nao adicione credenciais reais.
- Nao versione `node_modules/`.
- Preserve a estrutura `public/` para GitHub Pages.
- Atualize a documentacao quando alterar fluxo, dados ou paginas.

## Dados

Novos eventos devem ser cadastrados em `db/db.json` ou via CRUD conectado ao JSON Server. Mantenha os campos descritos em `docs/DATABASE.md`.
