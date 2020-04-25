import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Sorting from "./components/Sorting";
import Filter from "./components/Filter";
import employees from "./employee.json";
import Header from "./components/header";

class App extends Component {
  state = {
    employees: employees,
    newemployees: employees,
  };
  submit = (event) => {
    if (event.target.value === "None") {
      window.location.reload(true);
    }
    const newemployees = this.state.employees.sort(propComparator(event.target.value));

    function propComparator(prop) {
      return (a, b) => {
        if (a[prop] < b[prop]) {
          return -1;
        }
        if (a[prop] > b[prop]) {
          return 1;
        }
        return 0;
      }
    }
    this.setState({ newemployees });
  }
  filterByProperties = (event) => {
    if (event.target.value === "None") {
      window.location.reload(true);
    }
    const newemployees = this.state.employees.filter(employees => employees.occupation === event.target.value);
    this.setState({ newemployees });
  };
  render() {
    return (
      <Wrapper>
        <Title>Employee Profiles</Title>
        <Header>Sorting</Header>
        <Sorting
          submit={this.submit}
        />
        <Header>Filtering By Occupation</Header>
        <Filter
          filterByProperties={this.filterByProperties}
        />
        {this.state.newemployees.map(employees => (
          <EmployeeCard
            key={employees.id}
            id={employees.id}
            name={employees.name}
            age={employees.age}
            occupation={employees.occupation}
            employee_file_number={employees.employee_file_number}
            office={employees.office}
            email={employees.email}
            phone_number={employees.phone_number}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
