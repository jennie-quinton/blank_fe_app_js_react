import React from 'react';

export default ({ users, deleteUser }) => {
  if(!users) {
    return null
  }

  return <table>
    <thead>
    <tr>
      <th>Email</th>
      <th>Access</th>
      <th>State</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
        {users.map((user)=>{
          return (
            <tr>
              <td>{user.email_address}</td>
              <td>{user.access}</td>
              <td>{user.state}</td>
              <td><button onClick={()=>{deleteUser(user)}}>X</button></td>
            </tr>
          )
        })}
    </tbody>
  </table>
}
