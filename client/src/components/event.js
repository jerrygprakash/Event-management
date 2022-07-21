import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";




export default class Gallery extends React.Component {


  custom_file_upload_url = `http://localhost:3002/registration`;

  constructor(props){
      super(props);
      this.state = {
          name : '',
          address:'',
          city:'',
          mobilenumber:'',
          states:'',
          zip:''
          
      }
  }

  getname = (e) => {
      let a = e.target.value;
      this.setState({name : a});
      
  }

  getaddress = (e) => {
    let b = e.target.value;
    this.setState({address : b});
    
}

getcity = (e) => {
  let c = e.target.value;
  this.setState({city : c});
  
}

getmobilenumber = (e) => {
let d = e.target.value;
this.setState({mobilenumber : d});

}

getstates = (e) => {
let f = e.target.value;
this.setState({states : f});

}

// getregstart = (e) => {
// let g = e.target.value;
// this.setState({regstart : g});

// }

getzip = (e) => {
let h = e.target.value;
this.setState({zip : h});

}

  handleSubmitFile = () => {


          let formData = {'name' : this.state.name,'address': this.state.address,'city':this.state.city,
                          'mobilenumber': this.state.mobilenumber,'states':this.state.states,'zip':this.state.zip
                           };

          axios.post(
             'http://localhost:3002/registration',
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
    
      <div class="col-md-10 form">


               <form>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="inputEmail4">Name</label>
                      <input type="text" class="form-control" placeholder="Name" onChange={this.getname}/>
                    </div>
                  </div>


                  <div class="form-row">
                    <div class="form-group">
                      <label for="inputEmail4">Address</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange={this.getaddress}/>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputAddress">City</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="City" onChange={this.getcity}/>
                  </div>

                  <div class="form-group">
                    <label for="inputAddress2">Mobile number</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Mobile Number" onChange={this.getmobilenumber}/>
                  </div>

                  <div class="form-row">
                    
                    <div class="form-group mar ">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control" onChange={this.getstates}>
                        <option>Choose...</option>
                        <option>Tamil Nadu</option>
                        <option>Karnataka</option>
                        <option>Andra Pradesh</option>
                        <option>Telungana</option>
                        <option>Mumbai</option>
                      </select>
                    </div>

                    <div class="form-group mar">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip" onChange={this.getzip}/>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck"/>
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary" onClick={this.handleSubmitFile}>Submit</button>

              </form>


      </div>





        </div>
  </div>

    );
 }


}  


























































































































// import React from "react";
// import {Link} from "react-router-dom";




// export default class Event extends React.Component {
   
//     render(){
//     return (

//         <div>

// <div>
      
//       <div class=" bg1 d-flex flex-row justify-content-between">

//         <div>
//         <img src={require("../images/flag.jpeg")} class="height"/>
//         </div>

//         <div>
//         <h2 class="">TNEPWO</h2>
//         </div>

//         <img src={require("../images/flag.jpeg")} class="height"/>
//     </div>

    

//     </div>

//     <div class="row">
//       <div class="col-2 bg">
//         <nav class="navbar">

          
//           <ul class="navbar-nav d-flex flex-column ">
//             <li class="nav-item">
//               <Link to = "/home"><a class="nav-link">HOME</a></Link>
//             </li>
//             <li class="nav-item">
//               <Link to ="/event"><a class="nav-link">EVENT</a></Link>
//             </li>
//             <li class="nav-item">
//             <Link to ="/gallery"><a class="nav-link">GALLERY</a></Link>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="https://tangedco.blogspot.com/">NEWS</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="files.html">FORMS</a>
//             </li>
//           </ul>
        
//         </nav>
//       </div>


   
//       <div class="col-10 form bg2">
      //   <form>

      //   <div class="form-row">
      //     <div class="form-group">
      //       <label for="inputEmail4">Name</label>
      //       <input type="email" class="form-control" id="inputEmail4" placeholder="Name"/>
      //     </div>
      //   </div>


      //   <div class="form-row">
      //     <div class="form-group">
      //       <label for="inputEmail4">Email</label>
      //       <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
      //     </div>
      //   </div>

      //   <div class="form-group">
      //     <label for="inputAddress">Address</label>
      //     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
      //   </div>

      //   <div class="form-group">
      //     <label for="inputAddress2">Address 2</label>
      //     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
      //   </div>

      //   <div class="form-row">
      //     <div class="form-group">
      //       <label for="inputCity">City</label>
      //       <input type="text" class="form-control" id="inputCity"/>
      //     </div>

      //     <div class="form-group mar">
      //       <label for="inputState">State</label>
      //       <select id="inputState" class="form-control">
      //         <option selected>Choose...</option>
      //         <option>...</option>
      //       </select>
      //     </div>

      //     <div class="form-group mar">
      //       <label for="inputZip">Zip</label>
      //       <input type="text" class="form-control" id="inputZip"/>
      //     </div>
      //   </div>

      //   <div class="form-group">
      //     <div class="form-check">
      //       <input class="form-check-input" type="checkbox" id="gridCheck"/>
      //       <label class="form-check-label" for="gridCheck">
      //         Check me out
      //       </label>
      //     </div>
      //   </div>

      //   <button type="submit" class="btn btn-primary ">Submit</button>
      
      // </form>
//       </div>


//         </div>

//     </div>

//     );
//  }

// }  