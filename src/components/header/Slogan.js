import React from 'react'
import {isIE} from 'react-device-detect';


/**
 * Component for displaying an animated slogan
 */
const Slogan = () => {

  if(isIE) {
    return (
      <div data-test="slogan-component" className="slogan slogan-image">
        <picture>
          <source type="image/webp" srcSet={require(`../../images/slogan.webp`)} />
          <img alt="slogan" src={require(`../../images/slogan.png`)} />
        </picture>
      </div>
    )
  } else {
    return (
      <div data-test="slogan-component" className="slogan">

      <div className="alvine">
        <svg viewBox="0 0 150 23" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="curve" fill="transparent">
            <animate attributeName="d" values="M 0 20 Q 76 20 142 20 Z;M 0 23 Q 76 0 150 23 Z" dur="0.5s" begin="0.5s" fill="freeze" />
          </path>
        </defs>
        <use xlinkHref="#curve"/>
        <text className="text" x="75" textAnchor="middle">
          <textPath xlinkHref="#curve">
            Alvine Andersson
          </textPath>
        </text>
        </svg>
      </div>

      <div className="webb">
        <svg viewBox="0 0 93 5" xmlns="http://www.w3.org/2000/svg">
        <line className="lineone" x1="46.5" y1="2.5" x2="46.5" y2="2.5" >
          <animate attributeName="x1" from="46.5" to="10" dur="0.5s" begin="0s" fill="freeze" />
          <animate attributeName="x2" from="46.5" to="33" dur="0.3s" begin="0.5s" fill="freeze" />
        </line>
        <line className="linetwo" x1="46.5" y1="2.5" x2="46.5" y2="2.5" >
          <animate attributeName="x2" from="46.5" to="83" dur="0.5s" begin="0s" fill="freeze" />
          <animate attributeName="x1" from="46.5" to="59" dur="0.3s" begin="0.5s" fill="freeze" />
        </line>
        <defs>
          <path id="webb">
            <animate attributeName="d" values="M 46.5 5 L 46.5 5; M 37 5 L 56 5" dur="0.3s" begin="0.5s" fill="freeze" />
          </path>
        </defs>
        <use xlinkHref="#webb"/>
        <text className="text" x="9.5" y="0" textAnchor="middle">
          <textPath xlinkHref="#webb">Webb</textPath>
        </text>
        </svg>
      </div>

      <div className="developer">
        <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg">
          <g className="wrapper"><text className="text" x="1.5" y="12">U</text></g>
          <g className="wrapper"><text className="text" x="12" y="12">T</text></g>
          <g className="wrapper"><text className="text" x="21" y="12">V</text></g>
          <g className="wrapper"><text className="text" x="31.5" y="12">E</text></g>
          <g className="wrapper"><text className="text" x="40" y="12">C</text></g>
          <g className="wrapper"><text className="text" x="49.5" y="12">K</text></g>
          <g className="wrapper"><text className="text" x="60" y="12">L</text></g>
          <g className="wrapper"><text className="text" x="69" y="12">A</text></g>
          <g className="wrapper"><text className="text" x="80" y="12">R</text></g>
          <g className="wrapper"><text className="text" x="90" y="12">E</text></g>
        </svg>
      </div>

      <div className="medkod">
        <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path id="wave" fill="transparent">
            <animate
            attributeName="d"
            values="M 0 10 Q 25 8 50 10 Q 75 12 100 10; M 0 10 Q 25 12 50 10 Q 75 8 100 10; M 0 10 Q 25 8 50 10 Q 75 12 100 10;"
            dur="5s"
            repeatCount="indefinite" />
          </path>
        </defs>
        <use xlinkHref="#wave"/>
        <text className="text" x="50" textAnchor="middle">
          <textPath xlinkHref="#wave">
            Med kod som verktyg
          </textPath>
        </text>
        </svg>
      </div>

      </div>
    )
  }

}

export default Slogan
