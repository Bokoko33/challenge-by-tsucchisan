const openButton = document.getElementById('task4-open');
const closeButton = document.getElementById('task4-close');
const overlay = document.getElementById('task4-overlay');
const modal = document.getElementById('task4-modal');

export default function task4() {
  openButton.addEventListener('click', function () {
    openModal();
  });
  closeButton.addEventListener('click', function () {
    closeModal();
  });
  overlay.addEventListener('click', function () {
    closeModal();
  });
}

function openModal() {
  overlay.classList.add('task4--visible');
  modal.classList.add('task4--visible');
}

function closeModal() {
  overlay.classList.remove('task4--visible');
  modal.classList.remove('task4--visible');
}
