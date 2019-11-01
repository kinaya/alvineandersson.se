import React from "react";
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { chooseItem, startGame } from '../../actions'

export const UnconnectedMatchmaking = ({game, chooseItem, startGame}) => {

  return (
    <section data-test="matchmaking-component" className="matchmaking">
			<div className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <p className="intro">Välj det som passar bäst in på er, för att se om vi skulle passa ihop.</p>

        <div className="game">

          <div className={`game-button visible-${!game.active}`}>
            <button className="start" onClick={() => startGame()}>Starta</button>
          </div>

          <div className={`game-items visible-${game.active}`}>
            {game.items.map((item, i) => (
              <SelectItem key={i} itemNumber={i} chooseItem={chooseItem} item={item} />
            ))}
            {game.match != null && (
              <MatchItem startGame={startGame} match={game.match} />
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

export default connect(
  mapStateToProps,
  {chooseItem, startGame}
)(UnconnectedMatchmaking)
