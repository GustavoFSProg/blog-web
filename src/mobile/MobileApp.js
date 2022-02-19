import { useEffect, useState } from 'react'
import { Container, Button, UlLista } from './mobile-styled-app'
import api from '../services/api'

import { Link } from 'react-router-dom'
import MobileHeader from './MobileHeader'

function MobileApp() {
  const [post, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  async function handlePosts() {
    const { data } = await api.get(`/dois/${4}`)

    setPosts(data)
  }

  async function handleLikes(id) {
    await api.put(`/likes/${id}`)

    handlePosts()
  }

  async function handleViews(id) {
    await api.put(`/views/${id}`)

    localStorage.setItem('ViewsID', id)
  }

  useEffect(() => {
    handlePosts()
  }, [])

  return (
    <Container>
      <MobileHeader />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Mobile App</h1>
      </div>

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
              <Link onClick={() => handleViews(item.id)} to="/profile">
                <img width="450" style={{ cursor: 'pointer' }} src={item.image} alt="imagem" />
              </Link>
              <br />

              <li style={{ width: '50%', listStyle: 'none' }}>
                {' '}
                <Link
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 'none',
                    textDecoration: 'none',
                    color: 'darkblue',
                    fontSize: '17px',
                  }}
                  onClick={() => handleViews(item.id)}
                  to="/profile"
                >
                  <p style={{ textIndent: '30px' }}>Descricao: {item.description} </p>
                </Link>
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
                <Button onClick={() => handleLikes(item.id)}>LIKE</Button>
                <br />
                <br />
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

export default MobileApp
