import React, { Component } from 'react'
import './QuizStyle.css'
import { Link } from 'react-router-dom'
import quizQuestion from '../resources/quizQuestion.json'

export default class QuizComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      ques: quizQuestion,
      attempt : 0,
      correct: 0,
      wrong: 0
    }
  }
  previousB = () =>{
    this.setState(()=>({
      index : Math.max(this.state.index - 1,1)
    }))
  }
  nextB = () =>{
    this.setState(()=>({
      index : Math.min(this.state.index + 1,15) 
    }))
  }
  quitB = () =>{
   if (window.confirm("Are you sure you want to quit?")){
    window.location.href = "/"
   }
  }
  answer = (selected) => {
    this.setState((prevState) => ({
      index: Math.min(prevState.index + 1, 15),
    }));
    const curQuestion = this.state.ques[this.state.index - 1];
    const ans = curQuestion.answer;
    if (ans===selected) {
      this.setState((e) => ({
        correct: e.correct + 1,
        attempt: e.attempt + 1,
      }));
    } else if (ans!==selected) {
      this.setState((e) => ({
        wrong: e.wrong + 1,
        attempt: e.attempt + 1,
      }));
    }  if (this.state.index === 15) {
      window.location.href = "/result"
      localStorage.setItem("correct",this.state.correct)
      localStorage.setItem("wrong",this.state.wrong)
      localStorage.setItem("attempted",this.state.attempt)
    }
    console.log(this.state.correct, this.state.wrong);
  };
  storeVal = ()=>{
    localStorage.setItem("correct",this.state.correct)
    localStorage.setItem("wrong",this.state.wrong)
    localStorage.setItem("attempted",this.state.attempt)
  }
  render() {
    const presentQuestion = this.state.ques[this.state.index - 1]
    return (
      <div>
        <div className="playArea">
            <h1 className='head'>Question</h1>
            <h4>{this.state.index} of 15</h4>
            <h3 className='question'>{presentQuestion.question}</h3>
            <div className='options'>
                <button className="option" onClick={()=>this.answer(`${presentQuestion.optionA}`)}>{presentQuestion.optionA}</button>
                <button className="option" onClick={()=>this.answer(`${presentQuestion.optionB}`)}>{presentQuestion.optionB}</button>
                <button className="option" onClick={()=>this.answer(`${presentQuestion.optionC}`)}>{presentQuestion.optionC}</button>
                <button className="option" onClick={()=>this.answer(`${presentQuestion.optionD}`)}>{presentQuestion.optionD}</button>
            </div>
            <div className='buttons'>
                <button className='previous' onClick={this.previousB}>Previous</button>
                <button className='next' onClick={this.nextB}>Next</button>
                <button className='quit' onClick={this.quitB}>Quit</button>
                <Link to="/result"><button className='finish' onClick={this.storeVal}>Finish</button></Link>
            </div>
        </div>
      </div>
    )
  }
}
// 