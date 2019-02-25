import React from "react";
import PropTypes from 'prop-types'

const MatchItem = ({item, resetGame}) => {
  return (
    <div data-test="match-item-component">

      <div className={`result ${item.id}`}>
        <div className="headline">{item.headline}</div>
        <div className="text">{item.text}</div>
      </div>

      <span onClick={() => resetGame()} className="redo">Gör ny matchmaking</span>

    </div>
  )
}

MatchItem.propTypes = {
  item: PropTypes.object.isRequired,
  resetGame: PropTypes.func.isRequired
}

export default MatchItem;
