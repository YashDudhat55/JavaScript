const recipesAPI = "https://dummyjson.com/recipes";

let allRecipes = [];

const recipesView = document.getElementById("all-recipes");


function fetchAllRecipes() {

    fetch(recipesAPI)
        .then((res) => {

            res.json()
                .then((data) => {

                    allRecipes = data.recipes;

                    console.log("All Recipes : ", allRecipes);

                    // Loop
                    recipesView.innerHTML = "";

                    allRecipes.forEach(recipe => {

                        recipesView.innerHTML += `
                        
                        <div class="card col-3 mt-4 m-2 d-flex justify-content-center">

                            <img src="${recipe.image}" 
                                 class="card-img-top" 
                                 alt="${recipe.name}">

                            <div class="card-body">

                                <h5 class="card-title">
                                    ${recipe.name}
                                </h5>

                                <ul>
                                    ${recipe.ingredients.map(content => {
                            return `<li>${content}</li>`;
                        }).join("")}
                                </ul>

                                <a href="#" class="btn btn-primary">
                                    Go somewhere
                                </a>

                            </div>

                        </div>
                        
                        `;
                    });

                })
                .catch((error) => {
                    console.log("Error: ", error);
                });

        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Finally execute...");
        });
}


fetchAllRecipes();