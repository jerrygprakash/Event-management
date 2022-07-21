import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  img from '../images/flag.jpeg';
import Getevent from "../logincomponents/getevent";




export default class Home extends React.Component {
   
  

    render(){
    return (

      <div>
       
      <div>
      <div className=" bg1 d-flex flex-row justify-content-between">

        <div>
        <img src={img} class="height"/>
        </div>

        <div>
        <h2 class="">TNEPWO</h2>
        </div>

        <img src={require("../images/flag.jpeg")} class="height"/>
    </div>

    </div>

    <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"><span class="d-flex align-items-center">&nbsp;TNEPWO</span></div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> <span>Welcome to Tamil Nadu Electricity Board Pensioner's Welfare Organization of Coimbatore</span>
                </marquee>
    </div>


    <div class="row">
      <div class="col-md-2 bg">
        <nav class="navbar">

          
          <ul class="navbar-nav d-flex flex-column bg">
            <li class="nav-item remove">
            <Link to ="/home"><a class="nav-link">HOME</a></Link>
            </li>
            <li class="nav-item">
            <Link to ="/event"><a class="nav-link" href="">EVENT</a></Link>
            </li>
            <li class="nav-item">
            <Link to ="/gallery"><a class="nav-link" href="">GALLERY</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">NEWS</a>
            </li>
            <li class="nav-item">
            <Link to ="/forms"><a class="nav-link" href="">FORMS</a></Link>
            </li>
            <br/><br/><br/><br/><br/>
            <li class="nav-item">
            <Link to ="/login"><a class="nav-link" href="">LOGIN</a></Link>
            </li>
              </ul>
             </nav>
          </div>
                  
                  
      <div class="col-md-10">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={require("../carosal/new1.jpg")} alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100"src={require("../carosal/new2.jpg")} alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require("../carosal/new3.jpg")} alt="Third slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={require("../carosal/new4.jpg")} alt="Four slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        
       
        
        <div>
          <br/>
        <h1>About Us</h1>
        <p>With a view to bring into existence a centrally controlled administered mechanism involving Pensioners Associations in the country, the Pensioners' Portal would function as a single window mechanism
            The  department  of Pension & Pensioners' <br/> Welfare  is  the nodal department  for  formulation of policies  relating  to pension & other retirement benefits of Central Government Pensioners/Family Pensioners. It also serves as a forum for redress of Pensioners' Grievances
        </p>
        </div>

  
        
   
      <br/>
      <br/>
      <br/>

              
          
            <div class="d-flex flex-row">
              {/* <img src="..." alt="..."/> */}
              <div class="caption">
                <h3>Upcomming Events</h3>
                <p><Getevent/></p>
                
              </div>
              <div class="caption margin">
                <h3>Thumbnail label</h3>
                <p>...</p>
                
              </div>
            </div>
    
      




      </div>














      

        </div>
  </div>

    );
 }

}  