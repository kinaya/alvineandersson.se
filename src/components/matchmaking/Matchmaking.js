import React, { Component} from "react";
import MatchItem from "./MatchItem";
import JumpingTitle from '../common/JumpingTitle';

const Matchmaking = ({matchitems, matchMaking}) => {

    return(
      <div className="container matchmaking">
				<div className="inner">
          <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />
          <p className="intro">Välj ett alternativ för att starta</p>
          <div className="wrapper">
            {matchitems.map((item, i) => { return (
              <MatchItem matchMaking={matchMaking} key={i} item={item} />
            )})}
          </div>
				</div>
      </div>
    );

}

export default Matchmaking;
