import React from "react";
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { chooseItem, startGame } from '../../actions'

export const UnconnectedMatchmaking = ({game, chooseItem, startGame}) => {

  console.log('game',game)

  return (
    <section data-test="matchmaking-component" className="matchmaking">
			<div className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <p className="intro">Välj det som passar bäst in på er, för att se om vi skulle passa ihop.</p>

        <div className="game">
          {game.active ? (
            <div>
            {game.items.map((item, i) => (
              <div data-test="matchmaking-item" key={i} className='item'>
                  <SelectItem chooseItem={chooseItem} item={item} />
              </div>
            ))}
            {game.match != null && (
              <MatchItem startGame={startGame} match={game.match} />
            )}
            </div>
          ) : (
            <button className="start" onClick={() => startGame()}>Starta</button>
          )}
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

function mapDispatchToProps(dispatch) {
  return {
    chooseItem: (clickedItem, clickedAlternative, itemToShow) => dispatch(chooseItem(clickedItem, clickedAlternative, itemToShow)),
    startGame: () => dispatch(startGame())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedMatchmaking)
