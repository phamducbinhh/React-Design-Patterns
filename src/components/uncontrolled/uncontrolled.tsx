import React from 'react'

export default function Uncontrolled() {
  const nameInputRef = React.createRef<HTMLInputElement>()
  const passwordInputRef = React.createRef<HTMLInputElement>()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(nameInputRef.current?.value, passwordInputRef.current?.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' placeholder='Enter your name' ref={nameInputRef} />

      <input type='password' name='password' placeholder='Enter your password' ref={passwordInputRef} />

      <button type='submit'>Submit</button>
    </form>
  )
}
