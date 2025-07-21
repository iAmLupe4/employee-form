import React, { useState, useEffect } from 'react'; 

 

function App() { 

  const [employees, setEmployees] = useState([]); 

 

  // Load employees from local storage on first render 

  useEffect(() => { 

    const storedEmployees = localStorage.getItem("employees"); 

    if (storedEmployees) { 

      setEmployees(JSON.parse(storedEmployees)); 

    } 

  }, []); 

 

  // Add multiple employees 

  const addEmployees = () => { 

    const newEmployees = [ 

      { name: "John Doe", position: "Developer" }, 

      { name: "Jane Smith", position: "Designer" }, 

      { name: "Carlos Rivera", position: "Product Manager" }, 

      { name: "Tina Patel", position: "QA Engineer" }, 

    ]; 

 

    const updatedEmployees = [...employees, ...newEmployees]; 

    setEmployees(updatedEmployees); 

  }; 

 

  // Save to local storage 

  const saveData = () => { 

    localStorage.setItem("employees", JSON.stringify(employees)); 

  }; 

 

  return ( 

    <div> 

      <h1>Employee List</h1> 

 

      <button onClick={addEmployees}>Add Employees</button> 

      <button onClick={saveData}>Save to Local Storage</button> 

 

      <ul> 

        {employees.map((emp, index) => ( 

          <li key={index}> 

            {emp.name} - {emp.position} 

          </li> 

        ))} 

      </ul> 

    </div> 

  ); 

} 

 

export default App; 
 