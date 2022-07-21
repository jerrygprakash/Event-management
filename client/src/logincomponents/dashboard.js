import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Dashboard extends React.Component
{
    render(){

        return(
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
      
          </div>
            
  </div>
    
    

        );
    }

}
        






