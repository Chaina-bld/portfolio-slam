function E6Card(projet) {
  const imageClass = projet.logoIs ? "img-logo" : "img-card";

  return `
    <div class="my-card">
      <div class="banner-card">
        <img class="${imageClass}" src="${projet.logo}" alt="${projet.titre}" />
      </div>

      <div class="infos-card">
        <h2 class="title-card">${projet.titre}</h2>
        <p class="desc-card">${projet.description}</p>
      </div>

      <div class="link-group-card">
        <a class="button-card" href="${projet.Button.lien}">
          ${projet.Button.text}
        </a>
      </div>
    </div>
  `;
}

const projetsE6 = [
  {
    titre: "Projet E6 - Site automobile",
    description:
      "CBAuto est une application web vitrine présentant une collection de voitures de luxe. Le site affiche dynamiquement chaque véhicule grâce à JavaScript et propose une interface moderne, responsive et élégante, entièrement réalisée en HTML, CSS et JS.",
    logo: "../public/images/e6/auto.png",

    Button: {
      text: "Voir la documentation",
      lien: "../public/documents/cahier_des_charges_auto.pdf",
    },
  },

  {
    titre: "Projet E6 - Portfolio",
    description:
      "Ce projet de portfolio est une vitrine en ligne conçue pour présenter mes compétences, expériences et réalisations professionnelles. Il met en avant mes projets, mon parcours et mes compétences techniques de manière claire et attrayante.",
    logo: "../public/images/e5/portfolio.png",

    Button: {
      text: "Voir la documentation",
      lien: "../public/documents/Documentation_Technique__Portfolio_SLAM.pdf",
    },
  },
];

function renderE6Projects() {
  const container = document.getElementById("grid-cards-e6");

  if (!container) {
    console.error("Container #grid-cards-e6 introuvable");
    return;
  }

  container.innerHTML = projetsE6.map(E6Card).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderE6Projects();
});
