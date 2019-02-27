import React from 'react'

/*    <div className="utvecklare">
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
*/


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

    <div className="developer">
      <svg viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg">
        <text className="text" x="1.5" y="12">U</text>
        <text className="text" x="12" y="12">T</text>
        <text className="text" x="21" y="12">V</text>
        <text className="text" x="31.5" y="12">E</text>
        <text className="text" x="40" y="12">C</text>
        <text className="text" x="50" y="12">K</text>
        <text className="text" x="60.5" y="12">L</text>
        <text className="text" x="70" y="12">A</text>
        <text className="text" x="80" y="12">R</text>
        <text className="text" x="89" y="12">E</text>
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


/*    <div className="dev">
      <svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg">

  	<rect x="49.6" y="141.7" className="st0" width="0.6" height="0.6"/>
		<rect x="49.8" y="127.3" className="st0" width="0.3" height="0.3"/>
		<rect x="49.7" y="135.5" className="st0" width="0.4" height="0.4"/>
		<rect x="49.7" y="133.4" className="st0" width="0.3" height="0.3"/>
		<rect x="46.2" y="146.7" className="st0" width="1" height="1"/>
		<rect x="46.3" y="144.7" className="st0" width="0.9" height="0.9"/>

		<path className="letter u" d="M37.1,105v23.8c0,6.5-2.9,10.1-8.2,10.1c-0.5,0-1,0-1.5-0.1c-0.3-1.2-0.5-2.6-0.5-4.1v-23.5l-6.5-6.2H10.3
			v24.3c0,6.5,1.8,11.4,5.2,14.8l5,5c3.6,3.6,8,5.2,14.1,5.2c11.3,0,19-8.2,19-20.3v-22.8l-6.2-6.2H37.1z M25,111.1h0.3l0.6,0.6v0.3
			H25V111.1z M24.9,113.2h1v1h-1V113.2z M23.9,110h0.2l0.7,0.6v0.2h-0.9V110z M23.9,112.1h1v1h-1V112.1z M22.9,109H23l0.7,0.7v0.2
			h-0.9V109z M22.8,111.1h1v1h-1V111.1z M21.8,107.9h0.1l0.7,0.7v0.1h-0.9V107.9z M21.7,110h1v1h-1V110z M20.7,106.8l0.9,0.8v0.1
			h-0.9V106.8z M20.7,108.9h0.9v1h-0.9V108.9z M20.7,115.1h0.9v-0.9h-0.9v-1.2h0.9v-1h-0.9V111h1v1.1h1.1v1.1h1.1v1.1h1.1v1.1h1v1.1
			H25v1h0.9v1.1H25v0.9h0.9v15.3c0,1.4,0.1,2.6,0.4,3.8c-3.9-1.1-5.5-5-5.5-9.6V115.1z M31.2,149.4h-0.3v-0.3h0.3V149.4z
			 M32.3,150.5h-0.3v-0.3h0.3V150.5z M33.3,151.5H33v-0.3h0.3V151.5z M33.4,149.5h-0.4v-0.4h0.4V149.5z M34.3,152.5H34v-0.3h0.3
			V152.5z M34.4,150.5H34v-0.4h0.4V150.5z M34.5,148.5h-0.5v-0.2l0.5-0.1V148.5z M28.9,147.6c-11.5,0-17.5-6.5-17.5-18.3v-23.2h8.3
			v22.8c0,6.6,3.1,11.1,9.3,11.1c5.9,0,9.3-4.1,9.3-11.2v-22.7h8.3v23.2C46.5,141.3,40.5,147.6,28.9,147.6z M35.4,151.6H35v-0.4h0.4
			V151.6z M35.5,149.5H35V149h0.5V149.5z M36.5,152.6h-0.4v-0.4h0.4V152.6z M36.5,150.6H36V150h0.5V150.6z M36.6,148.5H36v-0.6h0.6
			V148.5z M37.6,151.6h-0.5v-0.5h0.5V151.6z M37.6,149.6H37v-0.6h0.6V149.6z M37.7,147.5H37v-0.1l0.7-0.2V147.5z M38.6,152.7h-0.5
			v-0.5h0.5V152.7z M38.7,150.6h-0.6V150h0.6V150.6z M38.7,148.6H38v-0.7h0.7V148.6z M39.7,151.7h-0.6v-0.6h0.6V151.7z M39.8,149.6
			h-0.7v-0.7h0.7V149.6z M39.8,147.6H39v-0.8h0.8V147.6z M40.8,152.2l-0.6,0.2v-0.4h0.6V152.2z M40.8,150.7h-0.7V150h0.7V150.7z
			 M40.9,148.6h-0.8v-0.8h0.8V148.6z M40.9,146.6H40V146l0.4-0.3h0.4V146.6z M41.9,151.7h-0.7V151h0.7V151.7z M41.9,149.7h-0.8v-0.8
			h0.8V149.7z M42,147.6h-0.9v-0.9H42V147.6z M43,150.7h-0.8v-0.8H43V150.7z M43,148.7h-0.9v-0.9H43V148.7z M43.1,146.6h-1v-1h1
			V146.6z M43.2,151.2V151h0.4L43.2,151.2z M44.1,149.7h-0.9v-0.9h0.9V149.7z M44.1,147.7h-1v-1h1V147.7z M45.1,150l-0.9,0.6v-0.8
			h0.9V150z M45.1,148.7h-1v-1h1V148.7z M46.2,149.2l-0.7,0.6h-0.3v-1h1V149.2z M51.7,111.1h0.2l0.5,0.5v0.3h-0.8V111.1z
			 M51.6,113.2h0.9v1h-0.9V113.2z M50.6,110h0.2l0.6,0.6v0.2h-0.9V110z M50.5,112.1h1v1h-1V112.1z M49.5,109h0.2l0.6,0.6v0.2h-0.9
			V109z M49.4,111.1h1v1h-1V111.1z M48.4,107.9h0.3l0.6,0.6v0.2h-0.9V107.9z M48.4,110h1v1h-1V110z M47.6,106.8l0.7,0.7v0.2h-0.7
			V106.8z M47.6,108.9h0.7v1h-0.7V108.9z M47.6,121.3h0.5v-0.5h-0.5v-1.5h0.6v-0.7h-0.6v-1.4h0.6v-0.8h-0.6v-1.3h0.7v-0.9h-0.7v-1.2
			h0.7v-1h-0.7V111h0.7v1.1h1.1v1.1h1.1v1.1h1.1v1.1h0.9v1.1h-0.8v1h0.8v1.2h-0.8v0.9h0.8v1.3h-0.7v0.8h0.7V134
			c0,3.2-0.6,6.2-1.6,8.7h-0.2v0.5l-0.4,0.8v-0.3h-0.7v0.7H50c-0.7,1.2-1.5,2.3-2.4,3.4h-0.4v0.4l-0.6,0.6h-0.5v-1h-1v-1h-1v-1h-1
			v-1H42v1h-1v-0.3c0.7-0.5,1.4-1.1,2-1.8c0.6-0.7,1.2-1.4,1.7-2.2H45v-0.6l0.3-0.6v0.1H46v-0.7h-0.4c0.4-0.8,0.7-1.6,1-2.5H47v-0.5
			h-0.2c0.6-2.1,0.9-4.5,0.9-7.2V121.3z"/>

		<rect x="46.4" y="138.5" className="st0" width="0.6" height="0.6"/>
		<rect x="46.3" y="142.6" className="st0" width="0.8" height="0.8"/>
		<rect x="49.6" y="137.6" className="st0" width="0.5" height="0.4"/>
		<rect x="47.6" y="133.4" className="st0" width="0.4" height="0.4"/>
		<rect x="47.3" y="145.7" className="st0" width="0.9" height="0.9"/>
		<rect x="47.4" y="143.7" className="st0" width="0.8" height="0.8"/>
		<rect x="48.4" y="113.2" className="st0" width="1" height="1"/>
		<rect x="48.5" y="115.3" className="st0" width="0.9" height="0.9"/>
		<rect x="48.5" y="142.6" className="st0" width="0.7" height="0.7"/>
		<rect x="48.6" y="119.7" className="st0" width="0.7" height="0.7"/>
		<rect x="48.5" y="117.5" className="st0" width="0.8" height="0.8"/>
		<rect x="47.5" y="139.6" className="st0" width="0.6" height="0.6"/>
		<rect x="47.4" y="141.6" className="st0" width="0.7" height="0.7"/>
		<rect x="47.5" y="135.5" className="st0" width="0.4" height="0.4"/>
		<rect x="47.6" y="123" className="st0" width="0.4" height="0.4"/>
		<rect x="47.5" y="137.5" className="st0" width="0.5" height="0.5"/>
		<rect x="47.7" y="125.1" className="st0" width="0.3" height="0.3"/>
		<rect x="48.5" y="140.6" className="st0" width="0.6" height="0.6"/>
		<rect x="47.6" y="131.4" className="st0" width="0.3" height="0.3"/>
		<rect x="48.6" y="138.5" className="st0" width="0.5" height="0.5"/>
		<rect x="49.6" y="118.6" className="st0" width="0.7" height="0.7"/>
		<rect x="49.5" y="116.4" className="st0" width="0.9" height="0.9"/>
		<rect x="49.5" y="114.2" className="st0" width="1" height="1"/>
		<rect x="48.4" y="144.7" className="st0" width="0.8" height="0.8"/>
		<rect x="49.7" y="125.1" className="st0" width="0.4" height="0.4"/>
		<rect x="49.7" y="122.9" className="st0" width="0.5" height="0.5"/>
		<rect x="49.6" y="120.7" className="st0" width="0.7" height="0.7"/>
		<rect x="48.8" y="126.2" className="st0" width="0.3" height="0.3"/>
		<rect x="48.6" y="134.4" className="st0" width="0.4" height="0.4"/>
		<rect x="49.6" y="139.6" className="st0" width="0.5" height="0.5"/>
		<rect x="48.6" y="121.8" className="st0" width="0.5" height="0.5"/>
		<rect x="48.6" y="136.5" className="st0" width="0.5" height="0.5"/>
		<rect x="48.7" y="124" className="st0" width="0.4" height="0.4"/>
		<rect x="48.7" y="132.4" className="st0" width="0.3" height="0.3"/>
		<rect x="46.4" y="140.6" className="st0" width="0.7" height="0.7"/>
		<rect x="25.2" y="127.2" className="st0" width="0.4" height="0.4"/>
		<rect x="25.1" y="125" className="st0" width="0.5" height="0.5"/>
		<rect x="24.2" y="128.3" className="st0" width="0.3" height="0.3"/>
		<rect x="45.3" y="141.6" className="st0" width="0.8" height="0.8"/>
		<rect x="25.1" y="122.9" className="st0" width="0.7" height="0.7"/>
		<rect x="44.2" y="142.6" className="st0" width="0.9" height="0.9"/>
		<rect x="25.2" y="129.4" className="st0" width="0.3" height="0.3"/>
		<rect x="44.2" y="144.6" className="st0" width="1" height="1"/>
		<rect x="43.1" y="143.6" className="st0" width="1" height="1"/>
		<rect x="25" y="120.7" className="st0" width="0.8" height="0.8"/>
		<rect x="23.9" y="117.4" className="st0" width="0.9" height="0.9"/>
		<rect x="23.9" y="115.3" className="st0" width="1" height="1"/>
		<rect x="21" y="125.1" className="st0" width="0.3" height="0.3"/>
		<rect x="21" y="123" className="st0" width="0.4" height="0.4"/>
		<rect x="24.1" y="124" className="st0" width="0.5" height="0.5"/>
		<rect x="24.1" y="126.1" className="st0" width="0.4" height="0.4"/>
		<rect x="24" y="119.6" className="st0" width="0.8" height="0.8"/>
		<rect x="24" y="121.8" className="st0" width="0.7" height="0.7"/>
		<rect x="51.8" y="122.9" className="st0" width="0.7" height="0.7"/>
		<rect x="50.8" y="126.1" className="st0" width="0.4" height="0.4"/>
		<rect x="50.7" y="138.6" className="st0" width="0.4" height="0.4"/>
		<rect x="50.9" y="128.3" className="st0" width="0.3" height="0.3"/>
		<rect x="50.8" y="134.5" className="st0" width="0.3" height="0.3"/>
		<rect x="50.7" y="136.6" className="st0" width="0.4" height="0.4"/>
		<rect x="50.8" y="124" className="st0" width="0.5" height="0.5"/>
		<rect x="50.6" y="119.6" className="st0" width="0.8" height="0.8"/>
		<rect x="50.6" y="117.4" className="st0" width="0.9" height="0.9"/>
		<rect x="50.7" y="121.8" className="st0" width="0.7" height="0.7"/>
		<rect x="45.2" y="145.6" className="st0" width="1" height="1"/>
		<rect x="51.9" y="129.4" className="st0" width="0.3" height="0.3"/>
		<rect x="51.8" y="135.5" className="st0" width="0.3" height="0.3"/>
		<rect x="50.6" y="140.7" className="st0" width="0.5" height="0.5"/>
		<rect x="45.2" y="143.6" className="st0" width="0.9" height="0.9"/>
		<rect x="51.9" y="127.2" className="st0" width="0.4" height="0.4"/>
		<rect x="51.8" y="125" className="st0" width="0.5" height="0.5"/>
		<rect x="51.8" y="137.6" className="st0" width="0.4" height="0.4"/>
		<rect x="20.9" y="120.8" className="st0" width="0.5" height="0.5"/>
		<rect x="21.9" y="121.8" className="st0" width="0.5" height="0.5"/>
		<rect x="21.9" y="117.5" className="st0" width="0.7" height="0.7"/>
		<rect x="21.8" y="115.3" className="st0" width="0.9" height="0.9"/>
		<rect x="22.1" y="126.2" className="st0" width="0.3" height="0.3"/>
		<rect x="22.8" y="114.2" className="st0" width="1" height="1"/>
		<rect x="20.8" y="118.6" className="st0" width="0.7" height="0.7"/>
		<rect x="21.9" y="119.7" className="st0" width="0.7" height="0.7"/>
		<rect x="50.5" y="115.3" className="st0" width="1" height="1"/>
		<rect x="21.7" y="113.2" className="st0" width="1" height="1"/>
		<rect x="22.8" y="116.4" className="st0" width="0.9" height="0.9"/>
		<rect x="23" y="122.9" className="st0" width="0.5" height="0.5"/>
		<rect x="23.1" y="127.3" className="st0" width="0.3" height="0.3"/>
		<rect x="23.1" y="125.1" className="st0" width="0.4" height="0.4"/>
		<rect x="23" y="120.7" className="st0" width="0.7" height="0.7"/>
		<rect x="22.9" y="118.5" className="st0" width="0.8" height="0.8"/>
		<rect x="22" y="124" className="st0" width="0.4" height="0.4"/>
		<rect x="20.8" y="116.4" className="st0" width="0.8" height="0.8"/>
		<rect x="80.2" y="124.7" className="st0" width="0.6" height="0.6"/>
		<rect x="81.1" y="121.3" className="st0" width="0.9" height="0.9"/>
		<rect x="80.4" y="129" className="st0" width="0.3" height="0.3"/>
		<rect x="80.1" y="122.5" className="st0" width="0.7" height="0.7"/>
		<rect x="79" y="119.2" className="st0" width="0.9" height="0.9"/>
		<rect x="79.3" y="128" className="st0" width="0.3" height="0.3"/>
		<rect x="79.1" y="123.6" className="st0" width="0.6" height="0.6"/>
		<rect x="79.1" y="121.4" className="st0" width="0.7" height="0.7"/>
		<rect x="80.1" y="120.3" className="st0" width="0.9" height="0.9"/>
		<rect x="80.3" y="126.8" className="st0" width="0.4" height="0.4"/>
		<rect x="82.3" y="126.8" className="st0" width="0.6" height="0.6"/>
		<rect x="82.2" y="122.4" className="st0" width="0.9" height="0.9"/>
		<rect x="82.3" y="124.6" className="st0" width="0.7" height="0.7"/>
		<rect x="82.4" y="129" className="st0" width="0.4" height="0.4"/>
		<rect x="81.4" y="130.1" className="st0" width="0.3" height="0.3"/>
		<rect x="82.5" y="131.1" className="st0" width="0.3" height="0.3"/>

		<path className="letter t" d="M56.8,105v9.5l6.2,6.2H68v26.6l6.2,6.2h10.4v-32.8h10.9v-9.5l-6.2-6.2H56.8z M60.2,115.5h-0.8v-0.7h0.8V115.5
			z M61.2,116.6h-0.8v-0.8h0.8V116.6z M62.3,117.7h-0.8v-0.8h0.8V117.7z M61.6,115.5v-0.6h0.7v0.6H61.6z M63.4,118.8h-0.8V118h0.8
			V118.8z M62.6,116.6v-0.7h0.7v0.7H62.6z M64.5,119.7h-0.8v-0.6h0.8V119.7z M64.4,117v0.7h-0.7V117H64.4z M63.8,115.4v-0.6h0.6v0.6
			H63.8z M65.5,118.7h-0.7V118h0.7V118.7z M64.9,116.5v-0.6h0.6v0.6H64.9z M66.6,119.7h-0.7v-0.6h0.7V119.7z M66.5,117v0.6h-0.6V117
			H66.5z M66,115.4v-0.5h0.5v0.5H66z M67.6,118.7H67v-0.6h0.6V118.7z M67.1,116.5V116h0.5v0.5H67.1z M83.6,121.2h-0.4v1h0.4v1.2
			h-0.4v0.9h0.4v1.3h-0.3v0.7h0.3v1.5h-0.2v0.6h0.2v1.6h-0.1v0.4h0.1v1.8h-0.1v0.3h0.1v20.1l-5.1-4.9v-20.4h0.1v-0.3h-0.1v-1.8h0.1
			v-0.4h-0.1v-1.6h0.2v-0.6h-0.2v-1.5h0.3v-0.7h-0.3V119h0.4v-0.9h-0.4V117h0.4v-1h0.7l0.3,0.3v0.7h-1v1h1v-1h0.7l0.3,0.3v0.7h-1v1
			h1v-1h0.7l0.3,0.3v0.7h-1v1h1v-1h0.7l0.3,0.3v0.7h-1v1h1v-1h0.5V121.2z M78.5,116v-1.1l0.4,0.4v0.7H78.5z M79.7,115.3v-0.4h0.4
			v0.4H79.7z M80.8,116.4V116h0.4v0.4H80.8z M81.8,115.4v-0.5h0.5v0.5H81.8z M82.2,117.1v0.4h-0.4v-0.4H82.2z M82.9,116.4V116h0.5
			v0.5H82.9z M83.3,118.2v0.4H83v-0.4H83.3z M84.4,119.6H84v-0.4h0.4V119.6z M84.5,117.5H84v-0.5h0.5V117.5z M84.5,115.4h-0.6v-0.5
			h0.6V115.4z M77.4,113.8v32.8h-8.3v-32.8H57.9v-7.7h30.7v7.7H77.4z M85.5,118.6h-0.5v-0.5h0.5V118.6z M85.6,116.5H85v-0.6h0.6
			V116.5z M86.6,119.7h-0.5v-0.5h0.5V119.7z M86.7,117.6h-0.6V117h0.6V117.6z M86.7,115.4H86v-0.6h0.7V115.4z M87.8,118.7h-0.6v-0.6
			h0.6V118.7z M87.8,116.5h-0.7v-0.7h0.7V116.5z M88.9,119.7h-0.6v-0.5h0.6V119.7z M88.9,117.6h-0.7v-0.7h0.7V117.6z M89,115.5h-0.8
			v-0.7H89V115.5z M90,118.7h-0.7V118H90V118.7z M90.1,116.6h-0.8v-0.8h0.8V116.6z M91.1,119.7h-0.7v-0.6h0.7V119.7z M91.1,117.7
			h-0.8v-0.8h0.8V117.7z M92.2,118.8h-0.8V118h0.8V118.8z M93.3,119.7h-0.8V119h0.8V119.7z M89.6,106.8l4.8,4.8v8.1l-4.8-4.8V106.8z
      "/>

		<rect x="81.3" y="127.9" className="st0" width="0.4" height="0.4"/>
		<rect x="81.2" y="123.5" className="st0" width="0.7" height="0.7"/>
		<rect x="81.3" y="125.7" className="st0" width="0.6" height="0.6"/>
		<rect x="79.2" y="125.8" className="st0" width="0.4" height="0.4"/>
		<rect x="131.5" y="135.2" className="st0" width="0.9" height="0.9"/>
		<rect x="128.3" y="142.6" className="st0" width="0.8" height="0.8"/>
		<rect x="131.5" y="137.3" className="st0" width="0.9" height="0.9"/>
		<rect x="128.3" y="144.8" className="st0" width="0.8" height="0.8"/>
		<rect x="130.4" y="129.8" className="st0" width="1" height="1"/>
		<rect x="130.4" y="136.2" className="st0" width="0.9" height="0.9"/>
		<rect x="130.4" y="132" className="st0" width="1" height="0.9"/>
		<rect x="130.4" y="134.1" className="st0" width="0.9" height="0.9"/>
		<rect x="127.3" y="145.8" className="st0" width="0.8" height="0.8"/>
		<rect x="127.3" y="147.9" className="st0" width="0.7" height="0.8"/>
		<rect x="127.3" y="143.7" className="st0" width="0.8" height="0.8"/>
		<rect x="127.3" y="141.6" className="st0" width="0.8" height="0.8"/>
		<rect x="127.3" y="139.4" className="st0" width="0.8" height="0.8"/>
		<rect x="127.3" y="137.3" className="st0" width="0.9" height="0.9"/>
		<rect x="129.4" y="135.2" className="st0" width="0.9" height="0.9"/>
		<rect x="129.4" y="141.5" className="st0" width="0.9" height="0.8"/>
		<rect x="129.4" y="139.4" className="st0" width="0.9" height="0.8"/>
		<rect x="128.3" y="134.1" className="st0" width="0.9" height="0.9"/>
		<rect x="128.3" y="136.2" className="st0" width="0.9" height="0.9"/>
		<rect x="129.4" y="137.3" className="st0" width="0.9" height="0.9"/>
		<rect x="128.3" y="138.4" className="st0" width="0.8" height="0.9"/>

		<path className="letter v" d="M120.5,125.7l-5.1-14.6L107,105H95.4l16,42.4l6.2,6.2h10.4l16.1-42.9l-5.6-5.7h-11.4L120.5,125.7z
			 M114.4,111.8l5.5,15.6l-2.3,7.1L108,107L114.4,111.8z M137.3,125.6h-0.6v1h0.2l-0.2,0.5v-0.5h-1v1h0.8l-0.4,1.1h-0.4v1h0.1
			l-0.1,0.3v-0.2h-1v1h0.7l-0.4,1.1h-0.3v0.7l-0.1,0.3h-0.9v1h0.6l-0.4,1.2h-0.1v0.3l-0.3,0.8h-0.7v0.9h0.4l-0.9,2.3h-0.6v0.9h0.3
			l-0.9,2.3h-0.4v0.8h0.1l-0.4,1v-0.7h-0.8v0.8h0.8l-0.5,1.3h-0.3v0.8l-0.3,0.7v-0.4h-0.8v0.8h0.6l-0.5,1.4h-0.1v0.3l-0.3,0.7h-0.8
			v0.7h0.5l-0.7,1.8l-0.6-0.7h0.5v-0.7h-0.7v0.4l-0.7-0.8h0.3v-0.7h-0.7v0.2l-0.5-0.6h0.1V149h-0.7v0l-0.3-0.4V148h-0.6l-0.3-0.4
			l0.4-1h0.5v-0.7h-0.3l0.9-2.4h0.4v-0.8h-0.1l0.9-2.4h0.3v-0.8l0.2-0.7v0.4h0.8v-0.8h-0.7l0.5-1.3h0.2v-0.5l0.2-0.5h0.9v-0.9h-0.5
			l0.4-1.2h0.1v-0.2l0.3-0.8h0.7V132h-0.4l0.9-2.2h0.6v-1H130l0.4-1v0.9h1v-1h-1l0.4-1.2h0.5v-1h-0.1l0.2-0.6v0.5h1v-1h-0.8l0.4-1.1
			h0.4v-1h1.1v-1.1h-0.7l0.4-1h0.3v1h1.1v-1h1v1h-1v1.1h1v1.1h1.1v1h1L137.3,125.6z M134.6,119.2v1h-1v-0.7l0.1-0.3H134.6z
			 M134,118.1l0.4-1h0.1v1H134z M135.6,116v1h-1v-0.5l0.2-0.5H135.6z M135.2,114.9l0.4-0.9v0.9H135.2z M135.6,118.2v1h-1v-1H135.6z
			 M136.6,112.9v1h-1v-0.1l0.3-0.9H136.6z M136.5,111.7l0.2-0.5v0.5H136.5z M136.7,115v1h-1v-1H136.7z M136.7,117.1v1h-1v-1H136.7z
			 M136.7,119.2v1h-1v-1H136.7z M136.7,121.3v1h-1v-1H136.7z M137.7,123.4h-1v-1h1V123.4z M137.7,121.3h-1v-1h1V121.3z M142.1,110.8
			h0.5l0.1,0.1l-0.3,0.7h-0.4V110.8z M141,109.8h0.6l0.3,0.3v0.6H141V109.8z M141,111.9h0.9v0.9H141V111.9z M141,114h0.6l-0.3,0.9
			H141V114z M140,108.7h0.6l0.3,0.3v0.6H140V108.7z M140,110.8h0.9v0.9H140V110.8z M139.9,112.9h0.9v0.9h-0.9V112.9z M139.9,115h0.9
			v0.9h-0.9V115z M139.9,117.1h0.5l-0.4,1h-0.1V117.1z M138.9,107.6h0.6l0.3,0.3v0.6h-0.9V107.6z M138.9,109.7h0.9v0.9h-0.9V109.7z
			 M138.9,111.9h0.9v0.9h-0.9V111.9z M138.9,114h1v1h-1V114z M138.9,116.1h1v1h-1V116.1z M138.9,118.2h1v0.5l-0.1,0.4h-0.8V118.2z
			 M138.8,120.3h0.4l-0.4,1h-0.1V120.3z M138.4,106.6h0.1l0.2,0.2v0.7H138L138.4,106.6z M137.8,108.7h0.9v0.9h-0.9V108.7z
			 M137.8,110.8h0.9v0.9h-0.9V110.8z M137.8,112.9h0.9v1h-0.9V112.9z M137.8,115h1v1h-1V115z M137.8,117.1h1v1h-1V117.1z
			 M137.8,119.2h1v1h-1V119.2z M137.8,121.3h1v0.2l-0.3,0.8h-0.7V121.3z M137.8,123.4h0.3l-0.3,0.8V123.4z M137.7,119.2h-1v-1h1
			V119.2z M137.7,116.1v1h-1v-1H137.7z M136.8,114.9v-1h1v1H136.8z M137.7,112.8h-1v-0.9h1V112.8z M137.7,110.7h-0.8l0.3-0.9h0.5
			V110.7z M137.4,106.1l-15.3,40.5h-10l-15.3-40.5h9.6l11.2,31.7l10.1-31.7H137.4z"/>

		<rect x="125.2" y="148" className="st0" width="0.7" height="0.7"/>
		<rect x="130.5" y="140.5" className="st0" width="0.8" height="0.9"/>
		<rect x="135.7" y="124.5" className="st0" width="1" height="1.1"/>
		<rect x="129.4" y="133" className="st0" width="0.9" height="0.9"/>
		<rect x="130.4" y="138.4" className="st0" width="0.9" height="0.9"/>
		<rect x="129.4" y="130.9" className="st0" width="0.9" height="1"/>
		<rect x="125.2" y="145.8" className="st0" width="0.8" height="0.8"/>
		<rect x="132.5" y="125.6" className="st0" width="1" height="1"/>
		<rect x="128.3" y="140.5" className="st0" width="0.8" height="0.8"/>
		<rect x="133.5" y="122.4" className="st0" width="1.1" height="1.1"/>
		<rect x="132.5" y="123.4" className="st0" width="1" height="1"/>
		<rect x="124.2" y="146.9" className="st0" width="0.7" height="0.7"/>
		<rect x="134.6" y="123.4" className="st0" width="1" height="1"/>
		<rect x="132.5" y="129.8" className="st0" width="1" height="1"/>
		<rect x="132.5" y="132" className="st0" width="1" height="0.9"/>
		<rect x="132.5" y="127.7" className="st0" width="1" height="1"/>
		<rect x="134.6" y="127.7" className="st0" width="1" height="1"/>
		<rect x="133.5" y="124.5" className="st0" width="1" height="1"/>
		<rect x="134.6" y="125.6" className="st0" width="1" height="1"/>
		<rect x="133.5" y="128.8" className="st0" width="1" height="1"/>
		<rect x="133.6" y="130.9" className="st0" width="1" height="1"/>
		<rect x="124.2" y="144.8" className="st0" width="0.7" height="0.8"/>
		<rect x="133.5" y="126.6" className="st0" width="1" height="1"/>
		<rect x="125.2" y="143.7" className="st0" width="0.8" height="0.8"/>
		<rect x="126.3" y="149" className="st0" width="0.7" height="0.7"/>
		<rect x="126.3" y="146.9" className="st0" width="0.7" height="0.7"/>
		<rect x="125.2" y="141.6" className="st0" width="0.8" height="0.8"/>
		<rect x="126.2" y="142.6" className="st0" width="0.8" height="0.8"/>
		<rect x="126.2" y="140.5" className="st0" width="0.8" height="0.8"/>
		<rect x="131.5" y="133" className="st0" width="0.9" height="1"/>
		<rect x="126.3" y="144.8" className="st0" width="0.8" height="0.8"/>
		<rect x="131.5" y="130.9" className="st0" width="1" height="1"/>
		<rect x="132.5" y="134.1" className="st0" width="0.9" height="0.9"/>
		<rect x="131.4" y="128.8" className="st0" width="1" height="1"/>
		<rect x="131.4" y="126.7" className="st0" width="1" height="1"/>
		<rect x="157.8" y="137.3" className="st0" width="0.4" height="0.4"/>
		<rect x="157.7" y="135" className="st0" width="0.7" height="0.8"/>
		<rect x="158.7" y="136" className="st0" width="0.7" height="0.7"/>

		<path className="letter e" d="M181.2,119.3v-8.1L175,105h-28.2v42.4l6.2,6.2h29v-9.3l-6.2-6.2h-13.1v-2.4h15.7v-8.3l-6.2-6.2h-9.5v-1.8
			H181.2z M174.2,133.8h-0.8V133h0.8V133.8z M175.3,134.9h-0.8v-0.8h0.8V134.9z M172.5,122.9l4.8,4.8v7.2l-4.8-4.3V122.9z
			 M172.4,131.9h0.8v0.8h-0.8V131.9z M172.4,134.1h0.8v0.8h-0.8V134.1z M162.9,116.3h-0.4v-0.4h0.4V116.3z M164,117.4h-0.4V117h0.4
			V117.4z M164,115.3h-0.5v-0.5h0.5V115.3z M165,118.5h-0.4v-0.4h0.4V118.5z M165.1,116.3h-0.5v-0.5h0.5V116.3z M166.2,117.4h-0.5
			V117h0.5V117.4z M166.3,115.3h-0.6v-0.6h0.6V115.3z M167.3,118.5h-0.5V118h0.5V118.5z M167.3,116.4h-0.6v-0.6h0.6V116.4z
			 M168.4,117.5h-0.6v-0.6h0.6V117.5z M168.5,115.4h-0.7v-0.7h0.7V115.4z M169.5,118.6h-0.6V118h0.6V118.6z M169.6,116.5h-0.7v-0.7
			h0.7V116.5z M170.6,117.5h-0.7v-0.7h0.7V117.5z M170.7,115.4h-0.8v-0.8h0.8V115.4z M171.7,118.6H171v-0.7h0.7V118.6z M171.8,116.5
			H171v-0.8h0.8V116.5z M172.9,117.6H172v-0.8h0.8V117.6z M172.9,115.4H172v-0.8h0.8V115.4z M174,118.7h-0.8v-0.8h0.8V118.7z
			 M174,116.5h-0.8v-0.8h0.8V116.5z M175,117.6h-0.8v-0.8h0.8V117.6z M177.2,117.6h-0.8v-0.8h0.8V117.6z M178.3,118.7h-0.8v-0.8h0.8
			V118.7z M175.3,106.8l4.8,4.8v6.9l-4.8-4.4V106.8z M175.3,115.7h0.8v0.8h-0.8V115.7z M175.3,117.9h0.8v0.8h-0.8V117.9z M175,114.6
			v0.8h-0.8v-0.8H175z M149.2,148.3h-0.3V148h0.3V148.3z M150.3,149.3H150V149h0.3V149.3z M151.3,150.4H151v-0.3h0.3V150.4z
			 M151.4,148.3H151v-0.4h0.4V148.3z M152.4,151.5h-0.3v-0.3h0.3V151.5z M152.5,149.3h-0.4V149h0.4V149.3z M153.5,152.6h-0.3v-0.3
			h0.3V152.6z M153.6,150.4h-0.4v-0.4h0.4V150.4z M153.6,148.3h-0.5v-0.5h0.5V148.3z M154.6,151.5h-0.4v-0.4h0.4V151.5z
			 M154.7,149.4h-0.5v-0.5h0.5V149.4z M155.7,152.6h-0.4v-0.4h0.4V152.6z M155.8,150.5h-0.5V150h0.5V150.5z M155.9,148.4h-0.6v-0.6
			h0.6V148.4z M156.9,151.6h-0.5v-0.5h0.5V151.6z M156.9,149.5h-0.6v-0.6h0.6V149.5z M158,152.7h-0.5v-0.5h0.5V152.7z M158,150.6
			h-0.6V150h0.6V150.6z M158,148.3h-0.7v-0.6h0.7V148.3z M159.1,151.6h-0.6V151h0.6V151.6z M159.1,149.5h-0.7v-0.7h0.7V149.5z
			 M160.2,152.7h-0.6v-0.5h0.6V152.7z M160.2,150.6h-0.7v-0.7h0.7V150.6z M160.3,148.4h-0.8v-0.7h0.8V148.4z M161.3,151.7h-0.7V151
			h0.7V151.7z M161.4,149.6h-0.8v-0.8h0.8V149.6z M162.4,152.7h-0.7v-0.6h0.7V152.7z M162.4,150.6h-0.8v-0.8h0.8V150.6z
			 M161.6,148.4v-0.7h0.8v0.7H161.6z M163.5,151.7h-0.8v-0.8h0.8V151.7z M162.7,149.6v-0.8h0.8v0.8H162.7z M164.6,149.8v0.8h-0.8
			v-0.8H164.6z M163.8,148.4v-0.8h0.8v0.8H163.8z M164.6,152.7h-0.8V152h0.8V152.7z M165.7,151.7h-0.8v-0.8h0.8V151.7z M165.7,149.6
			h-0.8v-0.8h0.8V149.6z M166.8,152.8H166V152h0.8V152.8z M165.9,148.5v-0.8h0.8v0.8H165.9z M166.8,150.6H166v-0.8h0.8V150.6z
			 M167.9,151.7h-0.8v-0.8h0.8V151.7z M167,149.6v-0.8h0.8v0.8H167z M168.9,149.8v0.8h-0.8v-0.8H168.9z M168.1,148.5v-0.8h0.8v0.8
			H168.1z M168.9,152.8h-0.8V152h0.8V152.8z M170,151.7h-0.8v-0.8h0.8V151.7z M170,149.6h-0.8v-0.8h0.8V149.6z M171.1,152.8h-0.8
			V152h0.8V152.8z M170.2,148.5v-0.8h0.8v0.8H170.2z M171.1,150.6h-0.8v-0.8h0.8V150.6z M172.2,151.7h-0.8v-0.8h0.8V151.7z
			 M171.3,149.6v-0.8h0.8v0.8H171.3z M173.2,149.8v0.8h-0.8v-0.8H173.2z M172.4,148.5v-0.8h0.8v0.8H172.4z M173.2,152.8h-0.8V152
			h0.8V152.8z M174.3,151.7h-0.8v-0.8h0.8V151.7z M174.3,149.6h-0.8v-0.8h0.8V149.6z M175.4,152.8h-0.8V152h0.8V152.8z M176.5,151.7
			h-0.8v-0.8h0.8V151.7z M177.5,152.8h-0.8V152h0.8V152.8z M176.7,150.6v-0.8h0.8v0.8H176.7z M178.6,151.7h-0.8v-0.8h0.8V151.7z
			 M179.7,152.8h-0.8V152h0.8V152.8z M176.2,139.9l4.8,4.8v7.9l-4.8-4.9V139.9z M175.6,148.8h0.8v0.8h-0.8V148.8z M175.4,150.6h-0.8
			v-0.8h0.8V150.6z M175.3,148.5h-0.8v-0.8h0.8V148.5z M163.2,133.6h-0.4v-0.4h0.4V133.6z M163.3,131.5h-0.5V131h0.5V131.5z
			 M164.3,134.7h-0.4v-0.4h0.4V134.7z M164.3,132.6h-0.5v-0.5h0.5V132.6z M165.4,133.7h-0.5v-0.5h0.5V133.7z M165.5,131.5h-0.6V131
			h0.6V131.5z M166.5,134.7H166v-0.5h0.5V134.7z M166.6,132.6H166V132h0.6V132.6z M167.7,133.7h-0.6v-0.6h0.6V133.7z M167.7,131.6
			H167v-0.7h0.7V131.6z M168.7,134.8h-0.6v-0.6h0.6V134.8z M168.8,132.7h-0.7V132h0.7V132.7z M169.9,133.8h-0.7v-0.7h0.7V133.8z
			 M169.9,131.6h-0.8v-0.8h0.8V131.6z M171,134.9h-0.7v-0.7h0.7V134.9z M171,132.7h-0.8v-0.8h0.8V132.7z M172.1,133.8h-0.8V133h0.8
			V133.8z M172.1,131.6h-0.8v-0.8h0.8V131.6z M171.5,122.2v7.6h-15.4v9.3h19v7.5h-27.2v-40.5h26.4v7.4h-18.2v8.7H171.5z
			 M161.8,134.7v-0.3h0.3v0.3H161.8z M162,136.1v0.8h-0.2v-0.8H162z M161.7,132.5v-0.4h0.4v0.4H161.7z M157.1,133.9v-1.2h0.4v1.1h1
			v1h1.1v1.1h1.1v1h1v1.1h-4.6v-3.4h0.2v-0.7H157.1z M157.1,131.6v-0.8h0.2v0.8H157.1z M157.5,132.7v-0.8h0.8v0.8H157.5z
			 M158.8,131.4h-0.3v-0.3h0.3V131.4z M159.4,132.9v0.8h-0.8v-0.8H159.4z M159.9,132.5h-0.3v-0.3h0.3V132.5z M160.5,134v0.8h-0.8
			V134H160.5z M160.7,135h0.8v0.8h-0.8V135z M160.7,133.6v-0.3h0.3v0.3H160.7z M161,131.4h-0.4v-0.4h0.4V131.4z M159.8,120.4v0.7
			h-2.6v-3.2h0.2v-0.7h-0.2V116h0.4v1.1h1v1h1.1v1.1h1.1v1h1v0.9h-1.2v-0.7H159.8z M157.1,114.9v-0.4h0.2v0.4H157.1z M157.5,116
			v-0.8h0.8v0.8H157.5z M159.4,116.2v0.8h-0.8v-0.8H159.4z M159.3,115.2v-0.3h0.3v0.3H159.3z M160.5,117.3v0.8h-0.8v-0.8
			L160.5,117.3z M160.4,116.3V116h0.3v0.3H160.4z M160.7,119.1v-0.8h0.8v0.8H160.7z M161.4,117.4v-0.3h0.3v0.3H161.4z M161.4,115.2
			v-0.4h0.4v0.4H161.4z M161.8,119.4h0.2v0.8h-0.2V119.4z M162.5,118.5v-0.3h0.3v0.3H162.5z"/>

		<rect x="158.7" y="119.3" className="st0" width="0.7" height="0.7"/>
		<rect x="159.8" y="137.1" className="st0" width="0.7" height="0.7"/>
		<rect x="157.8" y="120.5" className="st0" width="0.4" height="0.4"/>
		<rect x="157.7" y="118.2" className="st0" width="0.7" height="0.8"/>
		<rect x="200.6" y="121.1" className="st0" width="0.9" height="0.9"/>
		<rect x="195.5" y="124.5" className="st0" width="0.4" height="0.4"/>
		<rect x="195.5" y="122.4" className="st0" width="0.5" height="0.5"/>
		<rect x="197.5" y="122.3" className="st0" width="0.6" height="0.6"/>
		<rect x="196.6" y="127.8" className="st0" width="0.3" height="0.3"/>
		<rect x="195.6" y="126.7" className="st0" width="0.3" height="0.3"/>
		<rect x="197.6" y="124.5" className="st0" width="0.5" height="0.5"/>
		<rect x="197.6" y="126.7" className="st0" width="0.4" height="0.4"/>
		<rect x="197.7" y="128.8" className="st0" width="0.3" height="0.3"/>
		<rect x="196.5" y="121.2" className="st0" width="0.6" height="0.6"/>
		<rect x="196.6" y="125.6" className="st0" width="0.4" height="0.4"/>
		<rect x="197.5" y="120.1" className="st0" width="0.7" height="0.8"/>
		<rect x="198.6" y="123.4" className="st0" width="0.6" height="0.6"/>
		<rect x="198.5" y="121.2" className="st0" width="0.7" height="0.7"/>
		<rect x="198.5" y="119" className="st0" width="0.9" height="0.9"/>
		<rect x="194.5" y="125.6" className="st0" width="0.3" height="0.3"/>
		<rect x="199.6" y="122.3" className="st0" width="0.7" height="0.7"/>
		<rect x="198.7" y="125.6" className="st0" width="0.5" height="0.5"/>
		<rect x="199.5" y="120.1" className="st0" width="0.9" height="0.9"/>
		<rect x="200.5" y="119" className="st0" width="1" height="1"/>
		<rect x="197.4" y="117.9" className="st0" width="0.9" height="0.9"/>

		<path className="letter c" d="M224.2,142.1l-6.3-6.3c-2.9,1.7-6.7,2.7-10.3,2.7c-2.2,0-4.2-0.4-6-1.1c-1.2-1.6-1.8-3.4-1.8-6.3
			c0-7.3,4.9-11.9,12.7-11.9c4.2,0,9.3,2.3,11.7,4.1V113l-5.9-6c-2.6-1.7-7.5-2.9-12.2-2.9c-12.8,0-22.5,9.7-22.5,22.4
			c0,6.5,2.7,12.1,6.9,16.3l4.6,4.6c4.6,4.6,10.3,6.9,16.9,6.9c4,0,9.4-0.8,12.1-2.3V142.1z M203.6,120.7l-0.5,0.4h-0.5v0.4
			l-0.7,0.7h-0.3v0.4l-0.6,0.7h-0.4v0.6l-0.4,0.7v-0.1h-0.6v0.6h0.4c-0.4,0.8-0.7,1.7-1,2.7h-0.4v0.4h0.3c-0.2,0.7-0.3,2.2-0.3,3
			c0,2.2,0.3,3.9,1,5.3c-3.2-2.1-5.2-5.5-5.2-10.4c0-0.7,0.1-1.4,0.1-2.1h0.3v-0.4h-0.2c0.2-1,0.4-1.8,0.8-2.6h0.6v-0.6h-0.3
			c0.2-0.4,0.4-0.7,0.6-1v0.7h0.8v-0.7h-0.7c0.5-0.8,1.2-1.5,1.9-2.1v0.9h1v-1h1v1h-1v1h1v-1h1v1.1h1.1v1h-1v1h1v-1h1V120.7z
			 M198.6,116.8c0.3-0.2,0.5-0.4,0.8-0.6v0.6H198.6z M200.5,116.8v-0.9h0.9v0.9H200.5z M202.5,116.9v0.9h-0.9v-0.9H202.5z
			 M201.7,115.6v-0.5l0.7-0.2h0.1v0.8H201.7z M203.6,118v0.9h-0.9V118H203.6z M202.7,116.7v-0.8h0.7v0.8H202.7z M204.6,119.9h-0.9
			V119h0.9V119.9z M204.5,117v0.7h-0.8V117H204.5z M203.9,115.5v-0.6h0.6v0.6H203.9z M205.6,118.8h-0.8V118h0.8V118.8z M205.5,116
			v0.6h-0.6V116H205.5z M205,114.4v-0.1l0.5,0v0.2H205z M206.6,119.1l-0.7,0.3V119L206.6,119.1L206.6,119.1z M206.6,117.1v0.6H206
			v-0.6H206.6z M206.1,115.5V115h0.4v0.5H206.1z M207.6,118.7H207v-0.6h0.6V118.7z M207.6,116.1v0.5h-0.5v-0.5H207.6z M207.2,114.4
			v-0.2h0.3v0.2H207.2z M208.6,117.6h-0.4v-0.4h0.4V117.6z M208.2,115.4v-0.3h0.3v0.3H208.2z M209.7,118.3l-0.5,0.1v-0.2h0.5V118.3z
			 M209.3,116.5v-0.3h0.3v0.3H209.3z M210.7,117.5h-0.3v-0.3h0.3V117.5z M218.2,108.6l4.8,4.9v7.9l-4.8-4.6V108.6z M211.2,149.5H211
			v-0.3h0.3V149.5z M212.3,150.6h-0.3v-0.3h0.3V150.6z M212.4,148.5H212v-0.4l0.1,0h0.3V148.5z M213.4,151.7h-0.3v-0.3h0.3V151.7z
			 M213.5,149.6h-0.4v-0.4h0.4V149.6z M214.5,152.8h-0.3v-0.3h0.3V152.8z M214.6,150.7h-0.4v-0.4h0.4V150.7z M214.7,148.6h-0.6V148
			h0.6V148.6z M215.7,151.8h-0.4v-0.4h0.4V151.8z M215.7,149.7h-0.5v-0.5h0.5V149.7z M215.8,147.6h-0.7v-0.1l0.7-0.2V147.6z
			 M216.8,152.9h-0.4v-0.4h0.4V152.9z M216.8,150.8h-0.6v-0.6h0.6V150.8z M216.9,148.6h-0.7V148h0.7V148.6z M217.2,145.5
			c-2.5,1.3-7,2.1-11.1,2.1c-12.2,0-21.4-9.1-21.4-21.1c0-12.1,9.2-21.3,21.5-21.3c4.2,0,8.6,1,11.1,2.4v7.9
			c-2.5-1.4-6.2-2.5-10-2.5c-8.3,0-13.8,5.1-13.8,13.2c0.1,8,5.7,13.3,14.1,13.3c3.3,0,6.8-0.8,9.6-2.3V145.5z M217.9,151.8h-0.5
			v-0.5h0.5V151.8z M218,149.7h-0.7v-0.7h0.7V149.7z M218,147.6h-0.8v-0.8h0.8V147.6z M219,152.6l-0.5,0.1v-0.3h0.5V152.6z
			 M219.1,150.8h-0.7v-0.7h0.7V150.8z M219.1,148.7h-0.8v-0.8h0.8V148.7z M220.2,151.9h-0.7v-0.7h0.7V151.9z M220.2,149.8h-0.8V149
			h0.8V149.8z M221.3,150.9h-0.8v-0.8h0.8V150.9z M222.4,151.7l-0.8,0.2v-0.7h0.8V151.7z M223.1,151.1l-4.8-5.1v-8.4l4.8,4.8V151.1z
			"/>

		<rect x="196.5" y="123.4" className="st0" width="0.5" height="0.5"/>

		<path className="letter k" d="M256.1,125.2l13-15l-5.3-5.2L252,105l-7.5,8.9v-2.6l-5.6-6.2h-10.2v42.4l6.5,6.2h9.8v-18.5l7.9,12.4l9.5,6.1
			h12.6L256.1,125.2z M256.9,122.7l-0.7,0.8H256v-1h0.9V122.7z M256.9,121.3H256v-0.9h0.9V121.3z M256.8,116.3v0.8H256v-0.8H256.8z
			 M256.2,114.9l0.7-0.7v0.7H256.2z M256.8,118.3v0.9H256v-0.9H256.8z M257.1,122.4L257.1,122.4l-0.1-0.9h0.8L257.1,122.4z
			 M257.9,120.2h-0.8v-0.8h0.8V120.2z M257.9,118.1h-0.8v-0.8h0.8V118.1z M257.9,115.2v0.8h-0.8v-0.8H257.9z M257.1,113.8l0.7-0.8
			h0.1v0.8H257.1z M258.1,121.2v-0.8h0.7L258.1,121.2z M259,119.2h-0.8v-0.8h0.8V119.2z M258.9,114.1v0.8h-0.8v-0.8H258.9z
			 M258.2,112.8v-0.1l0.5-0.6h0.2v0.7H258.2z M258.9,116.3v0.8h-0.8v-0.8H258.9z M259.2,120v-0.6h0.5L259.2,120z M260,118.1h-0.8
			v-0.8h0.8V118.1z M260,116h-0.8v-0.8h0.8V116z M260,113.1v0.8h-0.7v-0.8H260z M259.2,111.7v-0.3l0.4-0.4h0.4v0.7H259.2z
			 M260.3,118.7v-0.4h0.4L260.3,118.7z M261.1,117.1h-0.8v-0.8h0.8V117.1z M261.1,112v0.7h-0.8V112H261.1z M260.3,110.7v-0.5
			l0.2-0.2h0.5v0.7H260.3z M261.1,114.1v0.8h-0.8v-0.8H261.1z M261.3,117.5v-0.2h0.2L261.3,117.5z M262.1,116h-0.8v-0.8h0.8V116z
			 M262.1,111v0.7h-0.7V111H262.1z M261.4,109.6v-0.7l0,0h0.7v0.7H261.4z M262.1,113.1v0.7h-0.7v-0.7H262.1z M263.2,114.9h-0.8v-0.8
			h0.8V114.9z M266.7,109.9h0.7l0,0v0.6l-0.1,0.1h-0.6V109.9z M265.6,108.9h0.7v0.7h-0.7V108.9z M265.6,111h0.7v0.7h-0.7V111z
			 M264.6,107.8h0.7v0.7h-0.7V107.8z M264.6,109.9h0.7v0.7h-0.7V109.9z M264.5,112h0.7v0.7h-0.7V112z M263.5,106.8h0.7v0.7h-0.7
			V106.8z M263.5,108.9h0.7v0.7h-0.7V108.9z M263.5,111h0.7v0.7h-0.7V111z M263.5,113.1h0.8v0.7h-0.8V113.1z M263.2,112.8h-0.7V112
			h0.7V112.8z M262.4,110.7v-0.7h0.7v0.7H262.4z M263.1,108.5h-0.7v-0.7h0.7V108.5z M242.5,110.5l0.5,0.5h-0.5V110.5z M242.5,112.4
			h0.9v0.9h-0.9V112.4z M242.4,114.4h1v0.8l-0.1,0.1h-0.9V114.4z M241.4,109.4l0.5,0.6h-0.5V109.4z M241.4,111.3h0.9v0.9h-0.9V111.3
			z M241.3,113.4h1v1h-1V113.4z M240.3,108.2L240.3,108.2l0.7,0.7h-0.7V108.2z M240.3,110.2h0.9v0.9h-0.9V110.2z M240.2,112.3h1v1
			h-1V112.3z M239.3,107.1L239.3,107.1l0.7,0.7h-0.7V107.1z M239.2,109.1h0.9v0.9h-0.9V109.1z M239.2,111.2h0.9v1h-0.9V111.2z
			 M239.2,117.5h0.9v-0.9h-0.9v-1.2h0.9v-1h-0.9v-1.1h1v1.1h1.1v1.1h1.1v1l0,0.1h-1v1h0.1l-0.3,0.3v-0.2h-0.9v0.9h0.3l-0.6,0.7v-0.4
			h-0.8v0.8h0.5l-0.6,0.7V117.5z M244.1,141.4h-0.8v1.1h0.8v1.2h-0.7v0.8h0.7v8l-4.8-4.8v-7.4h0.7v-0.8h-0.7v-1.2h0.8v-1h1v1h-1v1.1
			h1v-1h1v1h-0.9v1h1v-0.9h1v1h-1v1h1.1v-1h0.8V141.4z M239.8,134.2v0.7h-0.6v-0.7H239.8z M239.4,132.7l0.3-0.4v0.4H239.4z
			 M240,136.3v1h-0.7v-1H240z M240.9,135.3v0.7h-0.7v-0.7H240.9z M240.3,133.8v-0.5h0.5v0.5H240.3z M242,136.3v0.7h-0.7v-0.7H242z
			 M241.4,134.9v-0.5h0.5v0.5H241.4z M243,137.4v0.7h-0.7v-0.7H243z M242.4,135.9v-0.5h0.5v0.5H242.4z M244.1,139.2h-0.7v-0.7h0.7
			V139.2z M243.5,137v-0.5h0.5v0.5H243.5z M253.8,146.6l-11.9-18.5l-3.7,4.4v14.1h-8.3v-40.5h8.3v17l14.3-17l10-0.1l-14.3,16.5
			l16,24.1H253.8z M255.8,117.3v0.8H255v-0.8H255.8z M255.3,116l0.5-0.6v0.6H255.3z M255.8,119.4v0.8H255v-0.8H255.8z M255.8,121.5
			v0.9h-0.9v-0.9H255.8z M254.7,118.3v0.9h-0.8v-0.9H254.7z M254.3,117.1l0.4-0.4v0.4H254.3z M254.8,120.4v0.9h-0.9v-0.9H254.8z
			 M254.8,122.6v1h-1v-1H254.8z M252.8,120.2v-0.8h0.9v0.8H252.8z M253.7,121.5v0.9h-0.9v-0.9H253.7z M253.4,118.1l0.2-0.3v0.3
			H253.4z M252.5,119.2l0.1-0.1v0.1H252.5z M252.6,120.4v0.9h-0.9v-0.9H252.6z M251.6,121.5v0.9h-0.9v-0.9H251.6z M252.2,126.5h0.3
			v-0.7h-0.7v0.2l-0.3-0.4h0v-0.8H251l-0.4-0.7v-0.5h-0.3l-0.7-1h1v1h1.1v-1h1v1h-1v1h1v-1h1.1v1h1v-1h1.1v0.2l-0.8,0.9h-0.2v0.3
			l-0.2,0.2l0.2,0.3v0.2h0.1l1.6,2.4h-0.5v0.6h0.6v-0.5l0.7,1h-0.1v0.5h0.5l15.2,22.6l-6.7-4.6L252.2,126.5z"/>


		<rect x="257.3" y="131.3" className="st0" width="0.3" height="0.3"/>
		<rect x="241.2" y="141.5" className="st0" width="0.8" height="0.8"/>
		<rect x="241.5" y="146" className="st0" width="0.3" height="0.3"/>
		<rect x="256.2" y="130.2" className="st0" width="0.4" height="0.4"/>
		<rect x="242.3" y="142.6" className="st0" width="0.8" height="0.8"/>
		<rect x="241.4" y="143.8" className="st0" width="0.6" height="0.6"/>
		<rect x="252.8" y="124.7" className="st0" width="0.9" height="0.9"/>
		<rect x="255.1" y="126.9" className="st0" width="0.7" height="0.7"/>
		<rect x="252.9" y="126.9" className="st0" width="0.6" height="0.6"/>
		<rect x="255.1" y="129.1" className="st0" width="0.5" height="0.4"/>
		<rect x="253.9" y="125.8" className="st0" width="0.8" height="0.8"/>
		<rect x="254" y="128" className="st0" width="0.5" height="0.5"/>
		<rect x="240.3" y="142.7" className="st0" width="0.6" height="0.6"/>
		<rect x="242.4" y="144.8" className="st0" width="0.6" height="0.6"/>
		<rect x="239.4" y="143.9" className="st0" width="0.3" height="0.3"/>
		<rect x="240.3" y="115.5" className="st0" width="1" height="1"/>
		<rect x="240.2" y="140.5" className="st0" width="0.8" height="0.8"/>
		<rect x="239.3" y="141.7" className="st0" width="0.6" height="0.6"/>
		<rect x="240.4" y="145" className="st0" width="0.3" height="0.3"/>
		<rect x="242.6" y="147.1" className="st0" width="0.3" height="0.3"/>
		<rect x="243.5" y="145.9" className="st0" width="0.6" height="0.6"/>
		<rect x="243.6" y="148.1" className="st0" width="0.3" height="0.3"/>
		<rect x="286.1" y="116.3" className="st0" width="1" height="1"/>
		<rect x="287.3" y="123.8" className="st0" width="0.7" height="0.7"/>
		<rect x="286.2" y="118.4" className="st0" width="0.9" height="0.9"/>
		<rect x="286.2" y="120.6" className="st0" width="0.7" height="0.7"/>
		<rect x="287.5" y="128.2" className="st0" width="0.4" height="0.4"/>
		<rect x="286.3" y="122.8" className="st0" width="0.7" height="0.7"/>
		<rect x="286.3" y="124.9" className="st0" width="0.5" height="0.5"/>
		<rect x="287.5" y="130.3" className="st0" width="0.3" height="0.3"/>
		<rect x="287.3" y="121.6" className="st0" width="0.8" height="0.8"/>
		<rect x="288.6" y="131.4" className="st0" width="0.3" height="0.3"/>
		<rect x="288.5" y="127" className="st0" width="0.5" height="0.5"/>
		<rect x="288.5" y="129.2" className="st0" width="0.4" height="0.4"/>
		<rect x="287.2" y="119.5" className="st0" width="0.9" height="0.9"/>
		<rect x="287.2" y="117.3" className="st0" width="1" height="1"/>
		<rect x="286.5" y="129.3" className="st0" width="0.3" height="0.3"/>
		<rect x="285.4" y="126.1" className="st0" width="0.4" height="0.4"/>
		<rect x="284.2" y="120.6" className="st0" width="0.7" height="0.7"/>
		<rect x="285.4" y="128.2" className="st0" width="0.3" height="0.3"/>
		<rect x="284.2" y="122.8" className="st0" width="0.5" height="0.5"/>
		<rect x="286.4" y="127.1" className="st0" width="0.4" height="0.4"/>
		<rect x="284.3" y="127.2" className="st0" width="0.3" height="0.3"/>
		<rect x="284.3" y="125" className="st0" width="0.4" height="0.4"/>
		<rect x="285.1" y="115.2" className="st0" width="1" height="1"/>
		<rect x="285.1" y="117.4" className="st0" width="0.9" height="0.9"/>
		<rect x="288.4" y="124.9" className="st0" width="0.7" height="0.7"/>
		<rect x="285.2" y="119.5" className="st0" width="0.8" height="0.8"/>
		<rect x="285.2" y="121.7" className="st0" width="0.7" height="0.7"/>
		<rect x="285.3" y="123.9" className="st0" width="0.5" height="0.5"/>
		<rect x="287.4" y="126" className="st0" width="0.5" height="0.5"/>

		<path className="letter l" d="M273.6,147.3l6.2,6.2H308V144l-6.2-6.2h-11.5v-26.5l-6.5-6.2h-10.1V147.3z M283.5,148.1h-0.3v-0.3h0.3V148.1z
			 M284.6,149.2h-0.3v-0.3h0.3V149.2z M285.7,150.3h-0.3V150h0.3V150.3z M285.7,148.1h-0.4v-0.4h0.4V148.1z M286.8,151.4h-0.3v-0.3
			h0.3V151.4z M286.8,149.2h-0.4v-0.4h0.4V149.2z M287.8,152.4h-0.3v-0.3h0.3V152.4z M287.9,150.3h-0.4v-0.4h0.4V150.3z M288,148.2
			h-0.5v-0.5h0.5V148.2z M289,151.4h-0.4V151h0.4V151.4z M289,149.2h-0.5v-0.5h0.5V149.2z M290.1,152.5h-0.4v-0.4h0.4V152.5z
			 M290.1,150.3h-0.5v-0.5h0.5V150.3z M290.2,148.2h-0.6v-0.5h0.6V148.2z M291.2,151.4h-0.5v-0.5h0.5V151.4z M291.3,149.3h-0.6v-0.6
			h0.6V149.3z M292.3,152.5h-0.5V152h0.5V152.5z M292.4,150.4h-0.6v-0.6h0.6V150.4z M292.4,148.3h-0.7v-0.6h0.7V148.3z M293.4,151.5
			h-0.6v-0.6h0.6V151.5z M293.5,149.4h-0.7v-0.7h0.7V149.4z M294.5,152.5h-0.6V152h0.6V152.5z M294.6,150.4h-0.7v-0.7h0.7V150.4z
			 M294.6,148.3h-0.8v-0.7h0.8V148.3z M295.7,151.5H295v-0.7h0.7V151.5z M295.7,149.4h-0.8v-0.8h0.8V149.4z M296.7,152.5h-0.7v-0.6
			h0.7V152.5z M296.8,150.5H296v-0.8h0.8V150.5z M296.8,148.3H296v-0.7h0.8V148.3z M297.9,151.6h-0.8v-0.8h0.8V151.6z M297.9,149.4
			h-0.8v-0.8h0.8V149.4z M299,152.5h-0.8v-0.7h0.8V152.5z M299,150.5h-0.8v-0.8h0.8V150.5z M298.2,148.3v-0.7h0.8v0.7H298.2z
			 M300.1,151.6h-0.8v-0.8h0.8V151.6z M299.3,149.4v-0.8h0.8v0.8H299.3z M303.3,152.5h-0.8v-0.7h0.8V152.5z M303.3,150.5h-0.8v-0.8
			h0.8V150.5z M304.4,151.6h-0.8v-0.8h0.8V151.6z M305.5,152.5h-0.8v-0.7h0.8V152.5z M302.1,139.6l4.8,4.8v8.1l-4.8-4.9V139.6z
			 M301.4,148.6h0.8v0.8h-0.8V148.6z M301.4,150.8h0.8v0.8h-0.8V150.8z M301.2,152.5h-0.8v-0.7h0.8V152.5z M300.3,150.5v-0.8h0.8
			v0.8H300.3z M301.1,148.3h-0.8v-0.7h0.8V148.3z M288.4,111.1h0.2l0.5,0.5v0.2h-0.7V111.1z M288.3,113.1h0.9v0.9h-0.9V113.1z
			 M288.2,115.2h1v1h-1V115.2z M287.3,110h0.2l0.6,0.5v0.2h-0.7V110z M287.3,112.1h0.9v0.9h-0.9V112.1z M287.2,114.1h1v1h-1V114.1z
			 M286.2,108.9h0.1l0.6,0.6v0.1h-0.7V108.9z M286.2,111h0.9v0.9h-0.9V111z M286.1,113.1h1v1h-1V113.1z M285.1,107.9h0.1l0.7,0.6
			v0.1h-0.8V107.9z M285.1,109.9h0.9v0.9h-0.9V109.9z M285,112h1v1h-1V112z M284.1,106.8L284.1,106.8l0.7,0.7v0h-0.7V106.8z
			 M284.1,108.9h0.8v0.9h-0.8V108.9z M284.1,110.9h0.9v1h-0.9V110.9z M284.1,119.2h0.8v-0.8h-0.8v-1.3h0.8v-0.9h-0.8v-1.2h0.9v-1
			h-0.9V113h0.9v1.1h1.1v1.1h1.1v1.1h1.1v1.1h1v1.1h-1v1h1v18.4h-5.1V119.2z M274.7,106.1h8.3v32.8h18v7.8h-26.3V106.1z"/>

		<rect x="288.4" y="122.7" className="st0" width="0.8" height="0.8"/>
		<rect x="288.3" y="120.5" className="st0" width="0.9" height="0.9"/>
		<rect x="322.2" y="147.9" className="st0" width="0.9" height="0.9"/>
		<rect x="323.3" y="146.8" className="st0" width="0.9" height="0.9"/>
		<rect x="322.3" y="150" className="st0" width="0.8" height="0.9"/>
		<rect x="322.2" y="145.7" className="st0" width="0.9" height="0.9"/>
		<rect x="323.3" y="148.9" className="st0" width="0.9" height="0.9"/>

		<path className="letter a hole" d="M324,131.2h13.1l-6.5-17.7L324,131.2z M329.4,119.8h0.2v0.6h-0.4L329.4,119.8z M328.9,121.8h0.7v0.7h-0.7
			V121.8z M328.9,123.9h0.8v0.8h-0.8V123.9z M328.9,126h0.9v0.9h-0.9V126z M328.2,122.9h0.4v0.8h-0.7L328.2,122.9z M327.8,124.9h0.9
			v0.9h-0.9V124.9z M327.8,127h1v1h-1V127z M327.7,124.2v0.6h-0.2L327.7,124.2z M327.1,125.9h0.6v1h-1L327.1,125.9z M327.7,129.1h-1
			v1.1h-1.1v-0.2l0.3-0.8h0.7v-1h-0.4l0.4-0.9v0.9h1V129.1z M328.8,130.1h-1v-1h1V130.1z M329.8,129h-1v-1h1V129z M335.5,130.1h-3.4
			l1.7-4.6L335.5,130.1z M332.8,125.2l-0.2,0.5h-0.5V125h0.7V125.2z M332.8,123.6h-0.6V123h0.6V123.6z M332,120.9h0.1l0.2,0.5H332
			V120.9z M331.2,119.8h0.5v0.5h-0.5V119.8z M331.1,121.9h0.6v0.6h-0.6V121.9z M331.1,124h0.7v0.7h-0.7V124z M331,126h0.8v0.8H331
			V126z M331,128.1h0.7l-0.3,0.9H331V128.1z M330.8,130.1h-1v-1h1V130.1z M330.8,127.9h-0.9v-0.9h0.9V127.9z M330.7,125.8H330V125
			h0.8V125.8z M330.7,123.6H330v-0.7h0.7V123.6z M330.6,121.5H330v-0.6h0.6V121.5z M330.6,119.3h-0.5v-0.5h0.5V119.3z"/>

		<rect x="321.2" y="144.7" className="st0" width="0.9" height="0.9"/>

		<path className="letter a" d="M336.4,105h-11.9l-15.7,42.3l5.7,6.3h9.8l2.9-8.3h13.2l0.8,2.2l7.3,6.1h11.7l-15.8-42.5L336.4,105z
			 M325.5,146.7h-0.2v0.5l-0.2,0.7h-0.7v0.9h0.4l-0.8,2.3h-0.7v0.8h0.4l-0.2,0.6h0l-2.1-2.7h0.6v-0.8h-0.8v0.5l-0.6-0.8h0.4v-0.8
			h-0.8v0.2l-0.2-0.3v-0.4l0.3-0.8h0.8v-0.9h-0.5l0.4-1.2h0.2v-0.5l0.2-0.5h0.9v-0.9h0.9v0.9h-0.9v1.1h1.1v1h1v1.1h1.1v-0.9h0.5
			L325.5,146.7z M321.7,142.5l0.3-0.9h0.1v0.9H321.7z M322.3,141.2v-0.6h0.6v0.6H322.3z M325,142.8v0.6h-0.6v-0.6H325z M324.9,141
			v-0.7h0.7v0.7H324.9z M325.2,144.8v0.9h-0.9v-0.9H325.2z M324.5,139.9h-0.7v-0.5h0.7V139.9z M324,141.7v0.6h-0.6v-0.6H324z
			 M324.1,143.7v0.9h-0.9v-0.9H324.1z M326.1,144.4h-0.6v-0.6h0.6V144.4z M326.8,142.1H326v-0.7h0.7V142.1z M326.8,139.9h-0.7v-0.5
			h0.7V139.9z M327.8,143.2h-0.7v-0.7h0.7V143.2z M327.9,141h-0.7v-0.7h0.7V141z M329,144.2h-0.7v-0.6h0.7V144.2z M329,142.1h-0.7
			v-0.7h0.7V142.1z M329,139.9h-0.7v-0.5h0.7V139.9z M330.1,143.2h-0.7v-0.7h0.7V143.2z M330.1,141h-0.7v-0.7h0.7V141z M331.2,144.2
			h-0.7v-0.6h0.7V144.2z M331.3,142.1h-0.7v-0.7h0.7V142.1z M331.3,139.9h-0.7v-0.5h0.7V139.9z M332.3,143.2h-0.7v-0.7h0.7V143.2z
			 M332.4,141h-0.7v-0.7h0.7V141z M333.5,144.2h-0.7v-0.6h0.7V144.2z M333.5,142.1h-0.7v-0.7h0.7V142.1z M333.5,139.9h-0.7v-0.5h0.7
			V139.9z M334.6,143.2h-0.7v-0.7h0.7V143.2z M334.6,141h-0.7v-0.7h0.7V141z M335.7,144.2H335v-0.6h0.7V144.2z M335.7,142.1H335
			v-0.7h0.7V142.1z M335.7,139.9H335v-0.5h0.7V139.9z M336.8,143.2h-0.7v-0.7h0.7V143.2z M336.8,141h-0.7v-0.7h0.7V141z
			 M337.9,144.2h-0.7v-0.6h0.7V144.2z M337.9,142.1h-0.7v-0.7h0.7V142.1z M337.9,139.9h-0.7v-0.5h0.7V139.9z M339,143.2h-0.7v-0.7
			h0.7V143.2z M338.3,141v-0.7h0.3l0.2,0.7H338.3z M339.4,144.2v-0.6h0.4l0.2,0.6H339.4z M342,146.6l-2.9-8.3h-17.1l-2.9,8.3h-8.9
			l15.1-40.5h10.6l15.1,40.5H342z M352.5,147.7l-15.1-40.6l6.1,4.7l15.1,40.7L352.5,147.7z"/>

		<rect x="321.2" y="146.8" className="st0" width="0.9" height="0.9"/>
		<rect x="393.9" y="129.3" className="st0" width="0.9" height="0.9"/>
		<rect x="372.3" y="140.9" className="st0" width="0.4" height="0.4"/>
		<rect x="372.1" y="138.6" className="st0" width="0.7" height="0.7"/>
		<rect x="371" y="137.5" className="st0" width="0.7" height="0.7"/>
		<rect x="373.3" y="142" className="st0" width="0.4" height="0.4"/>
		<rect x="392.8" y="128.2" className="st0" width="0.9" height="0.9"/>
		<rect x="371.2" y="139.9" className="st0" width="0.4" height="0.4"/>
		<rect x="392.9" y="126.1" className="st0" width="0.7" height="0.7"/>
    <rect x="393" y="124.1" className="st0" width="0.5" height="0.5"/>
    <rect x="394.2" y="123.1" className="st0" width="0.4" height="0.4"/>
		<rect x="373.1" y="139.6" className="st0" width="0.7" height="0.8"/>
		<rect x="395" y="130.3" className="st0" width="0.9" height="0.9"/>
		<rect x="395" y="128.3" className="st0" width="0.7" height="0.7"/>
		<rect x="391.8" y="127.1" className="st0" width="0.9" height="0.9"/>
		<rect x="394" y="127.2" className="st0" width="0.7" height="0.7"/>
		<rect x="394.2" y="121.1" className="st0" width="0.3" height="0.3"/>
		<rect x="395.2" y="124.2" className="st0" width="0.4" height="0.4"/>
		<rect x="394.1" y="125.2" className="st0" width="0.5" height="0.5"/>
		<rect x="395.1" y="126.2" className="st0" width="0.5" height="0.5"/>
		<rect x="397.3" y="126.3" className="st0" width="0.4" height="0.4"/>
		<rect x="395.3" y="122.1" className="st0" width="0.3" height="0.3"/>
		<rect x="396.3" y="123.2" className="st0" width="0.3" height="0.3"/>
		<rect x="397.4" y="124.3" className="st0" width="0.2" height="0.2"/>
		<rect x="396.1" y="129.3" className="st0" width="0.7" height="0.7"/>
		<rect x="396.2" y="127.3" className="st0" width="0.5" height="0.5"/>
		<rect x="396.3" y="125.3" className="st0" width="0.4" height="0.4"/>
		<rect x="373.1" y="123.1" className="st0" width="0.4" height="0.4"/>
		<rect x="389.6" y="135.5" className="st0" width="0.7" height="0.7"/>
		<rect x="392" y="137.4" className="st0" width="0.6" height="0.6"/>
		<rect x="393.1" y="138.2" className="st0" width="0.5" height="0.5"/>
		<rect x="389.6" y="137.4" className="st0" width="0.5" height="0.5"/>
		<rect x="388.5" y="134.5" className="st0" width="0.8" height="0.8"/>
		<rect x="390.7" y="136.5" className="st0" width="0.7" height="0.7"/>
		<rect x="375.5" y="144.1" className="st0" width="0.4" height="0.4"/>
		<rect x="390.9" y="138.3" className="st0" width="0.3" height="0.3"/>

		<path className="letter r hole" d="M377.5,113.5h-7.6v13h7.4c3.9,0,6.8-2.8,6.8-6.5C384.1,116.3,381.3,113.6,377.5,113.5z M380.8,117h0.3v0.3
			h-0.3V117z M379.7,115.9h0.3v0.3h-0.3V115.9z M379.7,118.1h0.4v0.4h-0.4V118.1z M378.6,114.8h0.3v0.3h-0.3V114.8z M378.5,116.9
			h0.4v0.4h-0.4V116.9z M377.4,115.9h0.4v0.4h-0.4V115.9z M377.4,118h0.6v0.6h-0.6V118z M376.3,114.7h0.4v0.4h-0.4V114.7z
			 M375.1,115.8h0.6v0.6h-0.6V115.8z M374,114.6h0.6v0.6H374V114.6z M374,116.8h0.6v0.6H374V116.8z M373.8,118.7h0.8v0.8h-0.8V118.7
			z M372.9,115.8h0.6v0.6h-0.6V115.8z M372.8,117.7h0.8v0.8h-0.8V117.7z M371.8,114.6h0.6v0.6h-0.6V114.6z M371.7,116.6h0.8v0.8
			h-0.8V116.6z M370.9,115.5h0.5v0.8h-0.5V115.5z M375.5,122.9H375v0.7h0.5v1.7h-4.5v-5.9h0.6v-0.7h-0.6v-1.2h0.7v1h1v1.1h1.1v1.1
			h1.1v1h0.7V122.9z M375.5,120.6h-0.6v-0.8h0.6V120.6z M375.8,118.6h-0.6V118h0.6V118.6z M376.2,116.8h0.6v0.6h-0.6V116.8z
			 M377.3,125.4h-0.7v-5.5h6.5C383,123.1,380.6,125.4,377.3,125.4z M382.2,118.4h-0.3v-0.3h0.3V118.4z"/>

		<path className="letter r" d="M399.4,125.3c0-4.2-1.4-7.2-4.9-10.7l-4.6-4.6c-3-3-7.3-5-12.5-5h-16.8v42.4l6.7,6.2h9.9v-14.3h1.1l4.3,8.3
			l9.7,6h11.9l-10.5-17.7C397.2,133.3,399.4,129.3,399.4,125.3z M393.7,134.3h-0.8v-0.8h0.8V134.3z M398.3,125.3
			c0,1.1-0.2,2.3-0.5,3.3v-0.2h-0.5v0.5h0.4c-0.3,0.9-0.7,1.7-1.2,2.5H396v0.6l-0.3,0.4h-0.9v1h-1v-1h1v-1h-1v1h-1v-1h1v-1h-1v1h-1
			v-1h1v-1h-1v1h-1v-1h1v-1h-1v1h-1v-0.2l0.7-0.8h0.3v-0.4l0.5-0.7h0.5v-0.8l0.3-0.5v0.1h0.7v-0.7h-0.4c0.4-0.9,0.7-1.8,0.9-2.6h0.4
			v-0.4h-0.3c0.2-0.9,0.3-1.8,0.3-2.7c0-2.4-0.4-3.8-1.2-5.6C397,118.5,398.3,121,398.3,125.3z M391.8,133.3v-0.8h0.8v0.8H391.8z
			 M392.6,134.6v0.7l-0.1,0.1h-0.7v-0.7H392.6z M390.8,132.2v-0.8h0.8v0.8H390.8z M391.5,133.5v0.7h-0.7v-0.7H391.5z M389.7,131.1
			v-0.8h0.8v0.8H389.7z M390.4,132.5v0.6h-0.7v-0.6H390.4z M376.1,152.5l-5.1-4.9v-11.3h0.9v1h1.1v1.1h1v1h1.1v1.1h1V152.5z
			 M370.9,135.3v-1h0.8v1H370.9z M371.9,136.3v-0.8h0.9v0.8H371.9z M373,137.4v-0.8h0.8v0.8H373z M374.1,138.4v-0.8h0.8v0.8H374.1z
			 M375.1,139.5v-0.8h0.8v0.8H375.1z M383.2,146.6l-6.9-13.4h-6.4v13.4h-8.2v-40.5h15.8c8.7,0,15,5.6,15,13.3
			c0,4.8-2.9,9.4-7.6,12.1l8.3,15.2H383.2z M388.7,130.1v-0.2l0.6-0.6h0.2v0.8H388.7z M389.3,131.5v0.7h-0.6v-0.7H389.3z
			 M388.3,130.4v0.7h-0.7v-0.3l0.4-0.4H388.3z M402.1,152.4l-7.3-4.7L389,137v-0.4h-0.2l-1.1-2.1h0.5v-0.9h-0.9v0.2l-0.2-0.4v-0.7
			h-0.4l-0.5-0.9l0.3-0.2h0.7v1h1.2v0.9h1.1v0.9h1.1v1h1.1v1h1.1l0.1,0.3v0.5h0.3L402.1,152.4z"/>

		<rect x="374.2" y="124.2" className="st0" width="0.4" height="0.4"/>
		<rect x="374.2" y="140.7" className="st0" width="0.8" height="0.7"/>
		<rect x="371" y="121" className="st0" width="0.4" height="0.4"/>
		<rect x="374.4" y="143" className="st0" width="0.4" height="0.4"/>
		<rect x="373.9" y="121.9" className="st0" width="0.8" height="0.7"/>
		<rect x="371.8" y="119.7" className="st0" width="0.7" height="0.8"/>
		<rect x="372.1" y="122" className="st0" width="0.4" height="0.4"/>
		<rect x="372.9" y="120.8" className="st0" width="0.7" height="0.7"/>
		<rect x="375.3" y="141.8" className="st0" width="0.7" height="0.7"/>
		<rect x="415.5" y="137.3" className="st0" width="0.4" height="0.4"/>

		<path className="letter e" d="M433.5,138h-13.1v-2.4h15.7v-8.3l-6.2-6.2h-9.5v-1.8h18.5v-8.1l-6.2-6.2h-28.2v42.4l6.2,6.2h29v-9.3
			L433.5,138z M431.9,133.8h-0.8V133h0.8V133.8z M433,134.9h-0.8v-0.8h0.8V134.9z M430.2,122.9l4.8,4.8v7.2l-4.8-4.3V122.9z
			 M430,131.9h0.8v0.8H430V131.9z M430,134.1h0.8v0.8H430V134.1z M420.9,133.6h-0.4v-0.4h0.4V133.6z M420.9,131.5h-0.5V131h0.5
			V131.5z M421.9,134.7h-0.4v-0.4h0.4V134.7z M422,132.6h-0.5v-0.5h0.5V132.6z M423.1,133.7h-0.5v-0.5h0.5V133.7z M423.1,131.5h-0.6
			V131h0.6V131.5z M424.2,134.7h-0.5v-0.5h0.5V134.7z M424.2,132.6h-0.6V132h0.6V132.6z M425.3,133.7h-0.6v-0.6h0.6V133.7z
			 M425.3,131.6h-0.7v-0.7h0.7V131.6z M426.4,134.8h-0.6v-0.6h0.6V134.8z M426.4,132.7h-0.7V132h0.7V132.7z M427.5,133.8h-0.7v-0.7
			h0.7V133.8z M427.6,131.6h-0.8v-0.8h0.8V131.6z M428.6,134.9h-0.7v-0.7h0.7V134.9z M428.7,132.7h-0.8v-0.8h0.8V132.7z
			 M429.7,133.8h-0.8V133h0.8V133.8z M429.7,131.6h-0.8v-0.8h0.8V131.6z M420.5,118.5h-0.3v-0.3h0.3V118.5z M420.5,116.3h-0.4v-0.4
			h0.4V116.3z M421.6,117.4h-0.4V117h0.4V117.4z M421.7,115.3h-0.5v-0.5h0.5V115.3z M422.7,118.5h-0.4v-0.4h0.4V118.5z M422.8,116.3
			h-0.5v-0.5h0.5V116.3z M423.9,117.4h-0.5V117h0.5V117.4z M423.9,115.3h-0.6v-0.6h0.6V115.3z M424.9,118.5h-0.5V118h0.5V118.5z
			 M425,116.4h-0.6v-0.6h0.6V116.4z M426.1,117.5h-0.6v-0.6h0.6V117.5z M426.1,115.4h-0.7v-0.7h0.7V115.4z M427.2,118.6h-0.6V118
			h0.6V118.6z M427.2,116.5h-0.7v-0.7h0.7V116.5z M428.3,117.5h-0.7v-0.7h0.7V117.5z M428.3,115.4h-0.8v-0.8h0.8V115.4z
			 M429.4,118.6h-0.7v-0.7h0.7V118.6z M429.4,116.5h-0.8v-0.8h0.8V116.5z M430.5,117.6h-0.8v-0.8h0.8V117.6z M430.5,115.4h-0.8v-0.8
			h0.8V115.4z M431.6,118.7h-0.8v-0.8h0.8V118.7z M431.6,116.5h-0.8v-0.8h0.8V116.5z M432.7,117.6h-0.8v-0.8h0.8V117.6z
			 M434.9,117.6h-0.8v-0.8h0.8V117.6z M436,118.7h-0.8v-0.8h0.8V118.7z M433,106.8l4.8,4.8v6.9l-4.8-4.4V106.8z M433,115.7h0.8v0.8
			H433V115.7z M433,117.9h0.8v0.8H433V117.9z M432.7,114.6v0.8h-0.8v-0.8H432.7z M406.9,148.3h-0.3V148h0.3V148.3z M407.9,149.3
			h-0.3V149h0.3V149.3z M409,150.4h-0.3v-0.3h0.3V150.4z M409.1,148.3h-0.4v-0.4h0.4V148.3z M410.1,151.5h-0.3v-0.3h0.3V151.5z
			 M410.1,149.3h-0.4V149h0.4V149.3z M405.5,146.6v-40.5h26.4v7.4h-18.2v8.7h15.4v7.6h-15.4v9.3h19v7.5H405.5z M417.4,120.4v0.7
			h-2.6v-3.2h0.2v-0.7h-0.2V116h0.4v1.1h1v1h1.1v1.1h1.1v1h1v0.9h-1.2v-0.7H417.4z M414.8,114.9v-0.4h0.2v0.4H414.8z M415.2,116
			v-0.8h0.8v0.8H415.2z M417.1,116.2v0.8h-0.8v-0.8H417.1z M416.9,115.2v-0.3h0.3v0.3H416.9z M418.2,117.3v0.8h-0.8v-0.8
			L418.2,117.3z M418,116.3V116h0.3v0.3H418z M418.4,119.1v-0.8h0.8v0.8H418.4z M419.1,117.4v-0.3h0.3v0.3H419.1z M419.1,115.2v-0.4
			h0.4v0.4H419.1z M419.4,119.4h0.2v0.8h-0.2V119.4z M419.4,134.7v-0.3h0.3v0.3H419.4z M419.6,136.1v0.8h-0.2v-0.8H419.6z
			 M419.4,132.5v-0.4h0.4v0.4H419.4z M414.8,133.9v-1.2h0.4v1.1h1v1h1.1v1.1h1.1v1h1v1.1h-4.6v-3.4h0.2v-0.7H414.8z M414.8,131.6
			v-0.8h0.2v0.8H414.8z M415.2,132.7v-0.8h0.8v0.8H415.2z M416.5,131.4h-0.3v-0.3h0.3V131.4z M417.1,132.9v0.8h-0.8v-0.8H417.1z
			 M417.6,132.5h-0.3v-0.3h0.3V132.5z M418.2,134v0.8h-0.8V134H418.2z M418.4,135h0.8v0.8h-0.8V135z M418.3,133.6v-0.3h0.3v0.3
			H418.3z M418.7,131.4h-0.4v-0.4h0.4V131.4z M430.9,147.7v0.8h-0.8v-0.8H430.9z M426.6,147.7v0.8h-0.8v-0.8H426.6z M422.3,147.7
			v0.8h-0.8v-0.8H422.3z M411.2,152.6h-0.3v-0.3h0.3V152.6z M411.2,150.4h-0.4v-0.4h0.4V150.4z M411.3,148.3h-0.5v-0.5h0.5V148.3z
			 M412.3,151.5h-0.4v-0.4h0.4V151.5z M412.4,149.4h-0.5v-0.5h0.5V149.4z M413.4,152.6H413v-0.4h0.4V152.6z M413.5,150.5H413V150
			h0.5V150.5z M413.5,148.4h-0.6v-0.6h0.6V148.4z M414.5,151.6h-0.5v-0.5h0.5V151.6z M414.6,149.5H414v-0.6h0.6V149.5z M415.6,152.7
			h-0.5v-0.5h0.5V152.7z M415.7,150.6h-0.6V150h0.6V150.6z M415.7,148.3H415v-0.6h0.7V148.3z M416.8,151.6h-0.6V151h0.6V151.6z
			 M416.8,149.5h-0.7v-0.7h0.7V149.5z M417.9,152.7h-0.6v-0.5h0.6V152.7z M417.9,150.6h-0.7v-0.7h0.7V150.6z M417.9,148.4h-0.8v-0.7
			h0.8V148.4z M419,151.7h-0.7V151h0.7V151.7z M419,149.6h-0.8v-0.8h0.8V149.6z M419.3,147.7h0.8v0.7h-0.8V147.7z M420.1,152.7h-0.7
			v-0.6h0.7V152.7z M420.1,150.6h-0.8v-0.8h0.8V150.6z M420.4,148.8h0.8v0.8h-0.8V148.8z M421.2,151.7h-0.8v-0.8h0.8V151.7z
			 M421.5,149.8h0.8v0.8h-0.8V149.8z M422.3,152.7h-0.8V152h0.8V152.7z M423.4,151.7h-0.8v-0.8h0.8V151.7z M423.4,149.6h-0.8v-0.8
			h0.8V149.6z M423.6,147.7h0.8v0.8h-0.8V147.7z M424.4,152.8h-0.8V152h0.8V152.8z M424.4,150.6h-0.8v-0.8h0.8V150.6z M424.7,148.8
			h0.8v0.8h-0.8V148.8z M425.5,151.7h-0.8v-0.8h0.8V151.7z M425.8,149.8h0.8v0.8h-0.8V149.8z M426.6,152.8h-0.8V152h0.8V152.8z
			 M427.7,151.7h-0.8v-0.8h0.8V151.7z M427.7,149.6h-0.8v-0.8h0.8V149.6z M427.9,147.7h0.8v0.8h-0.8V147.7z M428.7,152.8h-0.8V152
			h0.8V152.8z M428.7,150.6h-0.8v-0.8h0.8V150.6z M429,148.8h0.8v0.8H429V148.8z M429.8,151.7H429v-0.8h0.8V151.7z M430.1,149.8h0.8
			v0.8h-0.8V149.8z M430.9,152.8h-0.8V152h0.8V152.8z M432,151.7h-0.8v-0.8h0.8V151.7z M432,149.6h-0.8v-0.8h0.8V149.6z
			 M432.2,147.7h0.8v0.8h-0.8V147.7z M433,152.8h-0.8V152h0.8V152.8z M433,150.6h-0.8v-0.8h0.8V150.6z M433.3,148.8h0.8v0.8h-0.8
			V148.8z M434.1,151.7h-0.8v-0.8h0.8V151.7z M435.2,152.8h-0.8V152h0.8V152.8z M434.4,150.6v-0.8h0.8v0.8H434.4z M436.3,151.7h-0.8
			v-0.8h0.8V151.7z M437.4,152.8h-0.8V152h0.8V152.8z M438.7,152.6l-4.8-4.9v-7.8l4.8,4.8V152.6z"/>

		<rect x="417.4" y="137.1" className="st0" width="0.7" height="0.7"/>
		<rect x="415.3" y="118.2" className="st0" width="0.7" height="0.8"/>
		<rect x="415.3" y="135" className="st0" width="0.7" height="0.8"/>
		<rect x="416.4" y="136" className="st0" width="0.7" height="0.7"/>
		<rect x="416.4" y="119.3" className="st0" width="0.7" height="0.7"/>
		<rect x="415.5" y="120.5" className="st0" width="0.4" height="0.4"/>

      </svg>
    </div>*/
