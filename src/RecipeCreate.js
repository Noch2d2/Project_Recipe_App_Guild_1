import React, { useState } from "react";

function RecipeCreate({addFn}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:""
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event)=>{
    event.preventDefault();
    addFn(formState);
    setFormState(initialFormState);
  };

  const handleChange = ({target}) =>{
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" placeholder="Name" value={formState.name} onChange={handleChange}/>
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" value={formState.cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input type="url" name="photo" placeholder="URL" value={formState.photo} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" value={formState.ingredients} onChange={handleChange}/>
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" value={formState.preparation} onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
