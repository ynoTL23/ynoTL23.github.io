import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

import { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDarkMode])

  return (
    <Router>
      <div className='App'>
        <div className='bounds-container'>
          <div className='line top'></div>
          <div className='line right'></div>
          <div className='line bottom'></div>
          <div className='line left'></div>
        </div>

        <Navigation handleDarkModeToggle={() => setIsDarkMode(!isDarkMode)} />

        <Switch>
          <Route path='/' exact component={() => <Home darkMode={isDarkMode} />} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
