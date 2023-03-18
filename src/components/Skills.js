
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import requirements from "../assets/img/logo-requirements.svg";
import designsoftware from "../assets/img/logo-designsoftware.svg";
import statistics from "../assets/img/logo-statistics.svg";
import mobileapps from "../assets/img/logo-mobileapps.svg";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>We offer consultancy to help organizations with digital transformation.<br></br> These are our strengs...</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={requirements} alt="" />
                                <h5>IT Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={designsoftware} alt="" />
                                <h5>Software Design and Development</h5>
                            </div>
                           
                            <div className="item">
                                <img src={statistics} alt="" />
                                <h5>Data Analysis</h5>
                            </div>
                            
                           <div className="item">
                                <img src={mobileapps} alt="" />
                                <h5>iOS & Android Apps </h5>
                            </div>
                            
                           
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
