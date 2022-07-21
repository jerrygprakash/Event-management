import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid, renderActionsCell } from '@mui/x-data-grid';
import axios from 'axios';
import Get from './getregister';

export default class DataGridDemo extends React.Component {
  
  custom_file_upload_url = `http://localhost:3003/indexevent`;

  constructor(props){
      super(props);
      this.state = {
          eventname : '',
          date:'',
          time:'',
          venue:'',
          duration:'',
          regstart:'',
          regclose:''
      }
  }

  geteventname = (e) => {
      let a = e.target.value;
      this.setState({eventname : a});
      
  }

  getdate = (e) => {
    let b = e.target.value;
    this.setState({date : b});
    
}

gettime = (e) => {
  let c = e.target.value;
  this.setState({time : c});
  
}

getvenue = (e) => {
let d = e.target.value;
this.setState({venue : d});

}

getduration = (e) => {
let f = e.target.value;
this.setState({duration : f});

}

getregstart = (e) => {
let g = e.target.value;
this.setState({regstart : g});

}

getregclose = (e) => {
let h = e.target.value;
this.setState({regclose : h});

}

  handleSubmitFile = () => {


          let formData = {'eventname' : this.state.eventname,'date': this.state.date,'time':this.state.time,
                          'venue': this.state.venue,'duration':this.state.duration,'regstart':this.state.regstart,
                            'regclose':this.state.regclose};

          axios.post(
             'http://localhost:3003/indexevent',
              formData,
             
          )
          .then(res => {
              console.log(`Success` + res.data);
          })
          .catch(err => {
              console.log(err);
          })
          alert("Submitted Successfully")
      
  }
  
  
  
  render(){
  return (

    <div>
    <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <h3 className="color1">ADMIN</h3>
    </div>
      <ul className="nav-links">
        
        {/* <li>
        <Link to="/dashboard">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">User List</span>
        </Link>
          
        </li> */}

        <li>
        <Link to="/galleryadmin">
            <i className='bx bx-box' ></i>
            <span className="links_name">Gallery</span>
        </Link>
        </li>
      
        <li>
          <Link to="/messageadmin">
            <i className='bx bx-message' ></i>
            <span className="links_name">Messages</span>
          </Link>
        </li>
        
        <li>
            <Link to="/datagrid">
            <i className='bx bx-heart' ></i>
            <span className="links_name">Event</span>
            </Link>
        </li>

        <li>
            <Link to="/formsupload">
            <i className='bx bx-heart' ></i>
            <span className="links_name">Forms Upload</span>
            </Link>
        </li>


         <li>

          {/* <Link to="">
            <i className='bx bx-cog' ></i>
            <span className="links_name">Setting</span>
          </Link> */}

        </li>

        <li className="log_out">
        <Link to="/home">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </Link>
        </li>
      </ul>
  </div>

  <div className="home-section">
    <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Dashboard</span>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div>
    </nav>
        <br/>
        <br/><br/>
    
        
  <div class="container">
    <h1>Register</h1>
    <hr/>


    <label for="email"><b>Event</b></label>
    <input type="text" placeholder="Event" onChange={this.geteventname}/>

    <label for="psw"><b>Date</b></label>
    <input type="text" placeholder="Date" onChange={this.getdate}/>

    <label for="psw-repeat"><b>Time</b></label>
    <input type="text" placeholder="Time" onChange={this.gettime}/>

    <label for="psw-repeat"><b>Venue</b></label>
    <input type="text" placeholder="Venue" onChange={this.getvenue}/>

    <label for="psw-repeat"><b>Duration</b></label>
    <input type="text" placeholder="hour" onChange={this.getduration}/>

    <label for="psw-repeat"><b>Registration Start</b></label>
    <input type="text" placeholder="Registration Start" onChange={this.getregstart}/>

    <label for="psw-repeat"><b>Registration End</b></label>
    <input type="text" placeholder="Registration End" onChange={this.getregclose}/>

    <hr/>

    
    <button type="submit" class="registerbtn" onClick={this.handleSubmitFile}>Create</button>
    
  </div>
  

 <br/>
 <br/>


            <Get/>
       
    






  </div> 



    </div>
  )
    }
}
