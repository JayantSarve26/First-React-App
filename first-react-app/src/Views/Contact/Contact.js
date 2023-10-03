import "./Contact.css"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"
import Imageback from "./contact.jpg"

export default function Contact(){
     
    return(
        <div className="Contact-Container">
            <Navbar />
            <h1>Contact</h1>
            <img src={Imageback} className="bckg-img"/>
            <Footer />
        </div>
    );
}
