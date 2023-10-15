import { LoginWrapper } from "./Login.styles"

const Login = () => {
  return (
    <LoginWrapper>

        <div className="header">
            <h1 className="headerText">Continue from where you left </h1>
        </div>
        <div className="loginInputBoxWrapper">
            <div className="inputBox">

                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder="johndoe@gmail.com" />

            </div>
             <div className="inputBox">

                <label htmlFor="">Password</label>
                <input type="email" name="" id="" placeholder="************" />

            </div>

        </div>
        <button className="loginButton">
            Continue to faceTime
        </button>
            <p className="forgotPasswordText">Forgot password ?</p>
    </LoginWrapper>
  )
}

export default Login