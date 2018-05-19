import React from 'react'

const Section = (props) => 
  <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}} id={props.id}>
    {props.children}
  </div>

export default Section