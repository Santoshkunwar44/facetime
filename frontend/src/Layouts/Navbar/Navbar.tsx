import { NavbarWrapper } from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarWrapper>
        <h1 className='appName'>
            faceTime
        </h1>
        <div className="navRight">

            <div className="navLinks">
                <p>Pricing</p>
                <p>About</p>
                <p>Features</p>
            </div>

        <div className="navButton">
         
            <button>
                Sign in
            </button>
            
        </div>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar