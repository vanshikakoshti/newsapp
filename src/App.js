import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'


export default class App extends Component {
  pageSize=10;
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <div>
        
      <Navbar/>
      <News apiKey={this.apiKey}  pageSize={this.pageSize} country="us" category="general"/>
   
      </div>
    )
  }
}

