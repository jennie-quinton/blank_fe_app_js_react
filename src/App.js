import React, { useEffect, useState } from 'react';
import UsersTable from './users_table';
import { fetchUsers } from './api';

function App() {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
    fetchUsers().then((response)=> {setUsers(response.users)})
  },[])

  const deleteUser = (user) => {
    const updatedUsers = users.filter((u)=>(
      u.email_address !== user.email_address
    ))

    setUsers(updatedUsers)
  }

  return (
    <UsersTable users={users} deleteUser={deleteUser}/>
  );
}

export default App;
