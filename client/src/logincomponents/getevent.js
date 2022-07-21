import React from 'react';
import axios from 'axios';



export default class Getevent extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        data: []
     }
  }

componentDidMount() {
   axios.get('http://localhost:4001/event')
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
      {/* <th scope="col">Event_ID</th> */}
      <th scope="col">Event Name</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Venue</th>
      <th scope="col">Duration</th>
      <th scope="col">Registration Starts</th>
      <th scope="col">Registration Close</th>
    </tr>
  </thead>
  <tbody>

  {Array.isArray(data) && data.map(object => (
    <tr>
          {/* <td>{object.event_id}</td> */}
          <td>{object.eventname}</td>
          <td>{object.date}</td>
          <td>{object.time}</td>
          <td>{object.venue}</td>
          <td>{object.duration}</td>
          <td>{object.regstart}</td>
          <td>{object.regclose}</td>
        
    </tr>
  ))}
  </tbody>
</table>


  </div>
}

}