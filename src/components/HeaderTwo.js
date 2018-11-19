import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const Header = ({}) => {

/*     <svg version="1.1" id="elp-badge" class="badge"
    		xmlns="http://www.w3.org/2000/svg"
    		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    		viewBox="0 0 100 40" enable-background="new 0 0 289.1 289.1"
    		xmlSpace="preserve">

        <path id="upper_circle" fill="transparent" d="M0 15 Q 50 0 100 15"  />
    		<text text-anchor="middle">
    			<textPath xlinkHref="#upper_circle" startOffset="50">
    				<tspan class="badge-header" >Frilansande</tspan>
    			</textPath>
    		</text>

        <path id="name" fill="transparent" d="M-40 25 Q 50 25 140 25" />
        <text text-anchor="middle">
          <textPath xlinkHref="#name" startOffset="90">
            <tspan class="badge-name" >Utvecklare</tspan>
          </textPath>
        </text>

        <path id="lower_circle" fill="transparent" d="M0 35 Q 50 50 100 35"  />
    		<text text-anchor="middle">
    			<textPath xlinkHref="#lower_circle" startOffset="50">
    				<tspan class="badge-footer" >Kod som verktyg</tspan>
    			</textPath>
    		</text>

    	</svg>
*/

  return (
    <div className="container header">

    <Link className="logo" to="/" onClick={() => navigate('left')}>
      <span className="first-letter">A</span>
      <span className="letters">lvine</span>
    </Link>

    <VisibilitySensor partialVisibility={false} offset={{top:100}}>
    {({isVisible}) =>
    <div className={isVisible ? `slogan visible` : `slogan invisible`}>
      <span className="frilansande">Frilansande</span>
      <span className="utvecklare">Utvecklare</span>
      <span className="name"><span className="first">A</span><span className="rest">lvine Andersson</span></span>
      <span className="verktyg">Med kod som verktyg</span>
    </div>

    }
    </VisibilitySensor>



    </div>
  );

}

export default Header;
