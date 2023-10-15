import { Link } from "react-router-dom"
import { BannerWrapper } from "./Banner.styles"

const Banner = () => {
  return (
    <BannerWrapper>
        <div className="bannerBigText">

        <h1>Adding Value </h1>
        <h1>Through Video Calls</h1>
        </div>
        <div>
            <p className="bannerDesc">Audio And video call with your loving ones 25 minutes call credit . <br />We offer interactive video calls</p>
        </div>
        <div className="buttonWrapper">
          <Link to={"/dashboard"}>
          <button className="dark">
            Try Now 
          </button>
          </Link>
          <button>
            Read More 
          </button>
        </div>
    </BannerWrapper>
  )
}

export default Banner