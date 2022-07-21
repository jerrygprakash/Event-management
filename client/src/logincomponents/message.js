import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Message extends React.Component
{
    render(){

        return(
    <div>
    <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <h3 className="color1">USER</h3>
    </div>
      <ul className="nav-links">
        
        <li>
        <Link to="/dashboard">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
        </Link>
        </li>

        <li>
        <Link to="/gallery">
            <i className='bx bx-box' ></i>
            <span className="links_name">Gallery</span>
        </Link>
          
        </li>
      
        <li>
          <Link to="/message">
            <i className='bx bx-message' ></i>
            <span className="links_name">Messages</span>
          </Link>
          
        </li>
        
        <li>
            <Link to="/profile">
            <i className='bx bx-heart' ></i>
            <span className="links_name">Profile</span>
            </Link>
        </li>

         {/* <li>
          <a href="#">
            <i className='bx bx-cog' ></i>
            <span className="links_name">Setting</span>
          </a>

        </li> */}
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
        <div className='align'>
              <br/>
              <br/>
               <br/>
              <br/>
              Name:<br/>
                <input type="text" name="name"/><br/>
                E-mail:<br/>
                <input type="text" name="mail"/><br/>
                Comment:<br/>
                <input type="text" name="comment" size="50" height="100"/><br/><br/>
                <input type="button" value="Send"/>
                <input type="button" value="Reset" /> 
          </div>

  </div> 




      
  



    </div>
    
  
    
    

        );
    }

}
        






