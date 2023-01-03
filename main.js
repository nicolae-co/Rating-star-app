const rating = document.querySelector('.rating');
const stars = Array.from(document.querySelectorAll('.star'));

rating.addEventListener('click', e => {
  const clickedStar = e.target;
  const clickedValue = clickedStar.dataset.value;

  stars.forEach((star, i) => {
    if (i+2 > clickedValue) {
      star.classList.add('text-warning');
    } else {
      star.classList.remove('text-warning');
    }
  });
});
