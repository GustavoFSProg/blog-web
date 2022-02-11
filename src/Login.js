import React, { useState } from 'react'
import api from './services/api'
import Header from './Header'
import {
  Container,
  ProductContainer,
  DivListagemProdutos,
  Input,
  FormContainer,
  Label,
  Button,
} from './styles'

function Login() {
  const [email, setEmail] = useState('carla@gmail.com')
  const [password, setPassword] = useState('pepecao1234')

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      console.log({ email, password })
      const { token } = await api.post('/user/login/admin', { email, password })

      console.log(token)

      return alert('Login  realizado com sucesso!')

      // return history.push('/register')
    } catch (error) {
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
              <h1>Logar</h1>
            </div>
            <br />
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <Label>Email: </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Label>Senha: </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button className="confirm-Button" type="submit">
                  Login
                </Button>
              </FormContainer>
            </form>
          </ProductContainer>
        </DivListagemProdutos>
      </Container>
    </>
  )
}

export default Login
