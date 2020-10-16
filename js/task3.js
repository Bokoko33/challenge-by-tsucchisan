const breakPoint = 768;
const mql = window.matchMedia(`(max-width: ${breakPoint}px)`);
const el = document.getElementById('js-target-task3');
const textMobile = `今、スクリーン幅は${breakPoint}px以下です。`;
const textDesktop = `今、スクリーン幅は${breakPoint}pxより大きいです。`;

export default function task3() {
  // 初期化
  if (mql.matches) {
    el.textContent = textMobile;
  } else {
    el.textContent = textDesktop;
  }

  // リアルタイムで切り替え
  mql.addEventListener('change', function (e) {
    if (e.matches) {
      el.textContent = textMobile;
    } else {
      el.textContent = textDesktop;
    }
  });
}
