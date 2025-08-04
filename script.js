// Typewriter effect
document.getElementById('typewriter').textContent = "Deepak Mishra – Insurance Expert";

// Scroll to top
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function() {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
