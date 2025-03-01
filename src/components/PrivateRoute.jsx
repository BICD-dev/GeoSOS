import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import PropTypes from 'prop-types';
const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    if(loading) {
        return(
             <div className="mt-[80px]">Loading</div>
            );//Loading component will replace this
    } 
    // this will make it so that only the people with a helper's account can access the dashboard
    // no account has been created yet so we shall not assign this part
    // return user && (user.uid === "P3gMonrHNxSWr8vhx34WifCceM32" || user.uid === "duRndveHlGhOV1YcPQ0t8vYYwm63") ? children : navigate("/signin") ;
    
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;