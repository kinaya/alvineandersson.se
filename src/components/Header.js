import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const Header = ({}) => {

  return (
    <div className="container header">

      <Link className="logo" to="/" onClick={() => navigate('left')}>
        <span>A</span>
      </Link>

      <div className="headerslogan">

        <div className="alvine">
          <svg viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path id="curve" fill="transparent">
              <animate attributeName="d" values="M 5 50 Q 76 50 142 50 Z;M 5 50 Q 76 10 142 50 Z" dur="1s" begin="3s" fill="freeze" />
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
          <svg viewBox="0 0 93 6" xmlns="http://www.w3.org/2000/svg">
          <line className="lineone" x1="46.5" y1="3" x2="46.5" y2="3" >
            <animate attributeName="x1" from="46.5" to="0" dur="1s" begin="1s" fill="freeze" />
            <animate attributeName="x2" from="46.5" to="37" dur="0.3s" begin="2s" fill="freeze" />
          </line>
          <line className="linetwo" x1="46.5" y1="3" x2="46.5" y2="3" >
            <animate attributeName="x2" from="46.5" to="93" dur="1s" begin="1s" fill="freeze" />
            <animate attributeName="x1" from="46.5" to="56" dur="0.3s" begin="2s" fill="freeze" />
          </line>
          <defs>
            <path id="webb" fill="red" stroke="green">
              <animate attributeName="d" values="M 46.5 6 L 46.5 6; M 37 6 L 56 6" dur="0.3s" begin="2s" fill="freeze" />
            </path>
          </defs>
          <use xlinkHref="#webb"/>
          <text className="text" x="9.5" y="0" textAnchor="middle">
            <textPath xlinkHref="#webb">Webb</textPath>
          </text>
          </svg>
        </div>

        <div className="utvecklare">
          <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg">
          <text className="text" x="0" y="13" className="text text-stroke" clipPath="url(#text1)">Utvecklare</text>
          <text className="text" x="0" y="13" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Utvecklare</text>
          <defs>
            <clipPath id="text1">
              <text x="0" y="13" className="text">Utvecklare</text>
            </clipPath>
          </defs>
          </svg>
        </div>

        <div className="medkod">
          <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
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

      <div className="scrollarrow"></div>
  </div>
);
}

export default Header;
