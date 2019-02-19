import React, { Component} from "react";
import JumpingTitle from '../common/JumpingTitle';
import MatchItemAlternatives from "./MatchItemAlternatives";
import MatchItemYesno from "./MatchItemYesno";
import MatchItemMatch from "./MatchItemMatch";

const Matchmaking = ({matchitems, matchMaking, resetGame}) => {
  return (
    <section className="matchmaking">
			<div className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <p className="intro">Välj ett alternativ för att starta</p>

        <div className="game">
          {matchitems.map((item, i) => (
            <div key={i} className={`item visible-${item.visible}`}>
              {item.type === 'alternatives' && (
                <MatchItemAlternatives matchMaking={matchMaking} item={item} />
              )}
              {item.type === 'yesno' && (
                <MatchItemYesno matchMaking={matchMaking} item={item} />
              )}
              {item.type === 'match' && (
                <MatchItemMatch resetGame={resetGame} item={item} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Matchmaking;
