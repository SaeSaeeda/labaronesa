// Hero parallax on scroll
(function () {
  var hero = document.getElementById('hero');
  if (!hero) return;

  function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    // Shift background position subtly downward as user scrolls
    hero.style.backgroundPositionY = (scrollY * 0.35) + 'px';
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
}());