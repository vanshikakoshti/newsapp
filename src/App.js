import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  pageSize=10;
  apiKey = process.env.REACT_APP_NEWS_API;
  state ={
    progress :0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar height={2} 
        color="#f11946"
        progress={this.state.progress}/>
      <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="general"/>} />
        <Route exact path="/business" element={<News  setProgress={this.setProgress}key="business" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="entertainment"/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="health"/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="technology"/>} />
         
      </Routes>
      </Router>
      </div>
    )
  }
}

