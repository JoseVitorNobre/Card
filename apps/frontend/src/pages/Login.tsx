import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'ui'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormData {
  email: string
  password: string
}

const schema = Yup.object({
  email: Yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 dígitos')
})

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormData>({ resolver: yupResolver(schema) })

  const handleLogin = (data: IFormData) => {
    console.log(data)
  }

  return (
    <Container>
      <FormContainer>
        <h2>Área de Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} style={{ width: '100%' }}>
          <Input error={errors.email} control={control} name='email' placeholder='E-mail' />
          <Input
            error={errors.password}
            control={control}
            type='password'
            name='password'
            placeholder='Senha'
          />
          <Button text='Enviar' />
          <Button text='Cadastrar-se' />
        </form>
      </FormContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.div`
  background-color: #323232;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-flow: column wrap;
  color: #fff;
  align-items: center;
`
