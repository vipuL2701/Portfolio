import React from 'react'
import Header from './components/Header'
import './App.css'
import RoundPhoto from './components/RoundPhoto'
import Resume from './components/Resume/Resume'

function App() {
  return (
    <>
    <Header/>
    <RoundPhoto/>
    <h1>VIPUL NIGAM</h1>
    <br/>
    <h2>Software developer,Javascript developer,ReactJs developer</h2>
    <h2>JavaScript, ReactJS, Redux, HTML, CSS, Git</h2>
    <Resume/>
    </>
  )
}

export default App