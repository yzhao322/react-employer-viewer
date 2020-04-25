import React from "react";
import "./style.css";

function Sorting(props) {
    return (
        <select onChange={props.submit}>
             <option value="None">None</option>
            <option value="name">Sort By Name</option>
            <option value="age">Sort By Age</option>
           <option value="employee_file_number">Sort By Employee File Number</option>
           <option value="office">Sort By Office Number</option>
           </select>
    )
}
  
  export default Sorting;