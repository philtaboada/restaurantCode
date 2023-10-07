import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import FooterOverlay from '../../components/Footer/FooterOverlay';
import Newsletter from '../../components/Footer/Newsletter';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctano</h1>
        <p className="p__opensans">AV DIEZ CANSECO  # 245 LIMA - PERÚ</p>
        <p className="p__opensans">+1 212-344-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor manera de encontrarte a ti mismo es perderte en el servicio a los demás.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">TRABAJAMOS</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sábados-Domingos:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
