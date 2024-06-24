// import { useState } from 'react'
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      color: 'light'
    }
  }
  render() {
    let toDark = () => {
      if (document.body.getAttribute('data-bs-theme') === 'light') {
        document.body.setAttribute('data-bs-theme', 'dark');
        this.setState({color: 'dark'})
      } else {
        document.body.setAttribute('data-bs-theme', 'light');
        this.setState({color: 'light'})
      }
    }
    return (
      <Router>
        <div>
          <Navbar theme={toDark} color={this.state.color === 'dark'? 'light':'success'}></Navbar>
          <Routes>
            <Route path='/' element={<News data='top-headlines?country=in' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/news/global' element={<News data='top-headlines?category=general' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/news/education' element={<News data='everything?q=education' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/news/sports' element={<News data='top-headlines?category=sports' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/news/health' element={<News data='top-headlines?category=health' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/news/business' element={<News data='top-headlines?category=business' color={this.state.color === 'dark'? 'success':'primary'}/>}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
        <footer className="card-footer text-body-secondary mt-5 mb-3" style={{ textAlign: 'center'}}>
                © 2024{" "}
                <Link to="/" className={`link-${this.state.color} link-underline-opacity-0 link-underline-opacity-100-hover`}>
                    Horizon Headlines
                </Link>
                . All Rights Reserved.
            </footer>
      </Router>
    )
  }
}
