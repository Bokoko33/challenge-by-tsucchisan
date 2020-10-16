const el = document.querySelector('.task5__content');
const options = {
  root: null,
  rootMargin: '-30% 0px',
  threshold: 0,
};

export default function task5() {
  const observer = new IntersectionObserver(callbackFunc, options);
  observer.observe(el);
}

function callbackFunc(entries, object) {
  entries.forEach((entry) => {
    // 交差していない
    if (!entry.isIntersecting) return;

    entry.target.classList.add('task5--visible');

    // 監視の解除
    object.unobserve(el);
  });
}
