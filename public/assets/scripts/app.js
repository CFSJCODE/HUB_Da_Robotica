(function () {
    const STORAGE_KEY = 'hub-theme';

    function getStoredTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'dark';
        } catch (error) {
            return 'dark';
        }
    }

    function applyTheme(theme) {
        const normalizedTheme = theme === 'light' ? 'light' : 'dark';
        document.documentElement.dataset.theme = normalizedTheme;
        updateToggle(normalizedTheme);
    }

    function updateToggle(theme) {
        const button = document.getElementById('theme-toggle');
        const knob = document.getElementById('theme-toggle-knob');
        const label = document.getElementById('theme-toggle-label');

        if (!button || !knob || !label) return;

        const isLight = theme === 'light';
        button.setAttribute('aria-pressed', String(isLight));
        label.textContent = isLight ? 'Light' : 'Dark';
        knob.style.transform = isLight ? 'translateX(1.35rem)' : 'translateX(0)';
    }

    function setStoredTheme(theme) {
        const normalizedTheme = theme === 'light' ? 'light' : 'dark';
        try {
            localStorage.setItem(STORAGE_KEY, normalizedTheme);
        } catch (error) {
            // Mantem a troca visual mesmo quando o navegador bloqueia localStorage.
        }
        applyTheme(normalizedTheme);
    }

    window.HubTheme = {
        current: getStoredTheme,
        set: setStoredTheme,
        toggle() {
            setStoredTheme(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light');
        }
    };

    applyTheme(getStoredTheme());

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(getStoredTheme());
    });

    window.addEventListener('storage', function (event) {
        if (event.key === STORAGE_KEY) {
            applyTheme(event.newValue || 'dark');
        }
    });
})();
