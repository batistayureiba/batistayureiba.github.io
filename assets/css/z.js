function toggleNavbar() {
  const links = document.getElementById('nav-links');
  const toggle = document.querySelector('.navbar__toggle');

  if (links.classList.contains('show')) {
    links.classList.remove('show');
    toggle.innerHTML = '☰';
  } else {
    links.classList.add('show');
    toggle.innerHTML = '✕';
  }
}
