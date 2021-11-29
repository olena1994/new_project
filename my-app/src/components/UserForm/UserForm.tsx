import { FormEvent, useState } from 'react'
import { User } from '../../type'

type Props = {
  addUser: (user: User) => void
  users: User[]
}

export const UserForm: React.FC<Props> = ({ users, addUser }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  //на форму при натисканні кнопки додаємо нового user і скидаємо значення
  //інпутів на ось це ""
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newUser = {
      id: users.length > 0 ? users[users.length - 1].id + 1 : 0,
      name: name,
      surname: surname,
      email: email,
      phone: phone,
    }
    addUser(newUser)
    setName("")
    setSurname("")
    setEmail("")
    setPhone("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Name:</label>
        <input
          className="form-control"
          id="formGroupExampleInput"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput1" className="form-label">Surname:</label>
        <input
          className="form-control"
          id="formGroupExampleInput1"
          type="text"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          placeholder="surname"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Email:</label>
        <input
          className="form-control"
          id="formGroupExampleInput2"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput3" className="form-label">Phone:</label>
        <input
          className="form-control"
          id="formGroupExampleInput3"
          type="number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="phone"
          required
        />
      </div>

      <div className="form--children">
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  )
}