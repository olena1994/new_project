import { FormEvent, useState } from 'react'
import { User } from '../type'

type Props = {
  addUser: (user: User) => void
  users: User[]
}

export const UserForm: React.FC<Props> = ({ users, addUser }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  //на форму при натисканні кнопки додаємо нового user і скидаємо значення
  //інпутів на ось це ""
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
      name: name,
      surname: surname,
      email: email
    }
    addUser(newUser)
    setName("")
    setSurname("")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />

      <input
        type="text"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        placeholder="surname"
      />

      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="email"
      />

      <button
        type="submit"
      >
        Зберегти
      </button>
    </form>
  )
}