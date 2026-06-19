(function () {
    const themeStyle = document.createElement('link');
    themeStyle.rel = 'stylesheet';
    themeStyle.href = '../assets/css/styles.css';
    document.head.appendChild(themeStyle);

    try {
        document.documentElement.dataset.theme = localStorage.getItem('hub-theme') || 'dark';
    } catch (error) {
        document.documentElement.dataset.theme = 'dark';
    }

    window.addEventListener('storage', function (event) {
        if (event.key === 'hub-theme') {
            document.documentElement.dataset.theme = event.newValue || 'dark';
        }
    });

    const team = window.TEAM_PROFILE || {};
    const root = document.getElementById('profile-root');

    const safe = (value, fallback = '') => value || fallback;
    const buildFormHref = (teamName) => `../FormularioEquipe.html${teamName ? `?equipe=${encodeURIComponent(teamName)}` : ''}`;
    const list = (items) => (items || []).map((item) => `<li class="flex items-start gap-3 text-slate-400"><i class="fa-solid fa-check text-orange-400 mt-1"></i><span>${item}</span></li>`).join('');
    const links = (items) => (items || []).map((item) => `
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl text-white font-semibold duration-300">
            <i class="${item.icon || 'fa-solid fa-link'} me-2"></i>
            ${item.label}
        </a>
    `).join('');
    const statCards = (stats) => (stats || []).map((stat) => `
        <div class="card-glass rounded-3xl p-6">
            <div class="text-3xl text-white font-bold mb-2">${stat.value}</div>
            <div class="text-slate-500 uppercase tracking-widest text-xs">${stat.label}</div>
        </div>
    `).join('');
    const timeline = (items) => (items || []).map((item) => `
        <div class="card-glass rounded-3xl p-6">
            <div class="font-mono text-orange-400 text-sm mb-2">${item.year}</div>
            <h4 class="text-white font-bold text-lg mb-2">${item.title}</h4>
            <p class="text-slate-400 text-sm leading-relaxed">${item.text}</p>
        </div>
    `).join('');

    const categoryClass = {
        'FIRST LEGO League': 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
        'F1 in Schools': 'text-red-300 bg-red-500/10 border-red-500/20',
        'FTC': 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
        'FRC': 'text-slate-300 bg-slate-500/10 border-slate-500/20',
        'Pesquisa e Extensão': 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20'
    }[team.category] || 'text-orange-300 bg-orange-500/10 border-orange-500/20';

    document.title = `${safe(team.name, 'Equipe')} | HUB Da Robótica`;

    root.innerHTML = `
        <div class="fixed inset-0 -z-10 overflow-hidden bg-pattern">
            <div class="absolute -top-40 -left-32 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-[160px]"></div>
            <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px]"></div>
            <div class="absolute top-1/3 left-1/2 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        </div>

        <header class="fixed top-0 w-full z-50 glass-nav">
            <div class="max-w-7xl mx-auto px-6">
                <div class="h-20 flex justify-between items-center">
                    <a href="../index.html" class="flex items-center gap-4 group">
                        <img src="../assets/logos/logo-hub-icon-compact.png" alt="Logo HUB Da Robótica" class="hub-logo-mark w-14 h-14 rounded-full border border-white/10 group-hover:scale-105 duration-300">
                        <div>
                            <h1 class="font-serif text-xl text-white leading-tight">HUB Da Robótica</h1>
                            <p class="text-[0.65rem] uppercase tracking-[0.35em] text-orange-400 font-bold">Perfil de Equipe</p>
                        </div>
                    </a>

                    <nav class="hidden lg:flex gap-7">
                        <a href="../index.html" class="hover:text-white duration-300">Início</a>
                        <a href="../Garagem_De_Projetos.html" class="hover:text-white duration-300">Garagem</a>
                        <a href="../RadarDeCompeticoes.html" class="hover:text-white duration-300">Radar de Competições</a>
                        <a href="../EquipesBrasil.html" class="text-orange-400 border-b-2 border-orange-400 pb-1">Equipes do Brasil</a>
                        <a href="../Contatos.html" class="hover:text-white duration-300">Contatos</a>
                    </nav>
                </div>
            </div>
        </header>

        <main>
            <section class="pt-40 pb-24 border-b border-white/10">
                <div class="max-w-7xl mx-auto px-6">
                    <a href="../EquipesBrasil.html#equipes" class="inline-flex items-center gap-3 text-slate-400 hover:text-white duration-300 mb-10">
                        <i class="fa-solid fa-arrow-left"></i>
                        Voltar para Equipes do Brasil
                    </a>

                    <div class="grid lg:grid-cols-[1fr_380px] gap-14 items-center">
                        <div>
                            <span class="inline-flex items-center gap-3 px-5 py-2 rounded-full border ${categoryClass} font-mono text-sm mb-8">
                                <i class="fa-solid fa-award"></i>
                                ${safe(team.category, 'Robótica')}
                            </span>

                            <h1 class="font-serif text-5xl md:text-7xl text-white leading-tight mb-8">${safe(team.name, 'Equipe')}</h1>
                            <p class="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mb-10">${safe(team.summary, 'Perfil em construção no HUB Da Robótica.')}</p>

                            <div class="flex flex-wrap gap-4">
                                <a href="${buildFormHref(team.name)}" class="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold shadow-gold duration-300">
                                    <i class="fa-solid fa-paper-plane me-2"></i>
                                    Atualizar Perfil
                                </a>
                                <a href="../EquipesBrasil.html#hall" class="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl text-white font-semibold duration-300">
                                    <i class="fa-solid fa-trophy me-2"></i>
                                    Hall da Fama
                                </a>
                                ${links(team.links)}
                            </div>
                        </div>

                        <div class="card-glass rounded-[32px] p-8 text-center">
                            <img src="${safe(team.logo, '../assets/equipes/team-placeholder.svg')}" alt="Logo ${safe(team.name, 'equipe')}" class="w-44 h-44 object-contain mx-auto mb-8 rounded-3xl border border-white/10 bg-white/5 p-4">
                            <h2 class="text-2xl text-white font-bold mb-3">${safe(team.name, 'Equipe')}</h2>
                            <p class="text-slate-500">${safe(team.region, 'Brasil')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-20">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${statCards(team.stats)}
                    </div>
                </div>
            </section>

            <section class="py-24 border-y border-white/10 bg-black/20">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid lg:grid-cols-2 gap-10">
                        <article class="card-glass rounded-3xl p-8">
                            <h3 class="font-serif text-3xl text-white mb-6">Visão da Equipe</h3>
                            <p class="text-slate-400 leading-relaxed">${safe(team.about, team.summary)}</p>
                        </article>

                        <article class="card-glass rounded-3xl p-8">
                            <h3 class="font-serif text-3xl text-white mb-6">Competências</h3>
                            <ul class="space-y-4">${list(team.skills)}</ul>
                        </article>
                    </div>
                </div>
            </section>

            <section class="py-24">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="mb-12">
                        <h3 class="font-serif text-4xl text-white mb-4">Destaques e Trajetória</h3>
                        <p class="text-slate-400 max-w-3xl">Linha editorial preparada para receber conquistas reais, fotos, prêmios, temporadas e registros técnicos da equipe.</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-6">${timeline(team.timeline)}</div>
                </div>
            </section>

            <section class="py-24 border-t border-white/10">
                <div class="max-w-6xl mx-auto px-6">
                    <div class="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-blue-950 via-slate-900 to-orange-950 p-10 md:p-16 text-center">
                        <div class="absolute left-0 top-0 w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[120px]"></div>
                        <div class="absolute right-0 bottom-0 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[120px]"></div>
                        <div class="relative">
                            <i class="fa-solid fa-circle-nodes text-6xl text-orange-400 mb-8"></i>
                            <h3 class="font-serif text-4xl text-white mb-6">Quer completar este perfil?</h3>
                            <p class="text-slate-400 text-lg max-w-3xl mx-auto mb-10">Envie logotipo, fotos, conquistas, integrantes e links oficiais para deixar a página pronta para divulgação pública.</p>
                            <a href="${buildFormHref(team.name)}" class="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-2xl text-white font-semibold shadow-gold">
                                <i class="fa-solid fa-envelope"></i>
                                Enviar Informações
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="border-t border-white/10 bg-[#040a0f]">
            <div class="max-w-7xl mx-auto px-6 py-12">
                <div class="flex flex-col lg:flex-row justify-between gap-10">
                    <div class="flex items-center gap-4">
                        <img src="../assets/logos/logo-hub-icon-compact.png" alt="Logo HUB Da Robótica" class="hub-logo-mark w-14 h-14 rounded-full border border-white/10">
                        <div>
                            <h3 class="font-serif text-2xl text-white leading-tight">HUB Da Robótica</h3>
                            <p class="text-[0.65rem] uppercase tracking-[0.35em] text-orange-400 font-bold">Equipes Brasil</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-5 text-slate-500">
                        <a href="../index.html" class="hover:text-white duration-300">Início</a>
                        <a href="../Garagem_De_Projetos.html" class="hover:text-white duration-300">Garagem</a>
                        <a href="../RadarDeCompeticoes.html" class="hover:text-white duration-300">Radar de Competições</a>
                        <a href="../EquipesBrasil.html" class="hover:text-white duration-300">Equipes do Brasil</a>
                        <a href="../Contatos.html" class="hover:text-white duration-300">Contatos</a>
                    </div>
                </div>
                <hr class="border-white/10 my-10">
                <div class="flex flex-col md:flex-row justify-between gap-6 text-sm text-slate-500">
                    <p>© 2026 HUB Da Robótica</p>
                    <p>${safe(team.name, 'Equipe')}</p>
                </div>
            </div>
        </footer>
    `;
})();
