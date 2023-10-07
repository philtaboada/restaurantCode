import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Nosotros</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">En nuestro restaurante, celebramos la pasión por la buena comida y el arte culinario excepcional.</p>
        <button type="button" className="custom__button">Conoce Mas</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nuestra Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Nuestra historia se teje entre platos exquisitos y sonrisas compartidas, creando momentos especiales que perduran en el tiempo.</p>
        <button type="button" className="custom__button">Conoce Mas</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
