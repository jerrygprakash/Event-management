import React,{useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

function Gallery() {

  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
});

const handleInputChange = (event) => {
    setuserInfo({
    ...userInfo,
    file:event.target.files[0],
    filepreview:URL.createObjectURL(event.target.files[0]),
    });
}
const [isSucces, setSuccess] = useState(null);
const submit = async () =>{
    const formdata = new FormData() 
    formdata.append('avatar', userInfo.file);
    axios.post("http://localhost:8080/imageupload", formdata,{   
        headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
        console.warn(res);
        if(res.data.success === 1){
            setSuccess("Image upload successfully")
        }


    })

}
  
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
            
        <br/><br/><br/><br/>
        
          <div className="container mr-60">
      <h3 className="text-white"><span></span> </h3>

      <div className="formdesign">
      {isSucces !== null ? <h4> {isSucces} </h4> :null }
        <div className="form-row">
          <label className="text-Black">Select File :</label></div>
          <br/>

          <select>
        
            <option value="carosal">carosal</option>
            <option value="images">images</option>
           
          </select>

          <br/><br/>
          
          <div>
          <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
        </div>
        <br/>
        <div className="form-row">
          <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Save </button>
          
        </div>
      </div>
      
      {/* {userInfo.filepreview !== null ? 
        <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
      : null} */}

    </div>
      
    </div>
            


    
    </div>

  );
}

export default Gallery;