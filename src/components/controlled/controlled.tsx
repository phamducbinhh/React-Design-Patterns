import React from 'react'

export default function Controlled() {
  const [error, setError] = React.useState('')
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  React.useEffect(() => {
    if (name.length < 1) {
      setError('The name can not be empty')
    } else {
      setError('')
    }
  }, [name])
  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input name='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input name='age' type='number' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}
