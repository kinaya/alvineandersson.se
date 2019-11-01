import React from "react";
import PropTypes from 'prop-types'

/**
 * Component for displaying a match
 * @param {boolean} props.match - If the match is true or false
 * @param {function} props.startGame - Callback function to (re)start the game
 */
const MatchItem = ({match, startGame}) => {

  return (
    <div data-test="match-item-component">

      {match ? (
        <div className='result match'>

          <div className="headline">Match!</div>
          <div className="text">
            <p>Ni verkar ha det jag letar efter: </p>
            <ul><li>En jysst arbetsplats</li>
                <li>Möjlighet att utvecklas</li>
                <li>Produkter som gör skillnad</li>
            </ul>
            <p>Har jag det ni letar efter? Hör av er på hej@alvineandersson.se så pratar vi mer</p>
          </div>

        </div>
      ):(
        <div className="result no-match">
          <div className="headline">No match!</div>
          <div className="text">
            <p>It's not you it's me... just kidding it's you!</p> <p>Det verkar inte som att vi skulle passa särskilt bra ihop :(</p>
          </div>
        </div>
      )}

      <span onClick={() => startGame()} className="redo">Gör ny matchmaking</span>

    </div>
  )
}

MatchItem.propTypes = {
  match: PropTypes.bool.isRequired,
  startGame: PropTypes.func.isRequired
}

export default MatchItem;
