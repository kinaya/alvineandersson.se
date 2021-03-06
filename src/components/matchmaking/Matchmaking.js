import React, {useRef, useEffect, useState} from "react";
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { chooseItem, startGame, endGame } from '../../actions'


/**
 * Component for displaying the matchmaking game.
 * The default export is the connected component, but we also export an
 * unconnected component used for testing.
 *
 * @params {array} props.game - An array with game data
 * @params {fuunction} pros.chooseItem - Function to choose an item
 * @params {function} props.startGame - Function to start the game
 * @params {function} props.endGame - Function to end the game
 * @params {function} props.scrollToContent - Function to trigger scroll
 * @params {boolean} props.fullScreen - Weather full screen mode is on
 * @params {array} props.windowSize - The wwindow dimensions
 */
export const UnconnectedMatchmaking = ({game, chooseItem, startGame, endGame, scrollToContent, fullScreen, windowSize}) => {

  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})
  const innerRef = useRef(null)

  useEffect(() => {
    setInlineStyle({'height': `${innerRef.current.offsetHeight + 20}px`})
  }, [windowSize])

  return (
    <section data-test="matchmaking-component" className="matchmaking">

			<div className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <div className="game" style={fullScreen ? inlineStyle : {'height': 'auto'}}>

          <div className={`game-button visible-${!game.active}`}>
            <button className="start" onClick={() => startGame()}>Starta</button>
          </div>

          <div className={`game-items visible-${game.active && game.match === null}`}>
            {game.items.map((item, i) => (
              <SelectItem key={i} itemNumber={i} chooseItem={chooseItem} item={item} />
            ))}
          </div>

          <div className={`game-match visible-${game.active && game.match != null} result-${game.match}`}>
            <MatchItem ref={innerRef} endGame={endGame} match={game.match} />
          </div>

        </div>

        {fullScreen && (
          <div data-test="header-scrollarrow" onClick={scrollToContent} className="scrollarrow"></div>
        )}

      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    game: state.game,
    windowSize: state.fullScreen.windowSize,
    fullScreen: state.fullScreen.active
  }
}

export default connect(
  mapStateToProps,
  {chooseItem, startGame, endGame}
)(UnconnectedMatchmaking)
