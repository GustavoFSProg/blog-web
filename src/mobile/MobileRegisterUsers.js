import React, { useState } from 'react'
import api from '../services/api'
import MobileHeader from './MobileHeader'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  Button,
} from './mobile-styles'

function MobileRegisterUsers() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const token = localStorage.getItem('Token')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = { name, email, password, role, token }

      await api.post('/user-register', data)

      return alert('Cadastro realizado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <MobileHeader />
      <Container>
        <DivListagemProdutos>
          <ProductContainer>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1>Cadastrar Usuários</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <Label>Nome: </Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <Label>Email: </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Senha: </Label>
                <Input
                  rows="22"
                  cols="52"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <Label>Cargo: </Label>
                <Input id="role" value={role} onChange={(e) => setRole(e.target.value)} />
                {token ? (
                  <Button className="confirm-Button" type="submit">
                    Cadastrar
                  </Button>
                ) : (
                  <h2>Unautorized!!!</h2>
                )}
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default MobileRegisterUsers
