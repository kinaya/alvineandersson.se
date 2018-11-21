import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

class ProjectTwo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {visible: false}
    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  // Only trigger animation once
  onChangeVisibility(isVisible) {
    this.setState({visible: isVisible})
  }

  render() {

    const  {project, navigate} = this.props;

    return (
      <div className="projectTwo">
        <VisibilitySensor intervalCheck={false} scrollCheck={true} onChange={this.onChangeVisibility} active={!this.state.visible} partialVisibility={true} >
        {({isVisible}) =>
          <Link onClick={() =>  navigate('right')} className={isVisible ? 'visible' : 'invisible'} to={`/projects/${project.id}`} >
            <div className="image">
              <img src={project.img.url} />
            </div>



              <svg xmlns="http://www.w3.org/2000/svg"
                   width="3.33333in" height="2.69444in"
                   viewBox="0 0 240 194" class="diamond">

                <defs>

                <path id="diamond-outer" class="diamond-outer"

                      d="M 136.00,5.20
                         C 136.00,5.20 167.00,17.80 167.00,17.80
                           167.00,17.80 221.00,38.69 221.00,38.69
                           225.97,40.46 236.40,43.92 238.40,49.04
                           239.11,50.87 239.00,54.00 239.00,56.00
                           239.00,56.00 239.00,112.00 239.00,112.00
                           239.00,112.00 239.82,124.00 239.82,124.00
                           239.82,124.00 239.00,133.00 239.00,133.00
                           239.00,133.00 239.00,139.00 239.00,139.00
                           239.00,141.45 239.19,144.72 237.98,146.89
                           235.56,151.22 222.88,154.67 218.00,156.60
                           218.00,156.60 186.00,168.81 186.00,168.81
                           186.00,168.81 167.00,176.58 167.00,176.58
                           167.00,176.58 150.00,182.60 150.00,182.60
                           150.00,182.60 130.00,190.40 130.00,190.40
                           126.37,191.84 121.95,193.92 118.00,193.39
                           118.00,193.39 89.00,182.68 89.00,182.68
                           89.00,182.68 26.00,158.60 26.00,158.60
                           20.63,156.42 3.70,151.29 1.17,146.87
                           -0.21,144.45 0.00,140.74 0.00,138.00
                           0.00,138.00 0.00,57.00 0.00,57.00
                           0.00,54.26 -0.21,50.56 1.17,48.13
                           2.78,45.33 6.17,44.07 9.00,42.85
                           9.00,42.85 27.00,35.60 27.00,35.60
                           27.00,35.60 98.00,7.31 98.00,7.31
                           98.00,7.31 116.00,0.53 116.00,0.53
                           123.64,-0.65 129.07,2.43 136.00,5.20 Z" />

                           <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                             <stop class="stop1" offset="0%"/>
                             <stop class="stop2" offset="100%"/>
                           </linearGradient>

                  </defs>

                  <use x="0" y="0" xlinkHref="#diamond-outer" fill="url('#gradient')"  />

                           <path id="diamond-inner"
                                  fill="none"
                                  d="M 150.00,14.72
                                     C 150.00,14.72 182.00,27.45 182.00,27.45
                                       182.00,27.45 211.00,38.95 211.00,38.95
                                       216.53,40.97 232.15,45.42 234.98,50.21
                                       236.20,52.29 236.00,55.62 236.10,58.00
                                       236.10,58.00 236.10,106.00 236.10,106.00
                                       236.10,106.00 236.10,124.00 236.10,124.00
                                       236.10,124.00 236.10,132.00 236.10,132.00
                                       236.10,132.00 236.10,137.00 236.10,137.00
                                       236.00,139.34 236.20,142.74 234.98,144.78
                                       232.87,148.28 219.34,152.27 215.00,154.00
                                       215.00,154.00 184.00,165.81 184.00,165.81
                                       184.00,165.81 165.00,173.58 165.00,173.58
                                       165.00,173.58 148.00,179.60 148.00,179.60
                                       148.00,179.60 130.00,186.60 130.00,186.60
                                       126.22,188.10 122.16,190.16 118.00,189.63
                                       118.00,189.63 91.00,179.68 91.00,179.68
                                       91.00,179.68 28.00,155.60 28.00,155.60
                                       28.00,155.60 11.00,149.00 11.00,149.00
                                       8.60,148.02 5.61,147.04 4.17,144.73
                                       2.77,142.47 3.00,138.61 3.00,136.00
                                       3.00,136.00 3.00,59.00 3.00,59.00
                                       3.00,56.39 2.77,52.53 4.17,50.27
                                       5.65,47.88 9.48,46.49 12.00,45.42
                                       12.00,45.42 29.00,38.60 29.00,38.60
                                       29.00,38.60 99.00,10.66 99.00,10.66
                                       99.00,10.66 118.00,3.62 118.00,3.62
                                       125.07,3.35 142.76,11.61 150.00,14.72 Z" />

              </svg>





              <h3 className="title"><span>{project.title}</span></h3>
          </Link>
        }
        </VisibilitySensor>
      </div>
    );
  }
}

export default ProjectTwo;
