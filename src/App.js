import { useEffect, useState } from 'react'
import { Container, UlLista } from './styled-app'
import api from './services/api'

function App() {
  const [post, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  async function handlePosts() {
    const { data } = await api.get(`/`)

    setPosts(data)
  }

  async function handleLikes(id) {
    await api.put(`/likes/${id}`)

    handlePosts()
  }

  useEffect(() => {
    handlePosts()
  }, [])

  return (
    <Container>
      {post.map((item) => {
        return (
          <div>
            <UlLista key={item.id}>
              <br />
              <br />
              <br />
              <li style={{ listStyle: 'none' }}>
                <h1 style={{ color: '#000099' }}>{item.title}</h1>
              </li>
              <br />

              <li style={{ listStyle: 'none', color: 'darkblue' }}>
                <div style={{ marginLeft: '-280px' }}>
                  <strong style={{ marginRight: '10px' }}>Autor:</strong>
                  {item.autor}
                </div>
              </li>
              <br />

              <img
                width="450"
                src={`https://blog-api-sqlite.herokuapp.com/files/${item.image}`}
                alt="imagem"
              />
              <br />

              <li style={{ width: '50%', listStyle: 'none' }}>
                {' '}
                <a
                  href="https://google.com"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'none',
                    textDecoration: 'none',
                    color: 'darkblue',
                    fontSize: '17px',
                  }}
                >
                  <p style={{ textIndent: '30px' }}>{item.text} </p>
                </a>
              </li>

              <br />

              <li
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'none',
                  textDecoration: 'none',
                  fontSize: '15px',
                  color: '#000080',
                  listStyle: 'none',
                  marginLeft: '-470px',
                }}
              >
                Likes: {item.likes}
                <br />
                <br />
                <button onClick={() => handleLikes(item.id)}>LIKE</button>
              </li>
              <br />

              <li
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'none',
                  textDecoration: 'none',
                  fontSize: '15px',
                  color: '#000080',
                  listStyle: 'none',
                  marginLeft: '-470px',
                }}
              >
                Views: {item.views}
              </li>

              <li
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 'none',
                  textDecoration: 'none',
                  fontSize: '15px',
                  color: '#000080',
                  listStyle: 'none',
                  marginLeft: '280px',
                }}
              >
                Data: {getDateWithoutTime(item.createdAt)}
              </li>
              <br />
            </UlLista>
          </div>
        )
      })}
    </Container>
  )
}

export default App
