import React, { useState } from 'react'
import { useHistory } from 'react-router'
import api from './services/api'
import Header from './Header'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  InputFile,
  Button,
} from './styles'

function Register() {
  const [title, setTitle] = useState('')
  const [likes, setLikes] = useState(0)
  const [views, setViews] = useState(0)
  const [autor, setAutor] = useState('')
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('autor', autor)
      data.append('description', description)
      data.append('likes', likes)
      data.append('views', views)
      data.append('image', image)

      await api.post('/register', data)

      alert('Cadastro realizado com sucesso!')
      return history.push('/')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <DivListagemProdutos>
          <ProductContainer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>Cadastrar</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <InputFile
                  type="file"
                  id="image"
                  className="botao-imagem"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Label>Titulo do Post: </Label>
                <Input
                  // placeholder="Digite o Nome do Produto"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Label>Descrição: </Label>
                <Input
                  // placeholder="Digite o Preço do Produto"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Label>Texto: </Label>
                <textarea
                  rows="22"
                  cols="52"
                  // placeholder="Digite o Preço do Produto"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <br />

                <Label>Autor: </Label>
                <Input
                  // placeholder="Digite o Nome do Produto"
                  id="autor"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />

                <Button className="confirm-Button" type="submit">
                  Cadastrar
                </Button>
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Register
