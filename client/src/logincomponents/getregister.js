import React from 'react';
import axios from 'axios';



export default class Get extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:4000/employees')
     .then(response => {
         if (response.status === 200 && response != null) {
           this.setState({
                data: response.data
           });
    } else {
      console.log('problem');
    }
})
.catch(error => {
   console.log(error);
});
}

render(){
  const { data } = this.state;
  return <div>
  

  <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">City</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>

  {Array.isArray(data) && data.map(object => (
    <tr>
          <td>{object.registration_id}</td>
          <td>{object.name}</td>
          <td>{object.address}</td>
          <td>{object.city}</td>
          <td>{object.mobilenumber}</td>
          <td>{object.state}</td>
          <td>{object.zip}</td>
        
    </tr>
  ))}
  </tbody>
</table>


  </div>
}

}