import React from "react";
import { User } from "../type";

type Props = {
  users: User[]
  removeUser: (id: number) => void
}

export const UserList:React.FC<Props> = ({ users, removeUser }) => {
  return (
    <div>
      {users.map(user => (
        <>
          <div>{user.id}</div>
          <div>{user.name}{' '}{user.surname}</div>
          <div>{user.email}</div>
          <button
            type="button"
            onClick={() => removeUser(user.id)}
          >
            Видалити користувача
          </button>
        </>
      ))}
    </div>
  )
}