document.querySelectorAll('.dropbtn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    var menu = btn.nextElementSibling;
    var isOpen = menu.style.display === 'block';
    document.querySelectorAll('.dropdown-content').forEach(function (m) {
      m.style.display = 'none';
    });
    menu.style.display = isOpen ? 'none' : 'block';
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown-content').forEach(function (menu) {
    menu.style.display = 'none';
  });
});

(function () {
  var carousel = document.getElementById('featured-carousel');
  if (!carousel) return;

  var slides = carousel.querySelectorAll('.featured-slide');
  if (slides.length < 2) return;

  var current = 0;
  setInterval(function () {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4000);
})();
