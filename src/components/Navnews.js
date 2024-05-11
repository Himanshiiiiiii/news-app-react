import React from 'react'
import Hamburgerdrawer from "./Hamburgerdrawer";

function Navnews({setCategory}) {
  return (
    <div className='nav'>
        <div className='icon'>
        <Hamburgerdrawer setCategory={setCategory}/>
        </div>
    <img style={{curosr:"pointer"}}height="80%" src="News_logo.png" alt="logo"></img>
    </div>
  )
}

export default Navnews