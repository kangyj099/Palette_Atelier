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
};
