import React from "react";
import {Link} from "react-router-dom";




export default class Gallery extends React.Component {
   
    render(){
    return (

      <div>
       
      <div>
      <div className=" bg1 d-flex flex-row justify-content-between">

        <div>
        <img src={require("../images/flag.jpeg")} class="height"/>
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
            <li class="nav-item">
            <Link to ="/home"><a class="nav-link">HOME</a></Link>
            </li>
            <li class="nav-item">
            <Link to ="/event"><a class="nav-link" href="">EVENT</a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">GALLERY</a>
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

      <div class="d-flex flex-column imagespace">

                    <div>
                    <img src={require("../images/3.jpeg")}/>     
                    </div>
                    <br/>
                    <br/>

                    <div>
                    <img src={require("../images/4.jpeg")}/>    
                    </div>
                    <br/>
                    <br/>

                    <div>
                    <img src={require("../images/5.jpeg")}/>    
                    </div>
                    <br/>
                    <br/>

                    <div>
                    <img src={require("../images/6.jpeg")}/>    
                    </div>

                    </div>

      </div>


        </div>
  </div>

    );
 }

}  