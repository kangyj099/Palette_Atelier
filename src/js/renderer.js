const renderer = {
  initTabs() {
    const tabs = document.querySelectorAll('.p-tabs__item');
    const panels = document.querySelectorAll('[data-panel]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

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
