import React from 'react'

const Slogan = () => {
  return (
    <div className="slogan">

    <div className="alvine">
      <svg viewBox="0 0 150 23" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="curve" fill="transparent">
          <animate attributeName="d" values="M 0 20 Q 76 20 142 20 Z;M 0 23 Q 76 0 150 23 Z" dur="0.5s" begin="1.5s" fill="freeze" />
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

    <div className="utvecklare">
      <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg">
      <text className="text" x="1.5" y="12" className="text text-stroke" clipPath="url(#text1)">Utvecklare</text>      
      <text className="text" x="1.5" y="12" className="text text-stroke text-stroke-2" clipPath="url(#text1)">Utvecklare</text>
      <defs>
        <clipPath id="text1">
          <text x="1.5" y="12" className="text">Utvecklare</text>
        </clipPath>
      </defs>
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

export default Slogan
