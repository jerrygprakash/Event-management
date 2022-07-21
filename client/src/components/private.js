import { Navigate,Outlet } from "react-router-dom";

function Private({isLogged}){
    return isLogged ?<Outlet/>:<Navigate to="/home"/>


}

export default Private;