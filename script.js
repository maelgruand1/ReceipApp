// Ouvre la base de données IndexedDB (ou la crée si elle n'existe pas)
let db;

const request = indexedDB.open("recipesDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore("recipes", { keyPath: "id", autoIncrement: true });
    objectStore.createIndex("name", "name", { unique: false });
};

request.onsuccess = function (event) {
    db = event.target.result;
    displayRecipes(); // Affiche les recettes après l'ouverture réussie de la base de données
};

request.onerror = function (event) {
    console.error("Erreur de connexion à la base de données", event);
};

// Ajouter une recette dans IndexedDB
function addRecipe(recipe) {
    const transaction = db.transaction(["recipes"], "readwrite");
    const objectStore = transaction.objectStore("recipes");
    objectStore.add(recipe);

    transaction.oncomplete = function () {
        displayRecipes();
    };

    transaction.onerror = function (event) {
        console.error("Erreur lors de l'ajout de la recette", event);
    };
}

// Afficher les recettes depuis IndexedDB
function displayRecipes() {
    const transaction = db.transaction(["recipes"], "readonly");
    const objectStore = transaction.objectStore("recipes");
    const request = objectStore.getAll();

    request.onsuccess = function () {
        const recipes = request.result;
        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = ""; // Vide la liste avant de la remplir

        recipes.forEach((recipe) => {
            const listItem = document.createElement("li");
            listItem.textContent = recipe.name;
            listItem.onclick = function () {
                showRecipeDetails(recipe);
            };
            recipeList.appendChild(listItem);
        });
    };

    request.onerror = function (event) {
        console.error("Erreur lors de la récupération des recettes", event);
    };
}

// Afficher les détails de la recette dans une modal
function showRecipeDetails(recipe) {
    document.getElementById("modal-title").textContent = recipe.name;
    document.getElementById("modal-ingredients").textContent = recipe.ingredients;
    document.getElementById("modal-steps").textContent = recipe.steps;

    // Supprimer la recette si nécessaire
    const deleteButton = document.getElementById("delete-recipe");
    deleteButton.onclick = function () {
        deleteRecipe(recipe.id);
    };

    // Afficher la modal
    document.getElementById("modal-overlay").classList.add("show");
}
// Fermer la modal
function closeModal() {
    document.getElementById("modal-overlay").classList.remove("show");
}

// Supprimer une recette d'IndexedDB
function deleteRecipe(recipeId) {
    const transaction = db.transaction(["recipes"], "readwrite");
    const objectStore = transaction.objectStore("recipes");
    objectStore.delete(recipeId);

    transaction.oncomplete = function () {
        displayRecipes();
        closeModal();
    };

    transaction.onerror = function (event) {
        console.error("Erreur lors de la suppression de la recette", event);
    };
}


// Écouter l'événement de soumission du formulaire pour ajouter une recette
document.getElementById("recipe-form").onsubmit = function (event) {
    event.preventDefault();

    const recipeName = document.getElementById("recipe-name").value;
    const recipeIngredients = document.getElementById("recipe-ingredients").value;
    const recipeSteps = document.getElementById("recipe-steps").value;

    const newRecipe = {
        name: recipeName,
        ingredients: recipeIngredients,
        steps: recipeSteps
    };

    addRecipe(newRecipe);

    // Réinitialiser le formulaire après l'ajout
    document.getElementById("recipe-form").reset();
};
