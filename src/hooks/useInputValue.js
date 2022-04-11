import { useState } from 'react'

const useInputValue = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleEmail,
    handlePassword,
    handleName,
  }
}

export default useInputValue
