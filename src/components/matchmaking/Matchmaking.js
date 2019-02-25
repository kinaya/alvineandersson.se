import React from "react";
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import BooleanItem from "./BooleanItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { matchMaking, resetGame } from '../../actions'

export const UnconnectedMatchmaking = ({matchitems, matchMaking, resetGame}) => {
  return (
    <section data-test="matchmaking-component" className="matchmaking">
			<div className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <p className="intro">Välj ett alternativ för att starta</p>

        <div className="game">
          {matchitems.map((item, i) => (
            <div data-test="matchmaking-item" key={i} className={`item visible-${item.visible}`}>
              {item.type === 'alternatives' && (
                <SelectItem matchMaking={matchMaking} item={item} />
              )}
              {item.type === 'yesno' && (
                <BooleanItem matchMaking={matchMaking} item={item} />
              )}
              {item.type === 'match' && (
                <MatchItem resetGame={resetGame} item={item} />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    matchitems: state.match.matchitems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    matchMaking: (clickedItem, clickedAlternative, itemToShow) => dispatch(matchMaking(clickedItem, clickedAlternative, itemToShow)),
    resetGame: () => dispatch(resetGame())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedMatchmaking)
