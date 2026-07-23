const renderer = {
  semanticTokens: [
    '--surface-base', '--surface-subtle', '--surface-elevated',
    '--text-primary', '--text-secondary', '--text-tertiary', '--text-inverse',
    '--border-default', '--border-strong',
    '--primary-base', '--primary-strong', '--primary-soft',
    '--accent-base', '--accent-soft',
    '--status-success', '--status-warning', '--status-danger', '--status-info',
  ],

  inspectToken(token) {
    state.selectedToken = token;

    document.querySelector('[data-inspector="empty"]').hidden = true;
    document.querySelector('[data-inspector="details"]').hidden = false;

    const color = utils.resolveColor(token);
    const hex = utils.rgbToHex(color);
    const surface = utils.resolveColor('--surface-base');
    const ratio = utils.contrastRatio(color, surface);

    const usedBy = this.semanticTokens.filter(
      (name) => utils.resolveColor(name) === color
    );

    document.querySelector('[data-field="name"]').textContent = token;
    document.querySelector('[data-field="hex"]').textContent = hex;
    document.querySelector('[data-field="contrast"]').textContent = `${ratio.toFixed(2)} : 1`;
    document.querySelector('[data-field="wcag"]').textContent = utils.wcagLevel(ratio);
    document.querySelector('[data-field="usedby"]').textContent = usedBy.length
      ? usedBy.join(', ')
      : '-';
  },

  showToast(message) {
    const toast = document.querySelector('[data-toast]');
    document.querySelector('[data-toast-message]').textContent = message;
    toast.classList.add('c-toast--visible');

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('c-toast--visible');
    }, 2000);
  },

  copyHex() {
    const hex = document.querySelector('[data-field="hex"]').textContent;
    navigator.clipboard.writeText(hex)
      .then(() => this.showToast(`Copied ${hex}`))
      .catch(() => this.showToast('Copy failed'));
  },

  initInspectorActions() {
    document
      .querySelector('[data-action="copy-hex"]')
      .addEventListener('click', () => this.copyHex());
  },

  initTabs() {
    const tabs = document.querySelectorAll('.p-tabs__item');
    const panels = document.querySelectorAll('[data-panel]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        state.currentTab = target;

        tabs.forEach((item) => {
          item.classList.remove('p-tabs__item--active');
          item.setAttribute('aria-selected', 'false');
        });

        tab.classList.add('p-tabs__item--active');
        tab.setAttribute('aria-selected', 'true');

        panels.forEach((panel) => {
          panel.hidden = panel.dataset.panel !== target;
        });
      });
    });
  },
};
