import banner from "./assets/banner2.jpg"
import "./styles.css"

const Banner = () => {
    return(
        <div>
            <img src = {banner} alt="banner" className = "banner"/>
        </div>
    )
}

export default Banner