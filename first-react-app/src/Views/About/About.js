import "./About.css"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"
import Imageback from "./about.jpg"

export default function About(){
     
    return(
        <div className="About-Container"> 
        <Navbar/>
            <h1>About</h1>
            <img src={Imageback} className="bckg-img"/>
        <Footer />
        </div>
    );
}
