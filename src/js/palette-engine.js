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

  initTheme() {
    const radios = document.querySelectorAll('input[name="theme"]');
    const checked = document.querySelector('input[name="theme"]:checked');

    if (checked) {
      this.setTheme(checked.value);
    }

    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.checked) {
          this.setTheme(radio.value);
        }
      });
    });
  },

  setTheme(theme) {
    state.currentTheme = theme;
    document.documentElement.dataset.theme = theme;
  },
};
