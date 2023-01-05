const rating = document.querySelector('.rating');


window.onload = function () {
  for (let i = 1; i < 6; i++) {
    let star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = "&#9733;";
    star.setAttribute('data-value', i)
    rating.appendChild(star)
  }
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
  
}



