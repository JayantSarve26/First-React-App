import "./Home.css"
import Navbar from "./../../Components/Navbar/Navbar"
import Footer from "./../../Components/Footer/Footer"

export default function Home(){
     
    return(
        <div className="Home-Container">
            <Navbar />
            <h1>Home</h1>
            <Footer />
        </div>
    );
}
