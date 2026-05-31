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
      lien: "../public/documents/Guide_d'installation_de_Kali_Linux_+_DVWA.pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/dvwa.png",
    titre: "Attaque par force brute sur DVWA",
    description:
      "Réalisation d'une attaque par force brute sur DVWA, démontrant les vulnérabilités de sécurité et les mesures de protection.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/Attaque_par_force_brute_sur_DVWA.pdf",
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
    logoIs: false,
    logo: "../public/images/e5/Mobaxterm-photo.webp",
    titre: "Connexion SSH avec Mobaxterm",
    description:
      "   Connexion à une machine virtuelle via SSH en utilisant Mobaxterm, permettant une gestion à distance efficace.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/Connexion_SSH_avec_MobaXterm.pdf",
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
      lien: "../public/documents/Apache_2.pdf"
    },
  },

  {
    logoIs: false,
    logo: "../public/images/e5/windows-server-2025.png",
    titre: "Windows Server",
    description: "Installation de Windows Server sur une machine virtuelle.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/Installation_et_Configuration_-_Windows_Server_2025.pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/symfony.png",
    titre: "Symfony",
    description: "Installation et configuration de Symfony.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/SF_installation.pdf",
    },
  },
  {
    logoIs: false,
    logo: "../public/images/e5/ocs_glpi.jpg",
    titre: "OCS GLPI",
    description: "Synchronisationde OCS GLPI.",
    Button: {
      text: "Documentation",
      lien: "../public/documents/Synchronisation_OCSGLPI.pdf",
    },
  },
   {
    logoIs: false,
    logo: "../public/images/e5/ocs_glpi.jpg",
    titre: "Gestion de tickets avec OCS GLPI",
    description: "La gestion de tickets avec GLPI permet de centraliser les demandes d’assistance. Relié à OCS",
    Button: {
      text: "Documentation",
      lien: "../public/documents/Synchronisation_OCSGLPI.pdf",
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
