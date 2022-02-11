import { useEffect, useState } from 'react'
import { Container, Button, UlLista } from './styled-app'
import api from './services/api'
import Header from './Header'

function Profile() {
  const [productsList, setProductsList] = useState([])
  const [comments, setComments] = useState([])

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

  async function getComments() {
    const id = localStorage.getItem('ViewsID')

    console.log(`ID: ${id}`)

    const { data } = await api.get(`/get/coments/${id}`)

    console.log(`Data: ${data}`)
    setComments(data)
  }

  useEffect(() => {
    getComments()
    getOneProducts()
  }, [])

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
          <img width="450" src={productsList.image} alt="imagem" />
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
          <br />
          <br />
          <br />
          <br />
          <div style={{ marginLeft: '-70px', width: '410px' }}>
            {comments.map((item) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    width: '250%',
                    marginLeft: '-80px',
                    marginBottom: '15px',
                  }}
                >
                  <ul
                    key={item._id}
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      background: '#e6e6e6',
                      height: '100px',
                      minWidth: '500px',
                      width: '600px',
                      paddingTop: '16px',
                      marginLeft: '2px',
                      borderRadius: '10px',

                      // flexDirection: 'row',
                      // alignItems: 'center',
                    }}
                  >
                    <img
                      width="70"
                      height="70"
                      style={{ marginLeft: '-20px' }}
                      src={productsList.image}
                      alt="imagem"
                    />
                    <li style={{ marginLeft: '20px', marginTop: '5px', width: '120px' }}>
                      <strong>{item.user_name}</strong>
                    </li>
                    <br />
                    <br />

                    <li style={{ marginTop: '5px', marginLeft: '-40px', width: '520px' }}>
                      <br />
                      {item.comments}
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </UlLista>
      </div>
    </Container>
  )
}

export default Profile
