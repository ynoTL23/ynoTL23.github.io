import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='bounds-container'>
          <div className='line top'></div>
          <div className='line right'></div>
          <div className='line bottom'></div>
          <div className='line left'></div>
        </div>

        <Navigation />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
