import React from "react";
import {Link} from "react-router-dom";




export default class Forms extends React.Component {
   
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

      <div class="d-flex flex-column imagespace">

      <div>
        <p>Claim For REIMBURSEMENT</p><a href={require("../pdf/CLAIM FOR REIMBURSEMENT UNDER THE TANGEDCO PENSIONERS covid.pdf")}>click here</a>
        </div>
        <br/>
        <br/>
        <div>
        <p>NHIS Form</p><a href={require("../pdf/NHIS.pdf")}>click here</a>
        </div>
        <br/>
        <br/>
        <div>
        <p>TNEPWO Form</p><a href={require("../pdf/TNEPWO Cell No kovai.pdf")}>click here</a>
        </div>
        <br/>
        <br/>
        <div>
        <p>Insurance Form</p><a href={require("../pdf/insurance.pdf")}>click here</a>
        </div>
        <br/>
        <br/>
        <div>
        <p>Family sec fun final</p><a href={require("../pdf/Famliy sec fund final.pdf")}>click here</a>
        </div>
        <br/>
        <br/>
        <div>
        <p>District Rules</p><a href={require("../pdf/district rules.pdf")}>click here</a>
        </div>
    
        </div>

      </div>


        </div>
  </div>

    );
 }

}  











































































































{/* <div>
  <!-- head div -->
  <div class=" bg1 d-flex flex-row justify-content-between">

    <div>
    <img src="flag.jpeg" class="height">
    </div>

    <div>
    <h2 class="">TNEPWO</h2>
    </div>

    <img src="flag.jpeg" class="height">
</div>

<!-- head div end -->


<!-- navbar start -->
<div class="row">
  <div class="col-md-4 bg">
    <nav class="navbar">

      <!-- Links -->
      <ul class="navbar-nav d-flex flex-column bg">
        <li class="nav-item">
          <a class="nav-link" href="tneb.html">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="form.html">EVENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="gallery.html">GALLERY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://tangedco.blogspot.com/">NEWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="files.html">FORMS</a>
        </li>
      </ul>
    </nav>
  </div>
<!-- navbar end -->

<!-- carosal start -->
  <div class="col-md-8">

    <div class=" d-flex flex-column dbtnheight">

        <div>
        <p>Claim For REIMBURSEMENT</p><a href="./pdf/CLAIM FOR REIMBURSEMENT UNDER THE TANGEDCO PENSIONERS covid.pdf">click here</a>
        </div>
        <br>
        <br>
        <div>
        <p>NHIS Form</p><a href="./pdf/NHIS.pdf">click here</a>
        </div>
        <br>
        <br>
        <div>
        <p>TNEPWO Form</p><a href="./pdf/TNEPWO Cell No kovai.pdf">click here</a>
        </div>
        <br>
        <br>
        <div>
        <p>Insurance Form</p><a href="./pdf/insurance.pdf">click here</a>
        </div>
        <br>
        <br>
        <div>
        <p>Family sec fun final</p><a href="./pdf/Famliy sec fund final.pdf">click here</a>
        </div>
        <br>
        <br>
        <div>
        <p>District Rules</p><a href="./pdf/district rules.pdf">click here</a>
        </div>
    
        </div>

  </div>
    <!-- carosal end -->
   
</div> */}