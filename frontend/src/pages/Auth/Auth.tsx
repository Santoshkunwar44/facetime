import { AuthWrapper } from "./Auth.styles"
import {MdFace2} from "react-icons/md"
import UserReview from "../../components/Dashboard/Auth/UsersReview/UserReview";
import { Outlet, useLocation } from "react-router-dom";
const Auth = () => {
 const isLogin = useLocation().pathname.split("/")[2]==="login"

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
                  {
                    isLogin ? <>
                        <h1> Continue </h1>
                    <h1>From Where  </h1>
                    <h1>You Left !</h1>
                    </>:
                    <>
                       <h1> Let's Setup  </h1>
                    <h1>FaceTime  Profile   </h1>
                    </>
                  }  
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

