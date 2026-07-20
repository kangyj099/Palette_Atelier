const previewEngine = {
  primitiveGroups: [
    { label: 'Neutral', prefix: '--color-gray' },
    { label: 'Primary', prefix: '--color-primary' },
    { label: 'Secondary', prefix: '--color-secondary' },
    { label: 'Accent', prefix: '--color-accent' },
    { label: 'Success', prefix: '--color-success' },
    { label: 'Warning', prefix: '--color-warning' },
    { label: 'Danger', prefix: '--color-danger' },
    { label: 'Info', prefix: '--color-info' },
  ],

  colorSteps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],

  semanticGroups: [
    { label: 'Surface', tokens: ['--surface-base', '--surface-subtle', '--surface-elevated'] },
    { label: 'Text', tokens: ['--text-primary', '--text-secondary', '--text-tertiary', '--text-inverse'] },
    { label: 'Border', tokens: ['--border-default', '--border-strong'] },
    { label: 'Primary', tokens: ['--primary-base', '--primary-strong', '--primary-soft'] },
    { label: 'Accent', tokens: ['--accent-base', '--accent-soft'] },
    { label: 'Status', tokens: ['--status-success', '--status-warning', '--status-danger', '--status-info'] },
  ],

  buildSwatch(token, labelText) {
    const swatch = document.createElement('div');
    swatch.className = 'p-swatch';

    const color = document.createElement('button');
    color.type = 'button';
    color.className = 'p-swatch__color';
    color.style.setProperty('--swatch-color', `var(${token})`);
    color.setAttribute('aria-label', token);
    color.addEventListener('click', () => renderer.inspectToken(token));
    swatch.appendChild(color);

    const label = document.createElement('span');
    label.className = 'p-swatch__label';
    label.textContent = labelText;
    swatch.appendChild(label);

    return swatch;
  },

  renderPrimitiveTab() {
    const panel = document.querySelector('[data-panel="primitive"]');

    if (!panel) return;

    panel.innerHTML = '';

    const description = document.createElement('p');
    description.className = 'p-showcase__description';
    description.textContent = 'Primitive color tokens used throughout the design system.';
    panel.appendChild(description);

    this.primitiveGroups.forEach((group) => {
      const section = document.createElement('div');
      section.className = 'p-section';

      const title = document.createElement('h3');
      title.textContent = group.label;
      section.appendChild(title);

      const palette = document.createElement('div');
      palette.className = 'p-palette';

      this.colorSteps.forEach((step) => {
        const token = `${group.prefix}-${step}`;
        palette.appendChild(this.buildSwatch(token, step));
      });

      section.appendChild(palette);
      panel.appendChild(section);
    });
  },

  renderSemanticTab() {
    const panel = document.querySelector('[data-panel="semantic"]');

    if (!panel) return;

    panel.innerHTML = '';

    const description = document.createElement('p');
    description.className = 'p-showcase__description';
    description.textContent = 'Semantic tokens used to express UI meaning across components.';
    panel.appendChild(description);

    this.semanticGroups.forEach((group) => {
      const section = document.createElement('div');
      section.className = 'p-section';

      const title = document.createElement('h3');
      title.textContent = group.label;
      section.appendChild(title);

      const palette = document.createElement('div');
      palette.className = 'p-palette';

      group.tokens.forEach((token) => {
        palette.appendChild(this.buildSwatch(token, token.replace('--', '')));
      });

      section.appendChild(palette);
      panel.appendChild(section);
    });
  },
};
