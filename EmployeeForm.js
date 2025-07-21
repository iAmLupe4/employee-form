 import React from 'react'; 

 

class EmployeeForm extends React.Component { 

  constructor(props) { 

    super(props); 

    this.state = { 

      name: '', 

      email: '', 

      title: '', 

      department: '' 

    }; 

  } 

 

  handleChange = (event) => { 

    const { name, value } = event.target; 

    this.setState({ [name]: value }); 

  }; 

 

  handleSubmit = (event) => { 

    event.preventDefault(); 

    console.log('Form Submitted:', this.state); 

    // Optionally reset form: 

    // this.setState({ name: '', email: '', title: '', department: '' }); 

  }; 

 

  render() { 

    return ( 

      <div> 

        <h2>Employee Form</h2> 

        <form onSubmit={this.handleSubmit}> 

          <div> 

            <label>Name:</label> 

            <input 

              type="text" 

              name="name" 

              value={this.state.name} 

              onChange={this.handleChange} 

              placeholder="Enter name" 

              required 

            /> 

          </div> 

 

          <div> 

            <label>Email:</label> 

            <input 

              type="email" 

              name="email" 

              value={this.state.email} 

              onChange={this.handleChange} 

              placeholder="Enter email" 

              required 

            /> 

          </div> 

 

          <div> 

            <label>Job Title:</label> 

            <input 

              type="text" 

              name="title" 

              value={this.state.title} 

              onChange={this.handleChange} 

              placeholder="Enter job title" 

            /> 

          </div> 

 

          <div> 

            <label>Department:</label> 

            <input 

              type="text" 

              name="department" 

              value={this.state.department} 

              onChange={this.handleChange} 

              placeholder="Enter department" 

            /> 

          </div> 

 

          <button type="submit">Submit</button> 

        </form> 

      </div> 

    ); 

  } 

} 

 

export default EmployeeForm; 