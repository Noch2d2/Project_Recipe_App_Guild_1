import React from "react"

export default function Recipe({index, details, deleteFn}){

return (<tr key={index}>
      <td>
        <p>{details.name}</p>
      </td>
      <td>
        <p>{details.cuisine}</p>
      </td>
      <td>
        <img src={details.photo} alt="The Prepared Recipe"/>
      </td>
      <td className="content_td">
        <p >{details.ingredients}</p>
      </td>
      <td className="content_td">
        <p >{details.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={()=>deleteFn(index)}>Delete</button>
      </td>
    </tr>
)
}