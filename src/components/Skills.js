import React, { Component} from "react";
import VisibilitySensor from "react-visibility-sensor";

const Skills = ({}) => {

  return (
    <div className="container skills">
			<div className="inner">
        <h2>Namedropping</h2>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Webteknologier och språk</span>: HTML5, CSS3 (+SASS), PHP, Node.js
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Scripts/UI</span>: JavaScript, JQuery, Bootstrap, Underscore, Materialize
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Frameworks</span>: React (+ Redux och next.js för SSR), Laravel, Symfony, Express.js
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">CMSs</span>: Drupal och Wordpress
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Databaser och bestående data</span>: MySQL, MariaDB, PostgreSQL, MongoDB, Memcached, Redis
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Testning och debug tools</span>: PHPUnit, Jest + Mocha, Mozilla Firebug, Chrome developer tools
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">RESTFul API</span>: Custom i node.js, Wordpress eller Drupal som headless.
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Package managers och andra verktyg</span>: git, npm, gulp, webpack, composer
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Autenticering och behörigheter</span>: OAuth, Basic Authentication, Token Authentication, JWT
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            <span className="label">Server, PaaS and distribuering</span>: Apache, Heroku, Docker
          </p>
        }
        </VisibilitySensor>

        <VisibilitySensor partialVisibility={true} >
        {({isVisible}) =>
          <p className={isVisible ? 'visible' : 'invisible'}>
            Grundläggande koll på Java, Python, Angular, Vue, gillar att bygga möjliga och omöjliga saker med Raspberry Pi eller Arduino, studerat media och kommunikation, ofta bollplank för koncept och ux i projekt, van projektledare och en stjärna på att googla.
          </p>
        }
        </VisibilitySensor>

			</div>
    </div>
  );

}

export default Skills;
