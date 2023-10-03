import "./Home.css"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"
import Imageback from "./home.jpg"

export default function Home(){
     
    return(
        <div className="Home-Container">
            <Navbar />
            <h1> This is a Home Page</h1>
            <img src={Imageback} className="bckg-img"/>
            <Footer />
        </div>
    );
}
