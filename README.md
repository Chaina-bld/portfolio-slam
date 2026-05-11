# Portfolio SIO SLAM

Un portfolio professionnel pour développeur en formation BTS SIO SLAM.

## 📁 Structure du projet

```
portfolio-slam/
├── index.html                 # Page d'accueil
├── css/
│   └── style.css             # Feuille de styles principale
├── js/
│   └── script.js             # Scripts JavaScript
├── php/
│   └── contact.php           # Traitement du formulaire de contact
├── pages/
│   ├── about.html            # À propos
│   ├── bts.html              # Informations BTS
│   ├── school.html           # École & Entreprise
│   ├── project-e5.html       # Projet E5
│   ├── project-e6.html       # Projet E6
│   ├── veille.html           # Veille technologique
│   └── contact.html          # Formulaire de contact
├── images/                   # Dossier pour les images
├── assets/                   # Dossier pour les autres ressources
└── README.md                 # Ce fichier
```

## 🎨 Pages disponibles

- **Accueil** - Page principale avec présentation
- **À propos** - Présentation personnelle et compétences
- **BTS** - Informations sur le cursus BTS SIO SLAM
- **École & Entreprise** - Expérience académique et professionnelle
- **Projet E5** - Détails du projet d'application métier
- **Projet E6** - Détails du projet de cybersécurité
- **Veille technologique** - Actualités et tendances du secteur
- **Contact** - Formulaire de contact

## 🚀 Fonctionnalités

### Frontend

- Navigation responsive avec menu mobile
- Design moderne et professionnel
- Animations fluides
- Formulaire de contact intégré
- Footer avec liens sociaux
- Optimisé pour mobile (responsive)

### Backend

- Traitement des formulaires en PHP
- Validation des données
- Protection anti-spam (rate limiting)
- Envoi d'emails
- Logging des messages

## 🛠️ Technologies utilisées

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: PHP
- **Autres**: FontFamily (Segoe UI)

## 📋 Configuration

### Email

Pour que le formulaire de contact fonctionne, modifiez l'adresse email dans `php/contact.php`:

```php
$to_email = "votre.email@example.com"; // Remplacer par votre email
```

### Serveur local

Pour tester localement avec PHP:

```bash
php -S localhost:8000
```

Puis accédez à `http://localhost:8000`

## 📝 Customisation

### Couleurs

Modifiez les variables CSS dans `css/style.css`:

```css
:root {
  --primary-color: #2563eb; /* Couleur principale */
  --secondary-color: #64748b; /* Couleur secondaire */
  --accent-color: #f59e0b; /* Accent */
  /* ... */
}
```

### Contenu

Éditez directement les fichiers HTML pour personnaliser le contenu de chaque page.

### Images

Ajoutez vos images dans le dossier `images/` et référencez-les dans le HTML:

```html
<img src="images/votre-image.jpg" alt="Description" />
```

## 📱 Responsive Design

Le portfolio est optimisé pour:

- 📱 Mobile (< 480px)
- 📱 Tablette (480px - 768px)
- 💻 Desktop (> 768px)

## 🔐 Sécurité

- Validation des entrées utilisateur
- Sanitization des données
- Protection CSRF simple
- Rate limiting sur le formulaire
- Logging des tentatives

## 📈 Améliorations futures

- [ ] Ajouter une base de données pour les messages
- [ ] Intégrer Google Analytics
- [ ] Ajouter des sections portfolio détaillées
- [ ] Implémentation de filtres sur les projets
- [ ] Système de pagination
- [ ] Dark mode
- [ ] Multilangue

## 📞 Contact

Pour toute question ou amélioration, consultez la page contact du portfolio.

## 📄 Licence

Ce projet est personnel et libre d'utilisation pour la formation BTS SIO.

---

**Dernière mise à jour**: Mai 2026
