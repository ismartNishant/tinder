$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
  })
  
  //javascript for scroll to top button
  const scrollBtn = document.querySelector(".scrollToTop-btn");
  
  window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 0);
  });
  
  //javascript for scroll back to top on click scroll-to-top button
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  
  //javascript for navigation bar effects on scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector("nav-wrapper");
    header.classList.toggle('sticky', window.scrollY > 0);
  });