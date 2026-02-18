/* ============================
    DATA (Simulation BDD / API)
============================ */

const projets = [
  // Exemple a ne jamais decomenter
  // {
  //   logoIs: false, mettre true si cest un logo sinon mettre false
  //   logo: "", mettre le chemin de limage
  //   titre: "", mettre le titre du projet
  //   description: "", mettre une description du projet
  //   Button: { button de base obligatoire
  //     text: "", mettre le texte du bouton
  //     lien: "" mettre le lien du bouton
  //   },
  //   secondButton: { button optionnel retirer si pas besoin
  //     text: "", mettre le texte du bouton
  //     lien: "" mettre le lien du bouton
  //   }
  // },

  {
    logoIs: false,
    logo: "../public/images/e5/Kali_Linux.jpg",
    titre: "Kali Linux et DVWA",
    description:
      "Installation et configuration de Kali Linux et DVWA sur une machine virtuelle.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/documentation kali linux et dvwa.pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/portfolio.png",
    titre: "Portfolio",
    description:
      "   Portfolio personnel réalisé en HTML et CSS, présentant mes projets et mes compétences en intégration web.",
    Button: {
      text: "Site Web",
      lien: "../index.html",
    },
  },
  {
    logoIs: true,
    logo: "../public/images/e5/apache.svg",
    titre: "Apache 2",
    description:
      " Installation d'Apache2 sur une machine virtuelle. Configuration du serveur web pour héberger des sites web et des applications.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/apache 2 doc (pas fini).pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/MobaXterm-photo.webp",
    titre: "Mobaxterm SSH",
    description:
      "Installation et configuration de Mobaxterm pour se connecter à une machine virtuelle via SSH.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/SSH documentation.pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/windows-server-2025.png",
    titre: "Windows Server",
    description: "Installation de Windows Server sur une machine virtuelle.",
    Button: {
      text: "En cours",
      lien: "#",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/symfony.png",
    titre: "Symfony",
    description: "Installation et configuration de Symfony.",
    Button: {
      text: "En cours",
      lien: "#",
    },
  },
];

/* ============================
    COMPONENT
============================ */

function Card(projet) {
  const imageClass = projet.logoIs ? "img-logo" : "img-card";

  const secondButtonHTML = projet.secondButton
    ? `<a class="button-card" href="${projet.secondButton.lien}">
          ${projet.secondButton.text}
        </a>`
    : "";

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
        ${secondButtonHTML}
      </div>
    </div>
  `;
}

/* ============================
    RENDER
============================ */

function renderProjects() {
  const container = document.getElementById("grid-cards");

  if (!container) {
    console.error("Container #grid-cards introuvable");
    return;
  }

  container.innerHTML = projets.map(Card).join("");
}

/* ============================
    INIT
============================ */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});
