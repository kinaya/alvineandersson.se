import React, {useRef, useEffect, useState} from "react";
import JumpingTitle from '../common/JumpingTitle';
import SelectItem from "./SelectItem";
import MatchItem from "./MatchItem";
import { connect } from 'react-redux'
import { chooseItem, startGame, endGame } from '../../actions'

export const UnconnectedMatchmaking = ({game, chooseItem, startGame, endGame, scrollToContent, getContentHeight, fullScreen, windowSize, sectionStyle}) => {

  const [inlineStyle, setInlineStyle] = useState({'height': 'auto'})
  const innerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    setInlineStyle({'height': `${innerRef.current.offsetHeight + 20}px`})
    getContentHeight('matchmaking', contentRef.current.offsetHeight + 40)
  }, [windowSize])
  //}, [contentRef.current, innerRef.current])

  return (
    <section data-test="matchmaking-component" className="matchmaking" style={sectionStyle}>
			<div ref={contentRef} className="container">

        <JumpingTitle title="Lets&nbsp;play&nbsp;Matchmaking!" />

        <p className="intro">Välj det som passar bäst in på er, för att se om vi skulle passa ihop.</p>

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
    windowSize: state.fullScreen.windowSize
  }
}

export default connect(
  mapStateToProps,
  {chooseItem, startGame, endGame}
)(UnconnectedMatchmaking)
