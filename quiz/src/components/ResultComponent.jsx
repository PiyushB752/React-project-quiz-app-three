import React from 'react'
import { Link } from 'react-router-dom'
import './ResultStyle.css'

function ResultComponent() {
  const correct = localStorage.getItem('correct')
  const attempt = localStorage.getItem('attempted')
  const wrong = localStorage.getItem('wrong')
  const clearStorage = () => {
    localStorage.setItem('correct', '0');
    localStorage.setItem('attempted', '0');
    localStorage.setItem('wrong', '0');
  };
  return (
    <div className='App'>
        <h1>Result</h1>
        <div className='resultArea'>
            <h3 className='Heading'>{correct >= 8 ? "Congratulations!":"You need more practice!"}</h3>
            <h2>Your Score is {correct}</h2>
            <div className='details'>
                <p><b>Total number of questions</b></p><span className='span1'><b>15</b></span>
                <p><b>Number of attempted questions</b></p><span className='span2'><b>{attempt}</b></span>
                <p><b>Number of correct answers</b></p><span className='span3'><b>{correct}</b></span>
                <p><b>Number of wrong answers</b></p><span className='span4'><b>{wrong}</b></span>
            </div>
        </div>
        <div className="Buttons">
          <Link to="/quiz"><button className='playAgain' onClick={clearStorage}>Play Again</button></Link>
          <Link to="/"><button className='homeButton' onClick={clearStorage}>Back to Home</button></Link>
        </div>
      </div>
  )
}

export default ResultComponent