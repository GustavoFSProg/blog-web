import { useEffect, useState } from 'react'
import { Container, Button, UlLista } from './styled-app'
import api from './services/api'
import Header from './Header'
import { useHistory, Link } from 'react-router-dom'

function Profile() {
  const [productsList, setProductsList] = useState([])
  const [comentarios, setComentarios] = useState([])
  const [user_name, setUser_name] = useState('')
  const [comments, setComments] = useState('')

  const token = localStorage.getItem('Token')

  const history = useHistory()

  function setItemId(id) {
    localStorage.setItem('ViewsID', id)
  }

  function getDateWithoutTime(date) {
    return require('moment')(date).format('DD-MM-YYYY')
  }

  async function deletePost() {
    try {
      if (!token) {
        alert('Token inválido! Login to Enter!')
      } else {
        const id = localStorage.getItem('ViewsID')

        await api.delete(`/del/${id}`)

        return alert('Post Apagado!!')
      }
    } catch (error) {
      return alert('ERRO ao Deletar!!')
    }
  }

  async function handleComents(e) {
    e.preventDefault()

    try {
      const id = localStorage.getItem('ViewsID')

      const data = { user_name, comments }

      await api.post(`/comments-register/${id}`, data)

      history.push('/profile')

      return alert('Comentario enviado!!')
    } catch (error) {
      return alert('ERRO!!', error)
    }
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
    setComentarios(data)
  }

  getOneProducts()

  useEffect(() => {
    getComments()
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
            {comentarios.map((item) => {
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
                      <strong>{productsList.user_name}</strong>
                    </li>
                    <br />
                    <br />

                    <li style={{ marginTop: '5px', marginLeft: '-40px', width: '520px' }}>
                      <br />
                      {productsList.comments}
                    </li>
                  </ul>
                </div>
              )
            })}
          </div>
        </UlLista>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            onSubmit={handleComents}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '700px',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ccebff',
            }}
          >
            <br />

            <label>Autor:</label>
            <input
              type="text"
              name="autor"
              value={user_name}
              onChange={(e) => setUser_name(e.target.value)}
              style={{ width: '400px' }}
            />
            <br />

            <label>Comentario:</label>
            <textarea
              type="text"
              name="comentario"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              cols="60"
              rows="12"
            ></textarea>
            <br />
            <br />

            <button
              type="submit"
              style={{
                width: '160px',
                height: '30px',
                background: 'lightgreen',
                borderRadius: '15',
              }}
            >
              {' '}
              Enviar
            </button>
            <br />
            <br />

            <Link
              style={{
                width: '160px',
                height: '50px',
                background: 'lightgreen',
                borderRadius: '25',
                textAlign: 'center',

                fontFamily: 'Arial',
                fontSize: '18px',
                textDecoration: 'none',
                color: 'blueviolet',
                marginBottom: '22px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              to="/update-post"
              onClick={() => setItemId(productsList.id)}
            >
              Editar o Post
            </Link>

            <Link
              style={{
                width: '160px',
                height: '50px',
                background: 'lightgreen',
                borderRadius: '25',
                textAlign: 'center',

                fontFamily: 'Arial',
                fontSize: '18px',
                textDecoration: 'none',
                color: 'blueviolet',
                marginBottom: '22px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              to="/update-post"
              onClick={() => deletePost()}
            >
              Deletar o Post
            </Link>
            <br />
            <br />
            <br />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Profile
