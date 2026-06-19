# Documentação Técnica

## Visão Geral

O HUB Da Robótica é uma aplicação web estática com dados fornecidos por JSON Server. A interface não depende de frameworks de build: as páginas são HTML, CSS e JavaScript vanilla.

## Modulos Web

### `public/index.html`

Página inicial com apresentação do projeto, público-alvo, funcionalidades, missão, objetivos e links para os módulos internos.

### `public/RadarDeCompeticoes.html`

Módulo principal da plataforma. Responsável por:

- Login e cadastro didático de usuários.
- Carrossel de eventos em destaque.
- Catálogo de competições.
- Busca textual por nome, tipo, local, organizador e descrição.
- Tela de detalhes de evento.
- Favoritos por usuário.
- Gráfico de modalidades com Chart.js.
- CRUD administrativo de eventos.

### `public/Garagem_De_Projetos.html`

Página editorial com projetos de robótica e chamadas para detalhes operacionais.

### `public/EquipesBrasil.html`

Diretório visual de equipes brasileiras e links para perfis individuais.

### `public/FormularioEquipe.html`

Formulário público de cadastro e atualização de equipes. Usa FormSubmit para enviar dados estruturados, anexos leves e links oficiais para o e-mail de curadoria do projeto.

### `public/FormularioProjeto.html`

Formulário público de envio de projetos para a Garagem. Usa FormSubmit para receber dados do protótipo, tecnologias, documentação, fotos, aprendizados e autorização de divulgação.

### `public/Equipes/*.html`

Perfis de equipes. A maioria usa o componente compartilhado `perfil-equipe.js` e `perfil-equipe.css`.

### `public/Contatos.html`

Página com dados de autoria, instituição, links externos, atalhos para fluxos do sistema e formulário FormSubmit para mensagens gerais.

## Assets

- `public/assets/css/styles.css`: estilos globais compartilhados.
- `public/assets/scripts/app.js`: controle de tema escuro/claro.
- `public/assets/scripts/config.js`: URL pública da API e controle de uso do JSON Server.
- `public/assets/logos/`: logos do HUB e da instituição.
- `public/assets/equipes/`: imagens de equipes.
- `public/assets/img/`: imagens institucionais.

## Fluxo de Dados

1. A página `RadarDeCompeticoes.html` carrega `config.js`.
2. O script interno lê `window.HUB_ROBOTICA_CONFIG.API_URL` e `window.HUB_ROBOTICA_CONFIG.USE_JSON_SERVER`.
3. As funções `api.get`, `api.post`, `api.put` e `api.delete` chamam o JSON Server.
4. O JSON Server persiste dados em `db/db.json`.
5. Se o JSON Server não responder, a página usa o fallback em `localStorage`, com os mesmos recursos `usuarios` e `eventos`.
6. A interface renderiza eventos, favoritos, métricas e CRUD com os dados retornados.

## Dependencias de Front-end

As dependências visuais são carregadas por CDN nas páginas:

- Tailwind CSS
- Font Awesome
- Chart.js
- Google Fonts

Isso simplifica a hospedagem estática, mas exige conexão com a internet para carregar estilos, ícones, fonte e gráficos.

## Paginas de Compatibilidade

As páginas abaixo redirecionam para rotas internas do Radar e devem ser preservadas para manter links existentes funcionando:

- `public/login.html`
- `public/cadastro_itens.html`
- `public/detalhes.html`

## Hardware, Firmware, Sensores e Atuadores

Não aplicável. Este repositório não contém código embarcado, pinagem, esquemáticos, firmware, sensores ou atuadores.
