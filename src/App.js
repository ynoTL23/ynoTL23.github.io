import './App.css'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <div className='bounds-container'>
        <div className='line top'></div>
        <div className='line right'></div>
        <div className='line bottom'></div>
        <div className='line left'></div>
      </div>

      <div className='wrapper'>
        <div className='home-container'>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
