import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'


export default class App extends Component {
  pageSize=10
  render() {
    return (
      <div>
        
      <Navbar/>
      <News pageSize={this.pageSize} country="us" category="general"/>
   
      </div>
    )
  }
}

