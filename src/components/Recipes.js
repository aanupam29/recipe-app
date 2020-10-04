import React from 'react';

const Recipes = (props) => {
    const {recipes} = props
    return (
        <div className="row">
        {
            recipes.map(recipe => (
                <div className="col-md-3">
                    <div className="card text-black bg-dark text-center">
                        <img src={recipe.recipe.image} className="img-fluid" />
                        <div className="card-body">
                            <h4 className="card-title text-white">{recipe.recipe.label}</h4>
                            <div className="card-header bg-secondary text-white shadow p-3 mb-5 rounded">
                                Calories -  {recipe.recipe.calories}
                            </div>
                       </div>
                       <ul className="list-group list-group-flush">
                            {recipe.recipe.ingredients.map(ingredient => (
                                <li className="list-group-item">{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Recipes