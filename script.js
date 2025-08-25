document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("entryForm");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const participantsList = document.getElementById("participantsList");
  const winnerDisplay = document.getElementById("winner");
  const pickWinnerBtn = document.getElementById("pickWinnerBtn");

  // LocalStorage me data save karna
  let participants = JSON.parse(localStorage.getItem("participants")) || [];

  function renderParticipants() {
    participantsList.innerHTML = "";
    participants.forEach(p => {
      let li = document.createElement("li");
      li.textContent = `${p.name} - ${p.phone}`;
      participantsList.appendChild(li);
    });
  }

  renderParticipants();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !phone) return;

    // Check duplicate entry (name + phone unique)
    const exists = participants.some(p => p.phone === phone || p.name.toLowerCase() === name.toLowerCase());
    if (exists) {
      alert("❌ Aap ek baar entry kar chuke ho!");
      return;
    }

    participants.push({ name, phone });
    localStorage.setItem("participants", JSON.stringify(participants));
    renderParticipants();

    nameInput.value = "";
    phoneInput.value = "";
  });

  pickWinnerBtn.addEventListener("click", () => {
    if (participants.length === 0) {
      alert("⚠️ No participants available!");
      return;
    }
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];
    winnerDisplay.textContent = `🎉 Winner: ${winner.name} (${winner.phone}) 🎉`;
  });
});
