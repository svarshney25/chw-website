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
