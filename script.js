const properties = [
  {
    title_es: "Casa moderna cerca del mar",
    title_en: "Modern house near the beach",
    description_es: "Amplia casa con vista al mar, ideal para familias.",
    description_en: "Spacious house with ocean view, perfect for families.",
    lat: 21.1619,
    lng: -86.8515
  },
  {
    title_es: "Villa con alberca privada",
    title_en: "Villa with private pool",
    description_es: "Relájate en tu alberca privada en la zona hotelera.",
    description_en: "Relax in your private pool in the hotel zone.",
    lat: 21.1356,
    lng: -86.7436
  },
  {
    title_es: "Departamento en el centro",
    title_en: "Downtown apartment",
    description_es: "Cerca de restaurantes y vida nocturna.",
    description_en: "Close to restaurants and nightlife.",
    lat: 21.1618,
    lng: -86.8510
  }
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.1619, lng: -86.8515 },
    zoom: 12
  });

  properties.forEach(prop => {
    new google.maps.Marker({
      position: { lat: prop.lat, lng: prop.lng },
      map,
      title: prop.title_es
    });
  });
}

function openModal(index) {
  const lang = document.getElementById("language-toggle").value;
  const prop = properties[index];
  document.getElementById("modal-title").textContent = lang === "es" ? prop.title_es : prop.title_en;
  document.getElementById("modal-description").textContent = lang === "es" ? prop.description_es : prop.description_en;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
