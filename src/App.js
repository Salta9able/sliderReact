import React from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import PrevHero from './components/PrevHero'
import SlideNumber from './components/SlideNumber'
import './app.css'

const App = () => {
  return (
    <div className="app">
      
      <Main />
      <PrevHero />
      <Navigation />
      <SlideNumber />
    </div>
  )
}

export default App