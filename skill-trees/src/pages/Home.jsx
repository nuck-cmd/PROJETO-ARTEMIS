
import '../App.css'

const skills = [
  { name: 'BASE', x: 50, y: 88, state: 'unlocked' },
  { name: 'FÚRIA', x: 25, y: 68, state: 'unlocked' },
  { name: 'GOLPE', x: 75, y: 68, state: 'locked' },
  { name: 'ECO', x: 15, y: 43, state: 'available' },
  { name: 'CORTE', x: 42, y: 43, state: 'locked' },
  { name: 'FOCO', x: 72, y: 43, state: 'locked' },
  { name: 'VÓRTICE', x: 50, y: 19, state: 'available' },
]

function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          SKILL<span>TREES</span>
        </a>

        <div className="nav-links">
          <a href="#features">FUNCIONALIDADES</a>
          <a href="#preview">ÁRVORES</a>
          <a href="#about">SOBRE</a>
        </div>

        <button className="login-button">ENTRAR ↗</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">◆ EVOLUA. CONQUISTE. DOMINE.</span>

          <h1>
            ENTRE NA PRÓXIMA
            <br />
            <span>DIMENSÃO DO RPG.</span>
          </h1>

          <p>
            Crie árvores de habilidades, gerencie sua mesa
            e acompanhe a evolução de cada personagem.
            Sua aventura, suas regras.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              COMEÇAR AGORA ↗
            </button>

            <a href="#preview" className="secondary-button">
              EXPLORAR ÁRVORES ↓
            </a>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="circle circle-one" />
          <div className="circle circle-two" />
          <span className="decoration-text">01 / EVOLUTION</span>
        </div>
      </section>

      <section className="preview" id="preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 — PERSONALIZAÇÃO</span>
            <h2>FORJE SUA ÁRVORE</h2>
            <p>Construa caminhos. Desbloqueie possibilidades.</p>
          </div>

          <span className="tree-label">GUERREIRO / NV. 03</span>
        </div>

        <div className="tree-container">
          <div className="tree-grid" />

          <svg className="tree-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="88" x2="25" y2="68" />
            <line x1="50" y1="88" x2="75" y2="68" />
            <line x1="25" y1="68" x2="15" y2="43" />
            <line x1="25" y1="68" x2="42" y2="43" />
            <line x1="75" y1="68" x2="72" y2="43" />
            <line x1="42" y1="43" x2="50" y2="19" />
            <line x1="72" y1="43" x2="50" y2="19" />
          </svg>

          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-node ${skill.state}`}
              style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            >
              <div className="node-core">
                {skill.state === 'unlocked' ? '✦' : '◇'}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}

          <span className="tree-status">ÁRVORE EM EVOLUÇÃO</span>
        </div>
      </section>

      <section className="features" id="features">
        <span className="eyebrow">02 — RECURSOS</span>
        <h2>TUDO QUE SUA MESA PRECISA.</h2>

        <div className="feature-grid">
          <article className="feature-card">
            <span>01 / TREE BUILDER</span>
            <h3>Árvores personalizadas</h3>
            <p>Crie habilidades, conecte caminhos e desenvolva seus próprios sistemas.</p>
          </article>

          <article className="feature-card">
            <span>02 / XP SYSTEM</span>
            <h3>Progressão de jogadores</h3>
            <p>Distribua experiência, controle níveis e acompanhe desbloqueios.</p>
          </article>

          <article className="feature-card">
            <span>03 / PARTY MANAGER</span>
            <h3>Gerenciamento de mesas</h3>
            <p>Organize jogadores, convites e personagens em um só lugar.</p>
          </article>
        </div>
      </section>

      <footer id="about">
        <a className="logo" href="#">
          SKILL<span>TREES</span>
        </a>
        <p>SEU RPG. SUAS REGRAS. SUA EVOLUÇÃO.</p>
        <span>© 2026 SKILL TREES</span>
      </footer>
    </main>
  )
}

export default Home
