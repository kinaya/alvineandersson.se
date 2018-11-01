import React, { Component} from "react";
import MatchItem from "./MatchItem";

class Matchmaking extends Component{
  render(){

    const {matchitems, matchMaking} = this.props;

    return(
      <div className="container matchmaking">
				<div className="inner">
          <h2>Lets play a Matchmaking game!</h2>
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
}

export default Matchmaking;
