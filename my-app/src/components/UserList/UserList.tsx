import React from "react";
import { User } from "../../type";
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  users: User[]
  removeUser: (id: number) => void
  onUserSelected: (user: User) => void
  selectedUser: User | null
};

export const UserList:React.FC<Props> = ({
  users,
  removeUser,
  onUserSelected,
  selectedUser
  }) => {

  return (
    <div className="">
      <h3>List of users:</h3>
      {users.map(user => (
        <>
          <div>User id:{' '}{user.id}</div>
          <div>User name:{' '}{user.name}{' '}{user.surname}</div>

          <div className="btn-group">
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => removeUser(user.id)}
          >
            Remove
          </button>

          <button
            className="btn btn-success"
            type="button"
            onClick={() => onUserSelected(user)}
          >
            More info
          </button>
          </div>

          { selectedUser && (
            <UserInfo
            selectedUser={selectedUser}
          />
          )}
        </>
      ))}
    </div>
  )
}
