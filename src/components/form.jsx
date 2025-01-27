import React, { useState } from "react"
import Response from "./reponse";
import List from "./List";
import { getRecipeFromMistral } from "../ai";
import { use } from "react";

export default function Main() {
    const [loading,setLoading] = useState(false)
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("")
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const newItem = formData.get("newItem")?.trim();
        if(newItem) {
            setIngredients((prev)=> {
                return [...prev , newItem];
            })
        }
        event.currentTarget.reset();
    }
    async function getRecipe() {
        setLoading(true)
        console.log("loading started")
        try {
            const result = await getRecipeFromMistral(ingredients);
            setRecipe(result);
        }
        catch(Error) {
            alert(`error was ${Error}`)
        }
        finally{
            console.log("loading ended!")
            setLoading(false)
        }
    }
    function addRecipe() {
        if(ingredients.length > 0) {
            if(ingredients.length >=5 && !loading) {
                return (
                    <div id="option">
                    <div>
                        <h3>
                            Ready for a Recipe?
                        </h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a Recipe</button>
                </div>
                )
            }
            else {
                if(loading) {
                    return (
                        <div id="option">
                            <div className="loading-container">
                                <span className="loading-text">
                                    <div class="loader"></div>
                                    <span className="loading-dots" data-dots="..."></span>
                                </span>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div id="option">
                            <div>
                                <h3>
                                    Not enough ingredients?
                                </h3>
                                <p>Add atleast 5 ingredients to Generate a recipe.</p>
                            </div>
                        </div>
                    )
                }
            }
        }
    }
    function clearIngredients() {
        setIngredients([]);
    }
    return (
        <>
        <div id="form">
            <form onSubmit={handleSubmit}>
                <input name="newItem" placeholder="e.g egg" id="list-adder" type="text" />
                <button id="submit1" type="submit">+ Add ingredient</button>
                {ingredients.length > 0 
                    ?<button id="clear" onClick={clearIngredients}>Clear ingredients</button>
                    :null
}
            </form>
        </div>
        <section id="main">
            <div id="listAndOptions">
                <List clear={clearIngredients} content={ingredients}/>
                {addRecipe()}
            </div>
            <br /><br />
            <Response result={recipe}/>
        </section>
        </>
    )
}