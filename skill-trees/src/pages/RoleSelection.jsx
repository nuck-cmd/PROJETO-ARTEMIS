
import { Link } from 'react-router-dom'
import '../App.css'

function RoleSelection() {
  return (
    <main className="role-page">
      <Link to="/" className="logo">
        SKILL<span>TREES</span>
      </Link>

      <div className="role-content">
        <span className="eyebrow">ESCOLHA SEU CAMINHO</span>

        <h1>QUEM É VOCÊ NA MESA?</h1>

        <p>Escolha como deseja participar da aventura.</p>

        <div className="role-options">

          <Link to="/mestre" className="role-card">
            <span className="role-number">01 / GAME MASTER</span>
            <div className="role-icon">♛</div>
            <h2>MESTRE</h2>
            <p>
              Crie mesas, construa árvores de habilidades,
              distribua XP e gerencie seus jogadores.
            </p>
            <span className="role-action">ACESSAR PAINEL ↗</span>
          </Link>

          <Link to="/jogador" className="role-card">
            <span className="role-number">02 / PLAYER</span>
            <div className="role-icon">⚔</div>
            <h2>PLAYER</h2>
            <p>
              Participe de mesas, evolua seu personagem
              e desbloqueie novas habilidades.
            </p>
            <span className="role-action">ACESSAR PAINEL ↗</span>
          </Link>

        </div>
      </div>
    </main>
  )
}

export default RoleSelection
