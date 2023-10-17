import { Link } from "react-router-dom"
import { SignupWrapper } from "./Signup.styles"

const Signup = () => {
  return (
    <SignupWrapper>
        <div className="header">
                <h1 className="headerText">Lets get started</h1>
        </div>
        <div className="signupInpuBoxWrapper">
            <div className="dualInputBox">
                <div className="inputItem">
                    <label htmlFor="">FirstName</label>
                    <input type="text" name="" id="" placeholder="John " />
                </div>
                  <div className="inputItem">
                    <label htmlFor="">LastName</label>
                    <input type="text" name="" id=""   placeholder="doe"/>
                </div>
            </div>
             
                  <div className="inputItem">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="" placeholder="johndoe@gmail.com" />
            </div>
            
              <div className="dualInputBox">
                <div className="inputItem">
                    <label htmlFor="">Country</label>
                    <select name="" id="">
                        <option value="">America</option>
                    </select>
                </div>
                  <div className="inputItem">
                    <label htmlFor="">State</label>
                    <select name="" id="">
                        <option value="">California</option>
                    </select>
                </div>
            </div>
             <div className="inputItem">
                    <label htmlFor="">Country</label>
                    <input type="password" name="" id="" placeholder="password" />
                </div>
        </div>
        <button className="getStartedButton">Get Started</button>
        <Link to={"/authenticate/login"}>
        
         <p className="bottomText">Already have account ?</p>
        </Link>
    </SignupWrapper>
  )
}

export default Signup