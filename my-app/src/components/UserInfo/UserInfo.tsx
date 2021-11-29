import React from "react";
import { User } from "../../type";

type Props = {
  selectedUser: User
}

export const UserInfo: React.FC<Props> = ({ selectedUser }) => {
  return (
    <div className="user-info">
      <h6>User info:</h6>
      <div>
        Email:{' '}{selectedUser.email}
        <br />
        Phone:{' '}{selectedUser.phone}
      </div>
    </div>
  )
}
