import Navbar from "../../Layouts/Navbar/Navbar"
import Banner from "../../components/Home/Banner/Banner"
import { HomeWrapper } from "./Home.styles"

const Home = () => {
  return (
    <HomeWrapper>
        <Navbar/>
        <Banner/>
    </HomeWrapper>
  )
}

export default Home