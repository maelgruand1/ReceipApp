# README FILE for the Receip App

**Version 1 :**

- Add a div container :

```html
<div class="container">
  <h2 data-translate="Ajouter une Recette">Ajouter une Recette</h2>
  <form id="recipe-form">
    <label for="recipe-name" data-translate="Nom de la recette :"
      >Nom de la recette :</label
    >
    <input type="text" id="recipe-name" required />

    <label for="recipe-ingredients" data-translate="Ingrédients :"
      >Ingrédients :</label
    >
    <textarea id="recipe-ingredients" required></textarea>

    <label for="recipe-steps" data-translate="Étapes :">Étapes :</label>
    <textarea id="recipe-steps" required></textarea>

    <button type="submit" data-translate="Ajouter">Ajouter</button>
  </form>

  <h2 data-translate="Liste des recettes">Liste des Recettes</h2>
  <ul id="recipe-list"></ul>
</div>
```

- Create modal to manage a receip :

```html
<!-- Modal pour afficher les détails d'une recette -->
<div class="modal-overlay" id="modal-overlay">
  <div class="modal">
    <h3 id="modal-title" data-translate="Détails de la recette">
      Détails de la Recette
    </h3>
    <p><strong data-translate="Ingrédients :">Ingrédients :</strong></p>
    <p id="modal-ingredients"></p>
    <p><strong data-translate="Étapes :">Étapes :</strong></p>
    <p id="modal-steps"></p>
    <button class="delete-btn" id="delete-recipe" data-translate="Supprimer">
      Supprimer
    </button>
    <button id="close-modal" data-translate="Fermer">Fermer</button>
  </div>
</div>
```

- Add a traduction to English Spanish and French

```javascript
const translations = {
  fr: {
    "Recettes de Cuisine": "Recettes de Cuisine",
    "Ajouter une Recette": "Ajouter une Recette",
    "Nom de la recette :": "Nom de la recette :",
    "Ingrédients :": "Ingrédients :",
    "Étapes :": "Étapes :",
    Ajouter: "Ajouter",
    "Liste des recettes": "Liste des recettes",
    "Détails de la recette": "Détails de la recette",
    Supprimer: "Supprimer",
    Fermer: "Fermer",
    Français: "Français",
    English: "English",
    Español: "Español",
  },
  en: {
    "Recettes de Cuisine": "Cooking Recipes",
    "Ajouter une Recette": "Add a Recipe",
    "Nom de la recette :": "Recipe Name:",
    "Ingrédients :": "Ingredients:",
    "Étapes :": "Steps:",
    Ajouter: "Add",
    "Liste des recettes": "Recipe List",
    "Détails de la recette": "Recipe Details",
    Supprimer: "Delete",
    Fermer: "Close",
    Français: "French",
    English: "English",
    Español: "Spanish",
  },
  es: {
    "Recettes de Cuisine": "Recetas de Cocina",
    "Ajouter une Recette": "Agregar una Receta",
    "Nom de la recette :": "Nombre de la receta:",
    "Ingrédients :": "Ingredientes:",
    "Étapes :": "Pasos:",
    Ajouter: "Agregar",
    "Liste des recettes": "Lista de Recetas",
    "Détails de la recette": "Detalles de la Receta",
    Supprimer: "Eliminar",
    Fermer: "Cerrar",
    Français: "Francés",
    English: "Inglés",
    Español: "Español",
  },
};

document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const translationKey = el.getAttribute("data-translate");
      if (translations[lang][translationKey]) {
        el.textContent = translations[lang][translationKey];
      }
    });

    // Met à jour les options du sélecteur de langue pour être traduites aussi
    document.querySelectorAll("#language-select option").forEach((option) => {
      const key = option.getAttribute("data-translate");
      if (translations[lang][key]) {
        option.textContent = translations[lang][key];
      }
    });
  });
```
