# Changelog

Todas as mudanças relevantes deste projeto serão documentadas neste arquivo.

## [Não publicado]

### Adicionado

- Fallback local em `localStorage` no Radar de Competições para manter login, favoritos e CRUD funcionais quando o JSON Server estiver indisponível.
- Link de fonte FIEMG/SESI no perfil da Pacce Scuderia.
- Formulário FormSubmit para envio estruturado de logotipo, fotos, conquistas, integrantes e links oficiais de equipes.
- Formulário FormSubmit para envio estruturado de protótipos, documentação, fotos, tecnologias e aprendizados da Garagem de Projetos.
- Formulário FormSubmit para mensagens gerais na página de contatos.
- Perfil da SESI SENAI Minerskills #10019 com dados de FRC, primeiro post em 02/07/2024, SESI Barreiro, SENAI Euvaldo Lodi, MinerNews, Rookie All Star Award 2025 e classificação nacional em 2026.
- Logo oficial da SESI SENAI Minerskills #10019 aplicada nos cards e no perfil da equipe.
- Perfil da EPIIBOTS adicionado como grupo de pesquisa e extensão do IFMG Ibirité, com clube de robótica, OBR, publicações e links oficiais.

### Alterado

- Perfil e cards da Pacce Scuderia atualizados com dados verificáveis da Escola SESI Barreiro, 3º lugar no Regional MG 2024 e classificação nacional em Brasília.
- Documentação atualizada para explicar o fluxo JSON Server + fallback local.
- Botões de atualização/cadastro de equipes agora apontam para o formulário público de equipes.
- Botões de proposta da Garagem agora apontam para o formulário público de projetos.

## [1.0.0] - 2026-06-18

### Adicionado

- Documentação principal para GitHub.
- Documentação técnica, banco de dados, deploy e segurança.
- Workflow de GitHub Pages para publicar a pasta `public/`.
- Configuração pública da URL da API em `public/assets/scripts/config.js`.
- Scripts auxiliares para deploy de API e validação do projeto.
- `.env.example`, `CONTRIBUTING.md` e `LICENSE`.

### Alterado

- `package.json` recebeu metadados, scripts e requisito de Node.js.
- `.gitignore` foi expandido para dependências, caches, builds, logs e credenciais.

### Removido

- Arquivo obsoleto `public/assets/scripts/login.js`, que não era referenciado.
