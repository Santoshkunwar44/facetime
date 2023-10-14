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
          <button className="dark">
            Try Now 
          </button>
          <button>
            Read More 
          </button>
        </div>
    </BannerWrapper>
  )
}

export default Banner