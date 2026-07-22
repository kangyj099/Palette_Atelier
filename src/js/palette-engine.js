const paletteEngine = {
  init() {
    const radios = document.querySelectorAll('input[name="palette"]');
    const checked = document.querySelector('input[name="palette"]:checked');

    if (checked) {
      this.setPalette(checked.value);
    }

    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          this.setPalette(radio.value);
        }
      });
    });
  },

  setPalette(palette) {
    state.currentPalette = palette;
    document.documentElement.dataset.palette = palette;
  },

  initMode() {
    const radios = document.querySelectorAll('input[name="mode"]');
    const checked = document.querySelector('input[name="mode"]:checked');

    if (checked) {
      this.setMode(checked.value);
    }

    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          this.setMode(radio.value);
        }
      });
    });
  },

  setMode(mode) {
    state.currentMode = mode;
    document.documentElement.dataset.mode = mode;
  },

  initContrast() {
    const toggle = document.querySelector('[data-a11y="contrast"]');

    if (!toggle) return;

    this.setContrast(toggle.checked);

    toggle.addEventListener('change', () => {
      this.setContrast(toggle.checked);
    });
  },

  setContrast(enabled) {
    state.accessibility.contrast = enabled;
    document.documentElement.dataset.contrast = enabled ? 'high' : 'normal';
  },

  initFocusRing() {
    const toggle = document.querySelector('[data-a11y="focus-ring"]');

    if (!toggle) return;

    this.setFocusRing(toggle.checked);

    toggle.addEventListener('change', () => {
      this.setFocusRing(toggle.checked);
    });
  },

  setFocusRing(enabled) {
    state.accessibility.focusRing = enabled;
    document.documentElement.dataset.focusRing = enabled ? 'on' : 'off';
  },
};
