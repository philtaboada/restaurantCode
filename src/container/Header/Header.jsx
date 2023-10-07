//import { SubHeading } from '../../components';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Busca el nuevo sabor." />
      <h1 className="app__header-h1">La clave de la alta cocina.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Descubre la esencia de la alta cocina en cada plato, una experiencia gastronómica inolvidable. </p>
      <button type="button" className="custom__button">Explora el Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
