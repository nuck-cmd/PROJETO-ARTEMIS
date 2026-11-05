
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import RoleSelection from '../pages/RoleSelection'
import MasterDashboard from './pages/MasterDashboard'
import PlayerDashboard from './pages/PlayerDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escolher-perfil" element={<RoleSelection />} />
        <Route path="/mestre" element={<MasterDashboard />} />
        <Route path="/jogador" element={<PlayerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
