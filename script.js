
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'Deepak Mishra – Trusted Insurance Partner',
      url: window.location.href
    }).catch(console.error);
  } else {
    alert("Sharing not supported on this browser.");
  }
}
