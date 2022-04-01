import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export default function DifficultySelector() {
  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )
  return (
    <div className='difficultySelector'>
          <div>
            <div className='game-instruction'>
              Please select the difficulty of the game. 
              <Emoji label="happy" symbol="🥳"/>
            </div>
            <Link to="/Game/easy">
              <button className="gradient-button" value="Game/easy">Easy</button>
            </Link>
            <Link to="/Game/medium">
              <button className="gradient-button" value="Game/medium">Medium</button>
            </Link>
            <Link to="/Game/hard">
              <button className="gradient-button" value="Game/hard">Hard</button>
            </Link> 
        </div>
    </div>
  );
}
