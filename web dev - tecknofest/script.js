let ingredients = [];

function addIngredient() {
    const input = document.getElementById("ingredientInput");
    const value = input.value.trim().toLowerCase();
    if (value === "") return;

    ingredients.push(value);
    input.value = "";
    displayIngredients();
}

function displayIngredients() {
    const list = document.getElementById("ingredientList");
    list.innerHTML = "";
    ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function suggestMeals() {
    const mealsDiv = document.getElementById("meals");
    mealsDiv.innerHTML = "";

    let meals = [];

    if (ingredients.includes("chicken")) meals.push("🍗 Chicken Karahi");
    if (ingredients.includes("daal")) meals.push("🍲 Masoor Daal");
    if (ingredients.includes("rice")) meals.push("🍚 Vegetable Pulao");

    if (meals.length === 0) {
        meals.push("😅 Ingredients kam hain, simple sabzi bana lo");
    }

    meals.forEach(meal => {
        const div = document.createElement("div");
        div.className = "meal-card";
        div.textContent = meal;
        mealsDiv.appendChild(div);


const recipeInstructions = {
    "🍗 Chicken Karahi": [
        "Heat oil in a pan.",
        "Add garlic, ginger, and green chilies, sauté for 2 mins.",
        "Add chicken and cook until lightly brown.",
        "Add chopped tomatoes and spices, simmer 15-20 mins.",
        "Garnish with coriander and serve hot."
    ],
    "🍲 Masoor Daal": [
        "Rinse daal and boil with water and turmeric until soft.",
        "Heat oil in a pan, sauté onions, garlic, and tomatoes.",
        "Add cooked daal, salt, and red chili powder, simmer 5 mins.",
        "Garnish with coriander and serve with rice or roti."
    ]
};

suggested.forEach(meal => {
    const div = document.createElement("div");
    div.className = "meal-card";
    div.textContent = meal;

    // Create a button
    const btn = document.createElement("button");
    btn.textContent = "Show Recipe";
    btn.style.marginLeft = "10px";
    btn.onclick = () => showRecipe(meal); // call function on click
    div.appendChild(btn);

    mealsDiv.appendChild(div);
});

function showRecipe(meal) {
    const steps = recipeInstructions[meal]; // get recipe steps
    if (!steps) return;

    let recipeText = `📖 Recipe for ${meal}:\n\n`;
    steps.forEach((step, index) => {
        recipeText += `${index + 1}. ${step}\n`;
    });

    alert(recipeText); // simple popup to display recipe
}


        

    });

}