AOS.init();

const headlineText = "Deepak Mishra – Trusted Insurance Partner";
let i = 0;
function typeWriter() {
  if (i < headlineText.length) {
    document.getElementById("headline").innerHTML += headlineText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
