# Deploy

## Front-end no GitHub Pages

O workflow `.github/workflows/pages.yml` publica a pasta `public/` no GitHub Pages sempre que houver push na branch `main`.

Passos no GitHub:

1. Envie o repositorio para o GitHub.
2. Abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. Faça push na branch `main`.
5. Aguarde o workflow `Deploy GitHub Pages`.

## Backend JSON Server em Servico Externo

O GitHub Pages nao executa Node.js. Para manter o CRUD funcionando online, hospede a API em um servico externo compatível com Node.js.

Comando recomendado de start:

```bash
npm run api:deploy
```

Esse comando executa:

```bash
json-server --watch db/db.json --host 0.0.0.0 --port $PORT
```

O script `scripts/start-api.js` adapta o comando para Windows e Linux.

## Configurar URL da API no Front

Depois de publicar a API, edite:

```text
public/assets/scripts/config.js
```

Exemplo:

```js
window.HUB_ROBOTICA_CONFIG = {
    API_URL: 'https://sua-api.example.com'
};
```

## Publicacao Estatica Sem Backend

Se apenas o GitHub Pages estiver ativo e a API nao estiver publicada, as paginas institucionais abrem normalmente, mas o Radar nao conseguira carregar dados dinamicos.

## Persistencia

Servicos com filesystem efemero podem perder alteracoes feitas pelo CRUD quando o container reiniciar. Para CRUD persistente, use backend com disco persistente ou migre os dados para um banco gerenciado.
