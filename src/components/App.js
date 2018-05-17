import React from 'react'
import 'w3-css/w3.css'
import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import WebFont from 'webfontloader'
import Navigation from './Navigation'
import Slideshow from './Slideshow'
import Slide from './Slide'
import '../firebase/firebase'

WebFont.load({
  google: {
    families: ['Playfair Display:300,400,700', 'sans-serif']
  }
})

const App = () => {

  return (
    <div style={{height:'100%',margin:'0'}}>
      <Navigation />
      <Slideshow>
        <Slide slideClass="bgimg1" />
        <Slide slideClass="bgimg2" />
        <Slide slideClass="bgimg3" />
      </Slideshow>
      <div className="w3-content" style={{maxWidth:'2000px',marginTop:'46px'}}>
        <div className="w3-display-middle w3-text-red">
          <h1 className="w3-jumbo w3-center" style={{textShadow:'1px 1px 0 #000',lineHeight:'80%'}}>Lisa Bergman</h1>
          <hr className="w3-border-black" style={{margin:'auto',width:'40%'}} />
          <p className="w3-large w3-center"><strong>Pianist, Producer</strong></p>
        </div>
        <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="bio">
          <h1>Bio</h1>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
        </div>
        <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="calendar">
          <h1>Calendar</h1>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
        </div>
        <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id="contact">
          <h1>Contact</h1>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
        </div>
      </div>
    </div>
  )
}

export default App

/* <div class="w3-content" style="max-width:2000px">

  
  <div class="w3-display-middle w3-text-red">
    <h1 class="w3-jumbo w3-center" style="text-shadow:1px 1px 0 #000;line-height:80%">Lisa Bergman</h1>
    <hr class="w3-border-black" style="margin:'auto',width:'40%'" />
    <p class="w3-large w3-center"><strong>Pianist, Producer</strong></p>
  </div>
  <div class="w3-display-topmiddle w3-text-red">
    <p class="w3-large w3-center"><strong>COMING SOON</strong></p>
  </div>
  <div class="w3-display-bottommiddle w3-text-red">
    <p class="w3-small w3-center"><a href="mailto:lisaberg@nwlink.com">Email Lisa</a></p>
  </div>
</div>
 */