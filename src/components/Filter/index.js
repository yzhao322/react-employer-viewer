import React from "react";
import "./style.css";

function Filter(props) {
    return (
        <select onChange={props.filterByProperties}>
             <option value="None">None</option>
            <option onClick={props.clearstate} value="Manager">Manager</option>
            <option onClick={props.clearstate} value="Engineer">Engineer</option>
           <option value="Sales">Sales</option>
           <option value="Intern">Intern</option>
           </select>
    )
}
  
  export default Filter;