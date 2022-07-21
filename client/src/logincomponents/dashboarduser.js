import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Dashboarduser extends React.Component
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
        <Link to="/dashboarduser">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">Dashboard</span>
        </Link>
        </li>

        <li>
        <Link to="/galleryuser">
            <i className='bx bx-box' ></i>
            <span className="links_name">Gallery</span>
        </Link>
          
        </li>
      
        <li>
          <Link to="/datagriduser">
            <i className='bx bx-message' ></i>
            <span className="links_name">Event</span>
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
    </div>
    </div>
    
  
    
    

        );
    }

}
        






