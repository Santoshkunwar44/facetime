import { AuthWrapper } from "./Auth.styles"
import {MdFace2} from "react-icons/md"
import UserReview from "../../components/Dashboard/Auth/UsersReview/UserReview";
import { Outlet } from "react-router-dom";
const Auth = () => {
 
  return (
    <AuthWrapper>
    <div className="authContainer">
        <div className="sideContent">
                <div className="headerBox">

                    <div className="logoBox">
                        <MdFace2/>
                        <h1>faceTime</h1>
                    </div>


                </div>
                <div className="mainSidebarContent">
                 <div className="bigText">
                    <h1> Continue </h1>
                    <h1>From Where  </h1>
                    <h1>You Left !</h1>
                 </div>
                 <p className="mainDesc">
                    Create account with faceTime and enjoyy the 25 min credit just after registering . We provide effective video calling solutions
                 </p>
                </div>
                <UserReview/>
        </div>
        <div className="mainContent">
            <Outlet/>
        </div>
    </div>
    </AuthWrapper>
  )
}

export default Auth;


const SignupTab =()=>{
    return <>
    <div className="inputBox">
            <input type="text" name="text" placeholder="username" />
            </div>    
    <div className="inputBox">
            <input type="text" name="email" placeholder="email address" />
            </div>    
        <div className="inputBox">
            <input type="password" name="password" placeholder="password" />
        </div>
           <div className="inputBox">
            <input type="password" name="confirmPassword" placeholder="confirm password" />
        </div>
        <button className="getInButton">LOGIN</button>
    </>
}



const LoginTab =()=>{
    return <>
        <div className="inputBox">
            <input type="text" name="email" placeholder="email address" />
            </div>    
        <div className="inputBox">
            <input type="password" name="password" placeholder="password" />
        </div>
        <button className="getInButton">LOGIN</button>
    </>
}
