{{ $src := partial "utils/lib.html" (dict "$" . "type" "clipboard") }}

// Copy Button for Code Blocks
// Optimized with setTimeout to avoid blocking main thread on load

window.addEventListener("DOMContentLoaded", event => {
    setTimeout(() => {
        const copyText = '{{ i18n "copy" }}';
        const copiedText = '{{ i18n "copied" }}';

        document.querySelectorAll('.post-body > pre').forEach((e) => {
            const div = document.createElement('div');
            e.parentNode.replaceChild(div, e);
            div.appendChild(e);
        });

        function addCopyButtons(clipboard) {
            const divs = document.querySelectorAll('table.lntable, .highlight > pre, .post-body > div > pre');

            divs.forEach((containerEl) => {
                containerEl.parentNode.style.position = 'relative';

                const button = document.createElement('button');
                button.className = 'copy-button';
                button.type = 'button';
                button.innerText = copyText;

                let codeBlock;
                if (containerEl.classList.contains('lntable')) {
                    codeBlock = containerEl.querySelectorAll('.lntd')[1];
                } else {
                    codeBlock = containerEl.querySelector('code');
                }

                button.addEventListener('click', () => {
                    clipboard.writeText(codeBlock.innerText).then(() => {
                        button.blur();
                        button.innerText = copiedText;
                        setTimeout(() => {
                            button.innerText = copyText;
                        }, 1000);
                    }).catch((error) => {
                        button.innerText = 'Error';
                        console.error(error);
                    });
                });

                containerEl.appendChild(button);

                {{ if .Site.Params.enableCopyAutoHide }}
                    containerEl.parentNode.addEventListener('mouseover', () => {
                        button.style = 'visibility: visible; opacity: 1';
                    });

                    containerEl.parentNode.addEventListener('mouseout', () => {
                        button.style = 'visibility: hidden; opacity: 0';
                    });
                {{ end }}
            });
        }

        if (navigator && navigator.clipboard) {
            addCopyButtons(navigator.clipboard);
        } else {
            const script = document.createElement('script');
            script.src = '{{ $src }}';
            script.defer = true;
            script.onload = function() {
                addCopyButtons(clipboard);
            };
            document.head.appendChild(script);
        }
    }, 0);
}, {once: true});
