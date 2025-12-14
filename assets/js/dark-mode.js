// Reactive Dark Mode
// Optimized to avoid Forced Reflow (getComputedStyle)

const userPrefers = localStorage.getItem('theme');
if (userPrefers === 'dark') {
    changeModeMeta('dark');
} else if (userPrefers === 'light') {
    changeModeMeta('light');
}

window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
    changeMode();
});

window.addEventListener("DOMContentLoaded", event => {
    // Update meta tags and code highlighting
    changeMode();

    // Theme Switcher
    const themeSwitcher = document.getElementById('theme-switcher');

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            if (getCurrentTheme() == "dark") {
                changeModeMeta('light');
            } else {
                changeModeMeta('dark');
            }
            changeMode();
            storePrefers();
        });
    }
}, {once: true});

// Sync Across Tabs
window.addEventListener('storage', function (event) {
    if (event.key !== 'theme') {
      return;
    }

    if (event.newValue === 'dark') {
        changeModeMeta('dark');
    } else {
        changeModeMeta('light');
    }
    changeMode();
});

// Functions

function getCurrentTheme() {
    // Optimization: Read data-theme attribute or matchMedia instead of getComputedStyle
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

function changeModeMeta(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function changeMode() {
    const isDark = getCurrentTheme() === 'dark';

    // Change theme color meta
    const themeColor = isDark ? '{{ .Site.Params.themeColorDark }}' : '{{ .Site.Params.themeColor }}';
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', themeColor);
    }

    {{ if and .Site.Params.enableUtterances (eq hugo.Environment "production") }}
        // Change Utterances Comments Theme
        if (isDark) {
            changeUtterancesTheme('{{ .Site.Params.utterancesThemeDark | default "photon-dark" }}');
        } else {
            changeUtterancesTheme('{{ .Site.Params.utterancesTheme | default "github-light" }}');
        }
        function changeUtterancesTheme(theme) {
            const iframe = document.querySelector('.utterances-frame');
            if (iframe !== null) {
                const message = {
                    type: 'set-theme',
                    theme: theme
                };
                iframe.contentWindow.postMessage(message, 'https://utteranc.es');
            }
        }
    {{ end }}

    // Mermaid
    if (typeof mermaidConfig !== 'undefined') {
        const mermaids = document.querySelectorAll('.mermaid');

        mermaids.forEach(e => {
            if (e.getAttribute('data-processed')) {
                e.removeAttribute('data-processed');
                e.innerHTML = e.getAttribute('data-graph');
            } else {
                e.setAttribute('data-graph', e.textContent);
            }
        });

        if (isDark) {
            mermaidConfig.theme = '{{ .Site.Params.mermaidThemeDark | default "dark" }}';
            mermaid.initialize(mermaidConfig);
            mermaid.init();
        } else {
            mermaidConfig.theme = '{{ .Site.Params.mermaidTheme | default "default" }}';
            mermaid.initialize(mermaidConfig);
            mermaid.init();
        }
    }
}

function storePrefers() {
    window.localStorage.setItem('theme', getCurrentTheme());
}
