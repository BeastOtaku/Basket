//document.addEventListener('DOMContentLoaded', () => {
//  const images = document.querySelectorAll('.sneaker-slider img');
 // let currentIndex = 0;
 // const showNextImage = () => {
 //   images.forEach(image => image.style.display = 'none');
 //   images[currentIndex].style.display = 'block';
 //   currentIndex = (currentIndex + 1) % images.length;
//  };
 // showNextImage();
//  setInterval(showNextImage, 4000);
//});
  // Fonctions pour les boutons de connexion et d'inscription
 // const login = () => {
 //   alert("Fonction de connexion en cours de développement...");
 // };
 // const signup = () => {
//    alert("Fonction d'inscription en cours de développement...");
 // }; JAVASCRIPT
 // 
  
  // Get the audio element
//const audioElement = document.getElementById('Trollface');

// Get the link element
//const linkElement = document.querySelector('a[href*="nike"]');

//linkElement.addEventListener('click', () => {
 // audioElement.play(Trollface);
//});


// Code JavaScript pour créer et afficher la carte
// Coordonnées initiales et niveau de zoom
var map = L.map('map').setView([45.74265220135835, 4.839034514782128], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([45.74265220135835, 4.839034514782128]).addTo(map)
  .bindPopup('DRIP STORE')
  .openPopup();
  
  fetch("sneakers.json")
    .then(response => response.json())
    .then(data => {
     console.log(data);
     console.log(data.entreprise.nomCommercial);
     data.entreprise.temoignages.forEach(element => {
      const temoignages = document.getElementById("temoignages");
      const div = document.createElement("div");
      temoignages.appendChild(div);
      const h3 = document.createElement("h3");
      h3.innerText =element.prenom;
      div.appendChild(h3);
      const p = document.createElement("p")
      temoignages.appendChild(p);
      p.innerText = element.typeExperience;
      const h1 = document.createElement("h1");
      temoignages.appendChild(h1);
      h1.innerText = element.commentaire;
      
      
    });
    })



