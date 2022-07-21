import './App.css';
import ReactDOM from "react-dom/client";
import Home from './components/home';
import Event from './components/event';
import Gallery from './components/gallery';
import Forms from './components/forms';
import Login from './logincomponents/login';
import Dashboard from './logincomponents/dashboard';
import Dashboarduser from './logincomponents/dashboarduser';
import Datagrid from './logincomponents/datagrid';
import Datagriduser from './logincomponents/datagriduser';
import Gallerydashuser from './logincomponents/galleryuser';
import Gallerydashadmin from './logincomponents/galleryadmin';
import Messageadmin from './logincomponents/messageadmin';
import Message from './logincomponents/message';
import Formupload from './logincomponents/formsupload'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import Private from './components/private';


export default function App() {
 
  return (
   
    <div>
      <BrowserRouter>
      <Routes>


         {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} /> 
        </Route> */}

        
        <Route path="/" element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/event" element = {<Event/>} />
        <Route path="/gallery" element = {<Gallery/>}/>
        <Route path="/forms" element = {<Forms/>}/>
        <Route path="/login" element = {<Login/>}/>
        {/* <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/dashboarduser" element = {<Dashboarduser/>}/> */}
        <Route path="/datagrid" element = {<Datagrid/>}/>
        <Route path="/datagriduser" element = {<Datagriduser/>}/>
        <Route path="/galleryuser" element = {<Gallerydashuser/>}/>
        <Route path="/galleryadmin" element = {<Gallerydashadmin/>}/>
         {/* <Route path="/message" element = {<Message/>}/> */}
         <Route path="/messageadmin" element = {<Messageadmin/>}/>
         <Route path="/formsupload" element = {<Formupload/>}/>
         

          {/* <Route element={<Private isLogged={false}/>}> */}

         <Route path="/dashboard" element = {<Dashboard/>}/>
        <Route path="/dashboarduser" element = {<Dashboarduser/>}/>

         {/* </Route> */}

         



          
         
    

        
        
        
          
        
        
        

      </Routes>
    </BrowserRouter>

     </div>
    
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);