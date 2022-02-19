import React, { useState, useEffect } from 'react'
import api from '../services/api'
import MobileHeader from './MobileHeader'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  InputFile,
  Button,
} from './mobile-styles'

function MobileUpdatePost() {
  const [title, setTitle] = useState('')
  const [likes] = useState(0)
  const [views] = useState(0)
  const [autor, setAutor] = useState('')
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState([])

  const [productsList, setProductsList] = useState([])

  const token = localStorage.getItem('Token')

  const id = localStorage.getItem('ViewsID')

  async function getOneProducts() {
    const id = localStorage.getItem('ViewsID')

    const { data } = await api.get(`/id/${id}`)

    setProductsList(data)

    console.log(`Data: ${data}`)

    return data
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const datas = new FormData()

      datas.append('title', title)
      datas.append('text', text)
      datas.append('autor', autor)
      datas.append('description', description)
      datas.append('likes', likes)
      datas.append('views', views)
      datas.append('image', image)

      await api.put(`/post-update/${id}`, datas)

      return alert('Update realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  useEffect(() => {
    getOneProducts()
  })

  return (
    <>
      <MobileHeader />
      <Container>
        <DivListagemProdutos>
          <ProductContainer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>Editar Post</h1>
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
                <img src={productsList.image} width="100" alt={productsList.title} />
                <Label>Titulo do Post: </Label>
                <Input
                  id="title"
                  placeholder={productsList.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Label>Descrição: </Label>
                <Input
                  placeholder={productsList.description}
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Label>Texto: </Label>
                <textarea
                  rows="22"
                  cols="52"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={productsList.text}
                ></textarea>
                <br />

                <Label>Autor: </Label>
                <Input
                  placeholder={productsList.autor}
                  id="autor"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
                {token ? (
                  <Button className="confirm-Button" type="submit">
                    Editar
                  </Button>
                ) : (
                  <span>Unautorized!!!</span>
                )}
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default MobileUpdatePost
