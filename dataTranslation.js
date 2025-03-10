const translations = {
    "fr": {
        "Recettes de Cuisine": "Recettes de Cuisine",
        "Ajouter une Recette": "Ajouter une Recette",
        "Nom de la recette :": "Nom de la recette :",
        "Ingrédients :": "Ingrédients :",
        "Étapes :": "Étapes :",
        "Ajouter": "Ajouter",
        "Liste des recettes": "Liste des recettes",
        "Détails de la recette": "Détails de la recette",
        "Supprimer": "Supprimer",
        "Fermer": "Fermer",
        "Français": "Français",
        "English": "English",
        "Español": "Español"
    },
    "en": {
        "Recettes de Cuisine": "Cooking Recipes",
        "Ajouter une Recette": "Add a Recipe",
        "Nom de la recette :": "Recipe Name:",
        "Ingrédients :": "Ingredients:",
        "Étapes :": "Steps:",
        "Ajouter": "Add",
        "Liste des recettes": "Recipe List",
        "Détails de la recette": "Recipe Details",
        "Supprimer": "Delete",
        "Fermer": "Close",
        "Français": "French",
        "English": "English",
        "Español": "Spanish"
    },
    "es": {
        "Recettes de Cuisine": "Recetas de Cocina",
        "Ajouter une Recette": "Agregar una Receta",
        "Nom de la recette :": "Nombre de la receta:",
        "Ingrédients :": "Ingredientes:",
        "Étapes :": "Pasos:",
        "Ajouter": "Agregar",
        "Liste des recettes": "Lista de Recetas",
        "Détails de la recette": "Detalles de la Receta",
        "Supprimer": "Eliminar",
        "Fermer": "Cerrar",
        "Français": "Francés",
        "English": "Inglés",
        "Español": "Español"
    }
};

document.getElementById("language-select").addEventListener("change", function () {
    const lang = this.value;
    document.querySelectorAll("[data-translate]").forEach(el => {
        const translationKey = el.getAttribute("data-translate");
        if (translations[lang][translationKey]) {
            el.textContent = translations[lang][translationKey];
        }
    });

    // Met à jour les options du sélecteur de langue pour être traduites aussi
    document.querySelectorAll("#language-select option").forEach(option => {
        const key = option.getAttribute("data-translate");
        if (translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
});
