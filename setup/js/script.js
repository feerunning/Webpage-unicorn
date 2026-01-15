$(document).ready(function(){
  console.log('Ready!');
});

const thumbnails = document.querySelectorAll(".thumbnails img");
const details = document.querySelectorAll(".detail");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", (event) => {
    event.stopPropagation();

    // Alle Detailbilder ausblenden
    details.forEach(detail => {
      detail.classList.add("hidden");
    });

    // Zielbild anzeigen
    const targetId = thumbnail.dataset.target;
    document.getElementById(targetId).classList.remove("hidden");
  });
});

// Klick außerhalb → alles ausblenden
document.addEventListener("click", () => {
  details.forEach(detail => {
    detail.classList.add("hidden");
  });
});

// Klick auf Detailbild → nicht schließen
details.forEach(detail => {
  detail.addEventListener("click", event => {
    event.stopPropagation();
  });
});

