import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Employee file number:</strong> {props.employee_file_number}
          </li>
          <li>
            <strong>Office:</strong> {props.office}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone Number:</strong> {props.phone_number}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
