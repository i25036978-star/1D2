(function () {
  const BASE_WIDTH = 1272.202;
  const BASE_HEIGHT = 58.39;

  function scaleNavigation() {
    const wrap = document.querySelector(".nav-scale-wrap");
    const nav = document.querySelector(".hero-nav-fixed");

    if (!wrap || !nav) return;

    const availableWidth = wrap.clientWidth;
    const scale = Math.min(1, availableWidth / BASE_WIDTH);

    nav.style.transform = `scale(${scale})`;
    wrap.style.height = `${BASE_HEIGHT * scale}px`;
  }

  window.addEventListener("load", scaleNavigation);
  window.addEventListener("resize", scaleNavigation);
})();