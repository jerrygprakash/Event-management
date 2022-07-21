import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Profile extends React.Component
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
        <Link to="/login">
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
    <br/>
    <br/>
    <br/>

    <div class="wrapper d-flex flex-row justify-content-center">
        
        <img src="" alt="" class="image--cover"/>
        
    </div>

    <div>
            <div class="d-flex flex-row justify-content-center">
                <label class="margin1">Name</label><input class="margin1"/>
                <label class="margin1">Age</label><input class="margin1"/>
                <label  class="margin1">Address</label><input class="margin1"/>
            </div>

            <br/><br/>

            <div class="d-flex flex-row justify-content-center">
                <label class="margin1">State</label><input class="margin1"/>
                <label class="margin1">city</label><input class="margin1"/>
                <label  class="margin1">Email</label><input class="margin1"/>
            </div>

            <br/><br/>

            <div class="d-flex flex-row justify-content-center">
                <input type="button" value="Save Profile" class="btn-primary"/>
            </div>
            </div>

  </div> 

 
            





    </div>
    
  
    
    

        );
    }

}
        






