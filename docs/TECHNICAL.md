# Documentacao Tecnica

## Visao Geral

O HUB Da Robotica e uma aplicacao web estatica com dados fornecidos por JSON Server. A interface nao depende de frameworks de build: as paginas sao HTML, CSS e JavaScript vanilla.

## Modulos Web

### `public/index.html`

Pagina inicial com apresentacao do projeto, publico-alvo, funcionalidades, missao, objetivos e links para os modulos internos.

### `public/RadarDeCompeticoes.html`

Modulo principal da plataforma. Responsavel por:

- Login e cadastro didatico de usuarios.
- Carrossel de eventos em destaque.
- Catalogo de competicoes.
- Busca textual por nome, tipo, local, organizador e descricao.
- Tela de detalhes de evento.
- Favoritos por usuario.
- Grafico de modalidades com Chart.js.
- CRUD administrativo de eventos.

### `public/Garagem_De_Projetos.html`

Pagina editorial com projetos de robotica e chamadas para detalhes operacionais.

### `public/EquipesBrasil.html`

Diretorio visual de equipes brasileiras e links para perfis individuais.

### `public/Equipes/*.html`

Perfis de equipes. A maioria usa o componente compartilhado `perfil-equipe.js` e `perfil-equipe.css`.

### `public/Contatos.html`

Pagina com dados de autoria, instituicao, links externos e atalhos para fluxos do sistema.

## Assets

- `public/assets/css/styles.css`: estilos globais compartilhados.
- `public/assets/scripts/app.js`: controle de tema escuro/claro.
- `public/assets/scripts/config.js`: URL publica da API.
- `public/assets/logos/`: logos do HUB e da instituicao.
- `public/assets/equipes/`: imagens de equipes.
- `public/assets/img/`: imagens institucionais.

## Fluxo de Dados

1. A pagina `RadarDeCompeticoes.html` carrega `config.js`.
2. O script interno le `window.HUB_ROBOTICA_CONFIG.API_URL`.
3. As funcoes `api.get`, `api.post`, `api.put` e `api.delete` chamam o JSON Server.
4. O JSON Server persiste dados em `db/db.json`.
5. A interface renderiza eventos, favoritos, metricas e CRUD com os dados retornados.

## Dependencias de Front-end

As dependencias visuais sao carregadas por CDN nas paginas:

- Tailwind CSS
- Font Awesome
- Chart.js
- Google Fonts

Isso simplifica a hospedagem estatica, mas exige conexao com a internet para carregar estilos, icones, fonte e graficos.

## Paginas de Compatibilidade

As paginas abaixo redirecionam para rotas internas do Radar e devem ser preservadas para manter links existentes funcionando:

- `public/login.html`
- `public/cadastro_itens.html`
- `public/detalhes.html`

## Hardware, Firmware, Sensores e Atuadores

Nao aplicavel. Este repositorio nao contem codigo embarcado, pinagem, esquematicos, firmware, sensores ou atuadores.
