import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Palabra del chef" />
      <h1 className="headtext__cormorant">En qué creemos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Creemos en la pasión por la excelencia culinaria y la hospitalidad.</p>
        </div>
        <p className="p__opensans">Valoramos la frescura de los ingredientes, la creatividad de nuestros chefs y la importancia de brindar experiencias gastronómicas únicas y memorables que celebren la vida y la comunidad. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Fundador</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
