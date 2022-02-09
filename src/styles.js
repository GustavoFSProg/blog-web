import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 888px;
  background: #e6f3ff;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`

export const DivListagemProdutos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 23px;
  margin-top: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-top: 10px;
    margin-left: -32px;
  }
`
export const ProductContainer = styled.div`
  background: #cce6ff;
  margin-left: 20px;
  border-radius: 15px;

  @media screen and (max-width: 700px) {
    margin-top: 20px;
  }
`

export const Input = styled.input`
  /* background: red; */
  border-radius: 8px;
  height: 45px;
  width: 90%;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 1px solid #0069cc;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`
export const Label = styled.label`
  margin-left: -190px;
  font-family: 'Roboto';
  font-size: 15px;
  color: #0069cc;
  margin-top: 10px;
`

export const InputFile = styled.input`
  /* background: red; */
  border-radius: 12px;
  height: 30px;
  width: 90%;
  margin-bottom: 10px;
  margin-top: 20px;
`
export const Button = styled.button`
  width: 50%;
  height: 30px;
  cursor: pointer;
  background: #b3daff;
  border: 1px solid #80c1ff;
  border-radius: 10px;
  color: #004f99;
  margin-bottom: 40px;
  /* display: none; */
`
