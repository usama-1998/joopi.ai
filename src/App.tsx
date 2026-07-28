import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { RetellWidget } from './components/RetellWidget'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <RetellWidget />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
