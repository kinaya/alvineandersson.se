import React, { Component} from "react";

const MatchItemMatch = ({item, resetGame}) => {
  return (
    <div>

      <div className={`result ${item.id}`}>
        <div className="headline">{item.headline}</div>
        <div className="text">{item.text}</div>
      </div>

      <span onClick={() => resetGame()} className="redo">Gör ny matchmaking</span>

    </div>
  )
}

export default MatchItemMatch;
