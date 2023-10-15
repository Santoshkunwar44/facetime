import { Link } from 'react-router-dom'
import { NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to={"/"}>
      
      <h1 className='appName'>
            faceTime
            
        </h1>
      </Link>  
        <div className="navRight">

            <div className="navLinks">
                <p>Pricing</p>
                <p>About</p>
                <p>Features</p>
            </div>

        <div className="navButton">
         
          <Link to={"/auth"}>
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