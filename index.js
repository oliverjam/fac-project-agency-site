function highlightActiveLink() {
  const hash = window.location.hash;
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.hash === hash) {
      link.classList.add("header__link--active");
    } else {
      link.classList.remove("header__link--active");
    }
  });
}

window.addEventListener("load", highlightActiveLink);
window.addEventListener("hashchange", highlightActiveLink);
