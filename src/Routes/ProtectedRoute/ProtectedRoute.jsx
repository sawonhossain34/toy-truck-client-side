import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    const {user} =useContext(AuthContext);
    const location = useLocation();

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to='/login' replace></Navigate>
    
};

export default ProtectedRoute;