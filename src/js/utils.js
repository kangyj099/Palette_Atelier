const utils = {
  resolveColor(token) {
    const probe = document.createElement('span');
    probe.style.color = `var(${token})`;
    document.body.appendChild(probe);
    const { color } = getComputedStyle(probe);
    probe.remove();
    return color;
  },

  rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+(\.\d+)?/g).map(Number);
    return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
  },

  relativeLuminance(rgb) {
    const [r, g, b] = rgb.match(/\d+(\.\d+)?/g).map(Number);
    const channel = (value) => {
      const c = value / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  },

  contrastRatio(rgbA, rgbB) {
    const lumA = this.relativeLuminance(rgbA);
    const lumB = this.relativeLuminance(rgbB);
    const lighter = Math.max(lumA, lumB);
    const darker = Math.min(lumA, lumB);
    return (lighter + 0.05) / (darker + 0.05);
  },

  wcagLevel(ratio) {
    if (ratio >= 7) return 'AAA';
    if (ratio >= 4.5) return 'AA';
    if (ratio >= 3) return 'AA Large';
    return 'Fail';
  },
};
