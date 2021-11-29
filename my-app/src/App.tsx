import { useState } from 'react';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UserList/UserList';
import { User } from './type';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[] | []>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const addUser = (newUser: User) => {
    setUsers([...users, newUser])
  }

  const removeUser = (id: number) => {
    setUsers([...users.filter((user) => user.id !== id)])
  }

  const selectUser = (user: User) => {
    if (user.id !== selectedUser?.id) {
      setSelectedUser(user)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Number of contacts: {users.length}</h1>
      </header>
      <UserForm
        users={users}
        addUser={addUser}
      />
      {users.length > 0 && (
        <div className="App--list">
          <UserList
            users={users}
            removeUser={removeUser}
            onUserSelected={selectUser}
            selectedUser={selectedUser}
          />
        </div>
      )}
    </div>
  );
}

export default App;
