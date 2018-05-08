import React from 'react'
import 'w3-css/w3.css'
import './app.css'
import Slideshow from './Slideshow'
import Slide from './Slide'

const App = () => {

  return (
    <div style={{height:'100%',margin:'0'}}>
      <Slideshow>
        <Slide slideClass="bgimg1" />
        <Slide slideClass="bgimg2" />
        <Slide slideClass="bgimg3" />
      </Slideshow>
    </div>
  )
}

export default App
