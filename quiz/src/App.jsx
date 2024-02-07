import { Component } from "react";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent"
import QuizComponent from "./components/QuizComponent"
import ResultComponent from "./components/ResultComponent";


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quiz" element={<QuizComponent/>} />
        <Route path="/result" element={<ResultComponent/>} />
      </Routes>
      </BrowserRouter>
    );
  };
}