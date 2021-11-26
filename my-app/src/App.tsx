import { useState } from 'react';
import { UserForm } from './components/UserForm/UserForm';
import { UserList } from './components/UserList';
import { User } from './type';
import './App.css';

function App() {
  const [users, setUsers] = useState<User[] | []>([])

  const addUser = (newUser: User) => {
    setUsers([...users, newUser])
  }

  const removeUser = (id: number) => {
    setUsers([...users.filter((user) => user.id !== id)])
  }

  return (
    <div className="App">
      <header>
        <h1>Кількість контактів: {users.length}</h1>
      </header>
      <UserForm
        users={users}
        addUser={addUser}
      />
      {users.length > 0 && (
        <div>
          <h3>Список користувачів:</h3>
          <UserList
            users={users}
            removeUser={removeUser}
          />
        </div>
      )}
    </div>
  );
}

export default App;
