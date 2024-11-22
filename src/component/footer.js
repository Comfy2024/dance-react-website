import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {

    return (

        <>
            <section>
                <footer>
                    <div className="footerSocial">
                        <h3>We are social</h3>
                        <div className="socialIcons">
                            <a href="#">
                                <span className="icon-container">
                                    <FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook-f" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="icon-container">
                                    <FontAwesomeIcon icon={faTwitter} className="fa-brands fa-x-twitter" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="icon-container">
                                    <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
                                </span>
                            </a>
                            <a href="#">
                                <span className="icon-container">
                                    <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <p></p>
                    <hr />
                    <p />
                    <p>© 2024 Imomotimi Foundation. All Rights Reserved.</p>
                    <div>
                        <a href="#" className="arrow">
                            <FontAwesomeIcon icon={faArrowUp} className="fa-solid fa-arrow-up" />
                        </a>
                    </div>
                </footer>
            </section>

        </>
    )
}
export default Footer;