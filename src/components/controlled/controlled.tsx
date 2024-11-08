import React from 'react'

export default function Controlled() {
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type='password'
        name='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit'>Submit</button>
    </form>
  )
}
