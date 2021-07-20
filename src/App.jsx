import imgMainPage from "./images/desktop/image-header.jpg";
import imgEgg from "./images/desktop/image-transform.jpg";
import ImgStandOut from "./images/desktop/image-stand-out.jpg";
import ClientTestimonials from "./components/ClientTestemonials";
import RowBottom from './components/RowBottom/RowBottom';
import FaceBook from './images/icon-facebook.svg';
import Instagram from './images/icon-instagram.svg';
import Twitter from './images/icon-twitter.svg';
import Pinterest from './images/icon-pinterest.svg';
import ArrowDown from './images/icon-arrow-down.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="title-navigation">
          <h1 className="title-sunnyside">sunnyside</h1>
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#" >Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><input className="btn-contact" type="buttom" value="Contact" /></li>
            </ul>
        </nav>
        </div>
       <p className="main-text" >We are creatives</p>
       <img className="slider" src={ ArrowDown } alt="arrow-down" />
     </header>
    <main> 
      <div className="row-first">
        <div className="text-card transform-our-brand">
          <div className="text">
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast.</p>
            <p>Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <p className="text-learn-more">Learn more</p>
          </div>
        </div>
        <img className="img-egg" src={ imgEgg } alt="image egg" />
      </div>

      <div className="row-second">
        <img className="img-egg" src={ ImgStandOut } alt="image egg" />
        <div className="text-card">
          <div className="text">
            <h2>Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <p className="text-learn-more">Learn more</p>
          </div>
        </div>
      </div>
      
      <div className="row-third">
        <div className="graphic-design">
          <div className="text-graphic-design">
            <h2>Graphic design</h2>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
        </div>
        <div className="photography">
         <div className="text-photography">
          <h2>Photography</h2>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image</p>
         </div>
        </div>
      </div>
      <ClientTestimonials />
      <RowBottom />
    </main>
    <footer>
       <h2>sunnyside</h2>
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </nav>
        <div className="social-media">
          <ul>
            <li><img src={ FaceBook } alt="social-meldia-facebook" /></li>
            <li><img src={ Instagram } alt="social-midea-instagram" /></li>
            <li><img src={ Twitter } alt="social-media-twitter" /></li>
            <li><img src={ Pinterest } alt="social-media-pinterest" /></li>
          </ul>
        </div>
     </footer>
    </div>
  );
}

export default App;
