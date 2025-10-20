import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import reactLogo from './assets/react.svg'
import './App.css'
import '@picocss/pico/css/pico.min.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>
          <img src={reactLogo} alt="React logo" style={{ height: "40px" }} />
          ReFood
        </h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Autres routes possibles :
            <Route path="/offres" element={<OffresPage />} />
            <Route path="/utilisateurs" element={<UsersPage />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
