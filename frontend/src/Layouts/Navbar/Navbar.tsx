import { Link } from 'react-router-dom'
import { NavbarWrapper } from './Navbar.styles'
import { MdFace2 } from 'react-icons/md'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to={"/"}>
      <div className="logoBox">
        <MdFace2/>
      <h1 className='appName'>
            faceTime
            
        </h1>
      </div>
      </Link>  
        <div className="navRight">

            {/* <div className="navLinks">
                <p>Pricing</p>
                <p>About</p>
                <p>Features</p>
            </div> */}

        <div className="navButton">
         <button className='freeCreditBtn'>
          25 min Free credit
         </button>
          <Link to={"/authenticate/login"}>
            <button >
                Sign in
            </button>
            
          </Link>
        </div>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar