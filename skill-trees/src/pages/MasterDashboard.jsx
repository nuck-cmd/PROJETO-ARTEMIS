
import { Link } from 'react-router-dom'

function MasterDashboard() {
  return (
    <main className="role-page">
      <Link to="/" className="logo">
        SKILL<span>TREES</span>
      </Link>

      <div className="role-content">
        <span className="eyebrow">GAME MASTER</span>
        <h1>PAINEL DO MESTRE</h1>
        <p>Seu centro de controle começa aqui.</p>
      </div>
    </main>
  )
}

export default MasterDashboard
