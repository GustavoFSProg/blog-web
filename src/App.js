import { useEffect, useState } from 'react'
import api from './services/api'
import { format } from 'date-fns'

function App() {
  const [post, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  async function handlePosts() {
    const { data } = await api.get(`/`)

    setPosts(data)
  }

  useEffect(() => {
    handlePosts()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
      }}
    >
      {post.map((item) => {
        return (
          <div>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '1',
              }}
              key={item.id}
            >
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

              <a href="F">
                <img
                  width="450"
                  src={`https://blog-api-sqlite.herokuapp.com/files/${item.image}`}
                  alt="imagem"
                />
              </a>
              <br />

              <li style={{ width: '50%', listStyle: 'none' }}>
                {' '}
                <a
                  href="#"
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
              <br />
              <br />
              <br />

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
                {/* Data: {dataAtualFormatada(item.createdAt)} */}
                Data: {getDateWithoutTime(item.createdAt)}
              </li>
              <br />
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default App
