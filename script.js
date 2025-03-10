let currentRecipeItem; // Garde une référence à l'élément sélectionné

document.getElementById('recipe-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const steps = document.getElementById('recipe-steps').value;

    if (!name || !ingredients || !steps) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Ajouter la recette à la liste
    const recipeList = document.getElementById('recipe-list');
    const recipeItem = document.createElement('li');
    recipeItem.textContent = name;

    // Cliquer sur la recette pour voir les détails
    recipeItem.addEventListener('click', function () {
        currentRecipeItem = recipeItem; // Sauvegarde l'élément cliqué
        document.getElementById('modal-title').textContent = name;
        document.getElementById('modal-ingredients').textContent = ingredients;
        document.getElementById('modal-steps').textContent = steps;
        document.getElementById('modal-overlay').classList.add('show');
    });

    recipeList.appendChild(recipeItem);

    // Réinitialiser le formulaire
    document.getElementById('recipe-form').reset();

    // Affichage temporaire du message de confirmation
    showConfirmationWithTimeout();
});

// Fonction pour afficher une confirmation temporaire
function showConfirmationWithTimeout() {
    const confirmation = document.createElement("p");
    confirmation.textContent = "Recette ajoutée avec succès !";
    confirmation.classList.add("confirmation");
    document.body.appendChild(confirmation);

    setTimeout(() => {
        confirmation.remove();
    }, 3000);
}

// Fermer la modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal-overlay').classList.remove('show');
});

// Supprimer une recette
document.getElementById('delete-recipe').addEventListener('click', function () {
    if (currentRecipeItem) {
        currentRecipeItem.remove();
        document.getElementById('modal-overlay').classList.remove('show');
    }
});
