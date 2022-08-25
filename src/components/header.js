import React from 'react'


export default function Header(props) {
    return (
        <div className='header-container'>
              <div className='game'>
                  <h1>Memory Game</h1>
                  <p>Get points by clicking on images but not twice.</p>
              </div>
              <div className='score-board'>
                   <h3>Score: {props.score} </h3>
              </div>
        </div>
    )
}