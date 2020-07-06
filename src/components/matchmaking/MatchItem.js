import React from "react";
import PropTypes from 'prop-types'

/**
 * Component for displaying a match
 * @param {boolean} props.match - If the match is true or false
 * @param {function} props.endGame - Callback function to end the game
 */
const MatchItem = React.forwardRef(({match, endGame}, ref) => {

  return (
    <div ref={ref} data-test="match-item-component">

      {(match === true || match === null) ? (
        <div className='result match'>

          <div className="headline">Match!</div>
          <div className="text">
            <p>Ni verkar ha det jag letar efter: </p>
            <ul>
              <li>En jysst arbetsplats</li>
              <li>Möjlighet att utvecklas</li>
              <li>Verksamhet som gör skillnad</li>
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

      <span onClick={() => endGame()} className="redo">Gör ny matchmaking</span>

    </div>
  )
})

//MatchItem.propTypes = {
  //match: PropTypes.bool.isRequired,
  //endGame: PropTypes.func.isRequired
//}

export default MatchItem;
