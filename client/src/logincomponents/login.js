import Axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class Login extends React.Component
{

    state = {
        username : "",
        password : ""
      };
    
      getusername=(Event)=>{
        this.setState({username:Event.target.value});
        console.log(this.state.username);
      }
    
      getpassword=(Event)=>{
        this.setState({password:Event.target.value});
        console.log(this.state.password);
      }
    
      login(){
        const datastring = {
          username : this.state.username,
          password : this.state.password
        }
    
        Axios.post("http://localhost:3000/login", datastring).then((response) => {

        let a = response.data.status;
        let b = response.data.role; 
        
        alert(a);
        alert(b);
        
        if (a == 'pass' && b == 'admin'){
            
            window.open('/dashboard','_self');
        }

        if (a == 'pass' && b == 'staff'){
            
            window.open('/dashboarduser','_self');
            
        }
        });
      
    }

    //   render(){
    
    //     return(
    //       <div>
    //         <input type="text" onChange={this.getusername} />
    //         <input type="password" onChange={this.getpassword} />
    //         <input type="button" onClick={this.login.bind(this)}  value="Login" />
    //       </div>
    render(){

        return(

    <div class="container login-container padding">
        <div class="row">
            <div class="col-md-12 login-form-1 bg-primary padding">
                <h3>Login</h3>
                <form>
                    <div class="form-group padding">
                        <input type="text" class="form-control" placeholder="Your Email *" onChange={this.getusername}/>
                    </div>
                    <div class="form-group padding">
                        <input type="password" class="form-control" placeholder="Your Password *" onChange={this.getpassword}  />
                    </div>
                    
                    <div class="form-group padding">
                <input type="button" class="btnSubmit btnradius w-30" value="Login" onClick={this.login.bind(this)}/>
                <Link to="/home"><input type="button" class="btnSubmit btnradius w-30 gap" value="back"/></Link>
                    </div>

                    
            
                </form>
            </div>
            
        </div>
    </div>

        );
    }

}
