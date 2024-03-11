document.addEventListener('DOMContentLoaded', function () {
  var detailsElements = document.querySelectorAll('.info__list-link');
  detailsElements.forEach(function (details) {
    details.addEventListener('toggle', function () {
      var button = this.parentNode.querySelector('.info__list-btn img');
      if (this.open) {
        button.src = "./assets/minus.svg";
        button.classList.add('rotate-180');
      } else {
        button.src = "./assets/plus.svg";
        button.classList.remove('rotate-180');
      }
    });
  });

  var toogleImg = document.querySelector('.toogle');
  var header = document.querySelector('header');
  toogleImg.addEventListener('click', function () {
    header.classList.toggle('active');
  });
});
