// top bar movement
window.addEventListener('scroll', function() {
    const topbar = document.getElementById('topbar');
    if (window.scrollY > 50) {
      topbar.classList.add('visible');
    } else {
      topbar.classList.remove('visible');;
    }
  });
  