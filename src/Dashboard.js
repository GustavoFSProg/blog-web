import { Container, UlLista } from './styled-app'
import Header from './Header'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <Container>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Dashboard</h1>
      </div>

      <div>
        <UlLista>
          <Link
            style={{
              fontFamily: 'Arial',
              fontSize: '25px',
              textDecoration: 'none',
              color: 'blueviolet',
              marginBottom: '22px',
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              fontFamily: 'Arial',
              fontSize: '25px',
              textDecoration: 'none',
              color: 'blueviolet',
              marginBottom: '22px',
            }}
            to="/register-posts"
          >
            Cadastrar Posts
          </Link>
          <Link
            style={{
              fontFamily: 'Arial',
              fontSize: '25px',
              textDecoration: 'none',
              color: 'blueviolet',
              marginBottom: '22px',
            }}
            to="/register-user"
          >
            Cadastrar Usuários
          </Link>
        </UlLista>
      </div>
    </Container>
  )
}

export default Dashboard
