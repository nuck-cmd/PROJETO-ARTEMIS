
import { Link } from 'react-router-dom'

function PlayerDashboard() {
  return (
    <main className="role-page">
      <Link to="/" className="logo">
        SKILL<span>TREES</span>
      </Link>

      <div className="role-content">
        <span className="eyebrow">PLAYER</span>
        <h1>ÁREA DO JOGADOR</h1>
        <p>Sua jornada de evolução começa aqui.</p>
      </div>
    </main>
  )
}

export default PlayerDashboard
