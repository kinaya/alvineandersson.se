import React, {useRef, useEffect, useState, forwardRef} from "react";
import ReactResizeDetector from 'react-resize-detector';
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { chooseItem, startGame, endGame, checkFullScreen } from '../../actions'

export const UnconnectedMatchmaking = ({game, chooseItem, startGame, endGame, scrollToContent, checkFullScreen, fullScreen, windowSize}, ref) => {

  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})
  const innerRef = useRef(null)

  useEffect(() => {
    setInlineStyle({'height': `${innerRef.current.offsetHeight + 20}px`})
  }, [windowSize])

  return (
    <section ref={ref} data-test="matchmaking-component" className="matchmaking">
      <ReactResizeDetector onResize={(width, height, section) => checkFullScreen(width, height, 'matchmaking')} >

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
      </ReactResizeDetector>
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

/*export default connect(
  mapStateToProps,
  {chooseItem, startGame, endGame}
)(UnconnectedMatchmaking)*/


const connectAndForwardRef = (
  mapStateToProps = null,
  mapDispatchToProps = null,
  mergeProps = null,
  options = {},
) => component => connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  {
    ...options,
    forwardRef: true,
  },
)(forwardRef(component));

export default connectAndForwardRef(mapStateToProps, {checkFullScreen, chooseItem, startGame, endGame})(UnconnectedMatchmaking)
