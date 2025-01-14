import { useState } from "react";

const Main = ()=>{

    // ReactState
    const [ingredient, setIngredient] = useState([]);
    const show =ingredient.map(x=><li key={x}>{x}</li>)

    function AddIngredient(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const ingredientForm = formData.get('ingredient')
        setIngredient(prev => [...prev, ingredientForm])
    }
    // function AddIngredient(formData){
    //     const newIngredient = formData.get('ingredient');
    //     setIngredient(prev => [...prev, newIngredient])
    // }

    return(
        <>
            <form /*action={AddIngredient}*/ onSubmit={AddIngredient} className="add-ingredient-form">
                <input type="text" placeholder="e.g oregano" name="ingredient"></input>
                <button>+ Add ingridient</button>
            </form>
            <ul>
                {show}
            </ul>
        </>
    );
}

export default Main;