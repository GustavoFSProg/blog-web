import { useState } from 'react'
import { Container, Button, UlLista } from './styled-app'
import api from './services/api'
import Header from './Header'

function Profile() {
  const [productsList, setProductsList] = useState([])

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  const id = localStorage.getItem('ViewsID')

  async function getOneProducts() {
    const { data } = await api.get(`/id/${id}`)

    setProductsList(data)

    return data
  }

  async function handleLikes(id) {
    await api.put(`/likes/${id}`)

    getOneProducts()
  }

  getOneProducts()

  return (
    <Container>
      <Header />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Profile</h1>
      </div>

      <div key={productsList.id}>
        <UlLista>
          <br />
          <br />
          <br />
          <li style={{ listStyle: 'none' }}>
            <h1 style={{ color: '#000099' }}>{productsList.title}</h1>
          </li>
          <br />

          <li style={{ listStyle: 'none', color: 'darkblue' }}>
            <div style={{ marginLeft: '-280px' }}>
              <strong style={{ marginRight: '10px' }}>Autor:</strong>
              {productsList.autor}
            </div>
          </li>
          <br />
          <img
            width="450"
            src={`https://blog-api-sqlite.herokuapp.com/files/${productsList.image}`}
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
              <p style={{ textIndent: '30px' }}>{productsList.text} </p>
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
            Likes: {productsList.likes}
            <br />
            <br />
            <Button onClick={() => handleLikes(productsList.id)}>LIKE</Button>
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
            Views: {productsList.views}
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
            Data: {getDateWithoutTime(productsList.createdAt)}
          </li>
          <br />
        </UlLista>
      </div>
    </Container>
  )
}

export default Profile
