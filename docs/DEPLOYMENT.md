# Deploy

## Front-end no GitHub Pages

O workflow `.github/workflows/pages.yml` publica a pasta `public/` no GitHub Pages sempre que houver push na branch `main`.

Passos no GitHub:

1. Envie o repositório para o GitHub.
2. Abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `GitHub Actions`.
4. Faça push na branch `main`.
5. Aguarde o workflow `Deploy GitHub Pages`.

## Backend JSON Server em Serviço Externo

O GitHub Pages não executa Node.js. Para manter o CRUD funcionando online de forma persistente, hospede a API em um serviço externo compatível com Node.js.

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

## Publicação Estática Sem Backend

Se apenas o GitHub Pages estiver ativo e a API não estiver publicada, as páginas institucionais abrem normalmente. O Radar tenta usar o JSON Server configurado; se ele não responder, login, favoritos e CRUD funcionam com fallback em `localStorage`.

Esse modo é adequado para apresentação e avaliação visual, mas as alterações ficam salvas somente no navegador usado.

## Formulário de Equipes

`public/FormularioEquipe.html` usa FormSubmit para enviar solicitações para `claudiofranciscojunior2006@gmail.com`. O primeiro envio pode exigir confirmação do endereço destinatário no próprio FormSubmit.

## Formulário de Projetos

`public/FormularioProjeto.html` usa o mesmo fluxo do FormSubmit para receber propostas da Garagem de Projetos, incluindo arquivos leves, links públicos, documentação técnica e autorização de divulgação.

## Formulário de Contato

`public/Contatos.html` também usa FormSubmit para enviar mensagens gerais, propostas, correções e links de referência para o e-mail de curadoria do projeto.

## Persistência

Serviços com filesystem efêmero podem perder alterações feitas pelo CRUD quando o container reiniciar. Para CRUD persistente, use backend com disco persistente ou migre os dados para um banco gerenciado.
