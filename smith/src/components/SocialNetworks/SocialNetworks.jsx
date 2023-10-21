import whatsapp from "/img/whatsapp.png"
import instagram from "/img/instagram.png"
import facebook from "/img/facebook.png"
import googlemaps from "/img/alfiler.png"
import "./SocialNetwork.css"


const SocialNetworks = () => {
    return (
        <footer className="footeR">
            <div className="redes">
                <a title="WhatsApp" href="https://web.whatsapp.com/"target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="WhatsApp" /></a>
                <a title="Instagram" href="https://www.instagram.com/morioh.manga.castelar/?hl=es" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
                <a title="Facebook" href="https://www.facebook.com/profile.php?id=100072437049160"target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
                <a title="Google Maps" href="https://www.google.com/maps/place/Morioh+-+Manga/@-34.6538122,-58.6422249,15z/data=!4m5!3m4!1s0x0:0x4b34f93cf4a0e4f4!8m2!3d-34.6538121!4d-58.6422249"target="_blank" rel="noopener noreferrer"><img src={googlemaps} alt="Google Maps" /></a>
            </div>
        </footer>
    )
}

export default SocialNetworks