import React, { Component} from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

const Header = ({}) => {

/*     <svg version="1.1" id="elp-badge" className="badge"
    		xmlns="http://www.w3.org/2000/svg"
    		xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    		viewBox="0 0 100 40" enable-background="new 0 0 289.1 289.1"
    		xmlSpace="preserve">

        <path id="upper_circle" fill="transparent" d="M0 15 Q 50 0 100 15"  />
    		<text textAnchor="middle">
    			<textPath xlinkHref="#upper_circle" startOffset="50">
    				<tspan className="badge-header" >Frilansande</tspan>
    			</textPath>
    		</text>

        <path id="name" fill="transparent" d="M-40 25 Q 50 25 140 25" />
        <text textAnchor="middle">
          <textPath xlinkHref="#name" startOffset="90">
            <tspan className="badge-name" >Utvecklare</tspan>
          </textPath>
        </text>

        <path id="lower_circle" fill="transparent" d="M0 35 Q 50 50 100 35"  />
    		<text textAnchor="middle">
    			<textPath xlinkHref="#lower_circle" startOffset="50">
    				<tspan className="badge-footer" >Kod som verktyg</tspan>
    			</textPath>
    		</text>

    	</svg>
*/


/*  <text textAnchor="start" x="10" y="30" className="text text-stroke" clipPath="url(#text1)">Where</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke" clipPath="url(#text2)">Ideas</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke" clipPath="url(#text3)">Begin.</text>
  <text textAnchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Where</text>
  <text textAnchor="start" x="10" y="50" className="text text-stroke text-stroke-2" clipPath="url(#text2)">Ideas</text>
  <text textAnchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clipPath="url(#text3)">Begin.</text>
  <defs>
    <clipPath id="text1">
      <text textAnchor="start" x="10" y="30" className="text">Where</text>
    </clipPath>
    <clipPath id="text2">
      <text textAnchor="start" x="10" y="50" className="text">Ideas</text>
    </clipPath>
    <clipPath id="text3">
      <text textAnchor="start" x="10" y="70" className="text">Begin.</text>
    </clipPath>
  </defs>*/

  /*    <VisibilitySensor partialVisibility={false} offset={{top:100}}>
      {({isVisible}) =>
      <div className={isVisible ? `slogan visible` : `slogan invisible`}>
        <span className="frilansande">Frilansande</span>
        <span className="utvecklare">Utvecklare</span>
        <span className="name"><span className="first">A</span><span className="rest">lvine Andersson</span></span>
        <span className="verktyg">Med kod som verktyg</span>
      </div>

      }
      </VisibilitySensor>
*/

/*
<div className="webbutvecklare">
  <svg viewBox="0 0 152 12" xmlns="http://www.w3.org/2000/svg">
    <text textAnchor="start" x="0" y="11" className="text">Webbutvecklare</text>
  </svg>
</div>
*/

/*              <path className="star" d="M0.6 126.8c0.2-0.9 0.4-1.9 0.7-2.8c9 2.6 18 5.4 27 8.3c2 0.7 4.5 2.6 3.3 4.3c-8.6-1.8-17.1-3.9-25.6-6.2 C3.8 129.9 1.3 129 0.6 126.8L0.6 126.8z"/>
              <path className="star" d="M27.6 155c1.6 0.1 3.3 0.1 4.7 0.9c1.4 0.8 2.2 2.7 1.3 4.1c-8.1-0.3-16-0.8-24.1-1.3 c-2.6-0.2-5.6-0.7-6.8-3c0.7-1.1 2.2-1.2 3.5-1.2C13.3 154.8 20.5 154.9 27.6 155L27.6 155z"/>

              <path className="star" d="M309.1 135.8c-0.6-0.9 0.2-2.1 1.2-2.5c1-0.3 2.1-0.1 3.1 0.3c7.7 2.3 15.2 4.9 22.6 8 c0.8 0.3 1.8 0.7 2.2 1.5c0.5 0.8 0.5 2-0.3 2.4c-0.6 0.3-1.3 0.1-2-0.1c-8.5-2.9-16.9-5.8-25.4-8.7 C310 136.5 309.4 136.3 309.1 135.8L309.1 135.8z"/>


*/

  return (
    <div className="container header">

      <Link className="logo" to="/" onClick={() => navigate('left')}>
        <span className="first-letter">A</span>
        <span className="letters">lvine</span>
      </Link>

      <div className="introslogan">

      <div className="twinkle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.3 262.7">
            <g id="Splash" >
              <path id="topCenterLeft" className="star" d="M159.2 19.1c-0.1-4.4 0.4-8.9 1.4-13.2c0.3-1.2 1.6-1.9 2.7-1.4 c1.3 6.9 0.8 14.1-1.2 20.8C159.8 24.5 159.2 21.5 159.2 19.1L159.2 19.1z"/>
              <path className="star"  d="M147.4 29.5c-2.2-5.4-3.6-11.2-4.1-17.1c-0.1-1-0.1-2.2 0.4-3.1c0.5-0.9 1.8-1.5 2.7-1 c1.2 5.3 2.2 10.7 3.2 16C149.9 26.4 149.5 29.5 147.4 29.5L147.4 29.5z"/>
              <path className="star"  d="M130.2 12.5c2.5 2.6 0.6 6.8 1.3 10.3c0.8 4.3 5.5 7.2 6.1 11.6c-0.5 1.3-2.5 0.3-3.5-0.8 c-2.5-3.1-5-6.2-6.1-10C126.8 19.8 127.3 15.3 130.2 12.5L130.2 12.5z"/>
              <path className="star" d="M117.9 39.3c-2.8-4.7-5.5-9.4-8.1-14.2c-1.2-2.2-2.3-4.8-1.2-7.1c4.1 1.3 6.2 5.7 7.8 9.7 c1.4 3.6 2.8 7.1 4.3 10.6C119.8 38.7 118.9 38.9 117.9 39.3L117.9 39.3z"/>
              <path className="star" d="M104.3 42.3c0.4 0.8 0.8 1.9 0.2 2.6c-1 1.2-2.8-0.4-3.6-1.8c-2.7-5.4-5.3-10.8-7.6-16.3 c0.3-0.9 1.7-1.2 2.6-0.7c0.9 0.5 1.4 1.5 1.8 2.4C99.8 33.2 102.1 37.7 104.3 42.3L104.3 42.3z"/>
              <path className="star" d="M78.7 40c3.4 3.8 6.8 7.6 10.2 11.4c0.3 0.4 0.7 0.8 0.8 1.3c0.1 1-1 1.7-2 1.6s-1.8-0.8-2.5-1.5 c-2.8-2.6-5.4-5.5-7.8-8.7c-0.7-0.9-1.4-2-1.2-3.1C76.4 40 78 39.2 78.7 40L78.7 40z"/>
              <path className="star" d="M76.8 64.9c-0.9 0.2-1.8 0.4-2.6 0.5c-3.7-3-6.8-6.7-9.1-10.8c0.7-1.3 2.7-0.7 3.9 0.2 C72.3 57.4 75.1 60.9 76.8 64.9L76.8 64.9z"/>
              <path className="star" d="M57.2 75.5c-2.5-3-5.1-6-7.6-9c-0.8-0.9-1.4-2.7-0.3-3.2c5.9 2.7 10.8 7.4 13.7 13.3 c-0.3 1.2-1.9 1.6-3.1 1.3C58.8 77.4 58 76.4 57.2 75.5L57.2 75.5z"/>
              <path className="star" d="M30.9 86.4c-0.2-0.9 0.8-1.8 1.7-1.9c0.9-0.1 1.9 0.3 2.7 0.7c3 1.4 5.9 2.7 8.9 4.1 c2.7 1.3 5.8 2.8 6.6 5.8c-1.3 1.2-3.3 0.5-4.9-0.3C40.8 92.3 35.7 89.5 30.9 86.4L30.9 86.4z"/>
              <path className="star" d="M13.2 104.7c-0.9-0.6-0.4-2.1 0.5-2.6c1-0.4 2.1-0.2 3.1 0.2c9.1 2.8 17.9 7.1 25.9 12.4 c-0.5 1.6-2.9 1.4-4.5 0.7C29.9 111.8 21.6 108.2 13.2 104.7L13.2 104.7z"/>


              <path className="star" d="M30.6 171.5c1.3-0.2 2.5-0.4 3.7-0.1s2.2 1.6 2 2.8c-8.7 2-17.6 3.3-26.5 3.9c-0.9-0.5-0.8-1.9-0.1-2.5 c0.7-0.7 1.8-0.9 2.7-1C18.5 173.6 24.6 172.6 30.6 171.5L30.6 171.5z"/>
              <path className="star" d="M19.3 201.3c0.1-1 1.2-1.7 2-2.1c6.7-3.5 13.5-7 20.2-10.5c0.7-0.3 1.4-0.7 2.1-0.4 c0.9 0.4 1.2 1.7 0.7 2.6c-0.5 0.9-1.4 1.4-2.2 1.9c-5.8 3.2-11.6 6.4-17.4 9.6c-1 0.5-2 1.1-3.1 1 C20.3 203.2 19.2 202.4 19.3 201.3L19.3 201.3z"/>
              <path className="star" d="M36.5 214.1c4.3-2.8 8.5-5.6 12.8-8.5c1.3-0.9 3.8-1.2 3.8 0.3c0 0.6-0.4 1.2-0.9 1.6 c-5.3 5.1-11.7 9.2-18.5 11.9C32.5 217.6 34.6 215.3 36.5 214.1L36.5 214.1z"/>
              <path className="star" d="M66.5 221.7c-3.6 4.4-7.6 8.3-12 11.9c-1.8 1.4-4.9 2.4-5.7 0.3c5-6.5 11.1-12.1 17.9-16.7 C68.4 217.6 67.7 220.3 66.5 221.7L66.5 221.7z"/>
              <path className="star" d="M67.9 240.1c2-4.4 4.1-8.8 6.1-13.3c0.8-1.6 2.6-3.5 3.9-2.3c-1.4 7.8-4.7 15.2-9.5 21.4 C66.5 245.1 67 242.1 67.9 240.1L67.9 240.1z"/>
              <path className="star" d="M90.1 230.2c-0.5-1.2 1.3-2.2 2.4-1.5c1.1 0.7 1.4 2.1 1.3 3.3c-0.2 6.7-5.9 11.9-11.8 15.3 c-0.7-3.3 2.1-6.1 4.5-8.4C88.9 236.5 91.4 233.2 90.1 230.2L90.1 230.2z"/>
              <path className="star" d="M106.1 234.6c-1.4 3.7-3.1 7.3-4.8 10.9c-1.4 2.7-4.2 5.9-6.9 4.5c2.2-4.8 4.7-9.4 7.5-13.9 C102.8 234.6 105.1 233 106.1 234.6L106.1 234.6z"/>
              <path className="star" d="M108.7 253.5c0.2-5.1 1.5-10.2 3.8-14.8c0.4-0.8 0.9-1.6 1.6-2c0.8-0.4 2-0.2 2.2 0.7 c0.1 0.4 0 0.9-0.1 1.3c-1.2 3.7-2.3 7.4-3.5 11.2C112.1 251.8 110.5 254.3 108.7 253.5L108.7 253.5z"/>
              <path className="star" d="M123.1 256.5c-1-5.1 0.2-10.7 3.2-15c0.5-0.7 1.5-0.9 2.2-0.5C129.1 246.6 127 252.5 123.1 256.5 L123.1 256.5z"/>
              <path className="star" d="M136.8 247.8c1.9 4 0.9 9.1-2.4 12.1c-1-3.9-0.9-7.9 0-11.8C135.3 247.9 136 247.9 136.8 247.8L136.8 247.8 z"/>
              <path className="star" d="M150.2 258.6c-0.2 1-0.4 2-1.2 2.6c-0.5 0.4-1.3 0.6-1.9 0.4c-1.2-7.2-0.8-14.6 1.3-21.6 C152.3 245.1 151.4 252.3 150.2 258.6L150.2 258.6z"/>
              <path className="star" d="M169.6 243c-1.1 4.8-2.2 9.7-3.3 14.5c-0.3 1.2-0.6 2.5-1.6 3.2C161.3 254.8 163.6 246.2 169.6 243 L169.6 243z"/>
              <path className="star" d="M181.3 239c2.8 0.7 3.1 4.6 2.6 7.5c-0.6 3.9-1.2 7.8-1.8 11.8c-1.9 0.8-2.9-2.2-2.7-4.2 C179.8 248.9 180.5 243.9 181.3 239L181.3 239z"/>
              <path className="star" d="M194.7 257.1c-1.6-5.1-2-10.7-1-16.1c0.2-1.3 1.2-3 2.4-2.6c1.4 5.8 1.6 11.9 0.6 17.9 C196 256.5 195.3 256.8 194.7 257.1L194.7 257.1z"/>
              <path className="star" d="M209.6 235.4c1.9 5.4 3.1 11 3.4 16.7c0.1 1.4-0.8 3.5-2.1 2.8c-2.1-5-3.3-10.5-3.7-15.9 C207.2 237.3 208 234.8 209.6 235.4L209.6 235.4z"/>
              <path className="star" d="M220 232.7c4.8 1.5 5.9 7.7 6.1 12.8c0.1 2-0.2 4.4-2 5C222.7 244.5 221.4 238.6 220 232.7L220 232.7z"/>
              <path className="star" d="M243.9 246.2c-2.7-5.1-5.5-10.2-8.2-15.4c-0.7-1.4-0.8-3.8 0.7-3.7c0.7 0.1 1.2 0.7 1.5 1.2 c2.8 4.3 5.3 8.8 7.3 13.5c0.4 0.9 0.8 1.9 0.7 2.8C245.8 245.5 244.8 246.4 243.9 246.2L243.9 246.2z"/>
              <path className="star" d="M250.3 228.6c-0.3-0.7-0.5-1.4-0.4-2c0.1-0.7 0.6-1.4 1.1-1.9c4.7 3.7 7.3 9.7 6.9 15.6 C254.7 236.9 252 232.9 250.3 228.6L250.3 228.6z"/>
              <path className="star" d="M263.1 219.9c0.8-0.6 1.7-0.9 2.6-1c2.7 3.9 5.1 8.1 6.9 12.5c0.3 0.7 0.6 1.6 0.1 2.2 c-0.9 1.2-2.6-0.1-3.5-1.3C266.7 228.5 264.6 224.3 263.1 219.9L263.1 219.9z"/>
              <path className="star" d="M273.3 214.3c3.2-1.9 7 1.5 9.2 4.5c2 2.7 4.1 5.4 6.1 8.1c-0.7 1-2.2 1.3-3.3 0.8s-2-1.5-2.8-2.4 C279.5 221.6 276.4 217.9 273.3 214.3L273.3 214.3z"/>
              <path className="star" d="M298.4 215.8c-3-4.2-5.9-8.4-8.9-12.5c-0.6-0.9-1.3-1.9-1.3-3c0-1.1 1.1-2.2 2.1-1.9 c3.7 4.5 7.1 9.3 10 14.4c0.4 0.8 0.9 1.6 0.8 2.5c-0.1 0.9-0.9 1.7-1.8 1.4C299 216.6 298.6 216.2 298.4 215.8L298.4 215.8z"/>
              <path className="star" d="M297.5 182c-0.4-0.6-0.9-1.4-0.6-2.1c0.5-1.4 2.6-0.6 3.7 0.4c4.6 4.3 8.3 9.5 10.8 15.3 c-1.7 1.8-4.5-0.4-5.9-2.4C302.7 189.6 300.1 185.8 297.5 182L297.5 182z"/>
              <path className="star" d="M303.8 162.4c2.4-2 5.9-0.3 8.4 1.5c5.8 4.1 11.3 8.5 16.5 13.3c-1 1.9-3.8 0.9-5.6-0.3 C316.5 172.3 310.1 167.5 303.8 162.4L303.8 162.4z"/>


              <path className="star" d="M318.2 114.9c-1.5 0.5-3.9 0.5-3.9-1.1c-0.1-1.2 1.2-1.8 2.2-2.2c6.3-2.2 12.7-4.5 19-6.7 c1.1-0.4 2.2-0.8 3.3-0.5s2 1.6 1.4 2.6c-0.3 0.6-1.1 0.9-1.8 1.1C331.7 110.4 325 112.7 318.2 114.9L318.2 114.9z"/>
              <path className="star" d="M308.5 92.7c-1-0.6-1-2.1-0.4-3c0.6-1 1.6-1.6 2.6-2.1c7.1-3.9 14.1-7.8 21.3-11.7c0.5-0.3 1-0.5 1.6-0.4 c0.9 0.2 1.3 1.4 0.9 2.3c-0.4 0.9-1.2 1.5-2 2C324.8 84.4 316.8 88.8 308.5 92.7L308.5 92.7z"/>
              <path className="star" d="M303.8 81.1c-2-0.8-0.8-3.8 0.7-5.4c4.5-4.9 9.3-9.5 14.5-13.9c1.1 0.5 1.4 2 1 3.1c-0.4 1.2-1.3 2-2.1 2.8 C313.1 72.2 308.4 76.6 303.8 81.1L303.8 81.1z"/>
              <path className="star" d="M290.6 60.1c-0.7 0.7-1.5 1.3-2.5 1.4s-2.1-0.7-1.9-1.6c6.3-6.7 13-13.1 20-19.1c1.1 0.7 1.3 2.4 0.8 3.6 c-0.5 1.3-1.5 2.2-2.5 3.1C300 51.7 295.3 55.9 290.6 60.1L290.6 60.1z"/>
              <path className="star" d="M279.1 54.4c-1.9-1-1.5-3.8-0.8-5.9c2.6-7.5 6.1-14.7 10.5-21.3c2.1 1.5 1.3 4.8 0.1 7.1 C285.8 41 282.5 47.7 279.1 54.4L279.1 54.4z"/>
              <path className="star" d="M263.1 43c0.3-5.8 2.5-11.5 6.1-16c1.3-1.5 2.8-3 4.8-3.1C272.6 31.1 268.6 37.9 263.1 43L263.1 43z"/>
              <path className="star" d="M256.7 18.5c-1.8 4-3.5 8-5.3 12c-0.7 1.6-2.4 3.6-3.9 2.6c1.3-7.1 4.1-13.9 8.1-19.9 C257.7 13.4 257.5 16.6 256.7 18.5L256.7 18.5z"/>
              <path className="star" d="M224.5 20.5c1.2-5 2.7-10 4.4-14.9c0.2-0.7 0.5-1.4 1.2-1.7c1.6-0.7 2.3 2.1 1.9 3.9 c-1.6 6.6-3.6 13.3-5.6 19.8C223.8 26.7 223.9 23.1 224.5 20.5L224.5 20.5z"/>
              <path className="star" d="M204.4 21.4c0.4-5.9 1.7-11.8 3.7-17.4c0.7-1.9 2.5-4.1 4.1-2.9c-0.8 5.6-2.1 11.2-3.9 16.6 C207.7 19.6 206.3 21.8 204.4 21.4L204.4 21.4z"/>
              <path id="topCenterRight" className="star" d="M183.9 26.3c-2.2-0.1-2.8-3.1-2.6-5.3c0.6-6.7 1.8-13.5 3.6-20c2-0.1 2.5 2.7 2.2 4.7 C186.2 12.6 185.2 19.5 183.9 26.3L183.9 26.3z"/>
            </g>

        </svg>
      </div>

        <div className="webbutvecklare">
          <svg viewBox="0 0 150 50" xmlns="http://www.w3.org/2000/svg">

          <defs>
            <path id="curve" fill="transparent">
              <animate attributeName="d" values="M 5 50 Q 76 50 142 50 Z;M 5 50 Q 76 10 142 50 Z" dur="1s" fill="freeze" />
            </path>
          </defs>
          <use xlinkHref="#curve"/>
          <text className="text">
              <textPath xlinkHref="#curve">
                Webbutvecklare
              </textPath>
          </text>

          </svg>

        </div>



      <div className="alvineandersson">
        <svg viewBox="0 0 160 13" xmlns="http://www.w3.org/2000/svg">
          <text textAnchor="start" x="0" y="11" className="text text-stroke" clipPath="url(#text1)">Alvine Andersson</text>
          <text textAnchor="start" x="0" y="11" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Alvine Andersson</text>
          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="0" y="11" className="text">Alvine Andersson</text>
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="medkodsomverktyg">
        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">

        <defs>
          <path id="wave" fill="transparent">
            <animate attributeName="d" values="M 0 30 Q 25 28 50 30 Q 75 32 100 30; M 0 30 Q 25 32 50 30 Q 75 28 100 30; M 0 30 Q 25 28 50 30 Q 75 32 100 30;" dur="5s" repeatCount="indefinite" />
          </path>
        </defs>
        <use xlinkHref="#wave"/>
        <text className="text">
            <textPath xlinkHref="#wave">
              Med kod som verktyg
            </textPath>
        </text>

        </svg>
      </div>

    </div>


  </div>
);
}

export default Header;
