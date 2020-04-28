import React, { useState, useEffect } from "react"

import request from "./utils/request"

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    request.get("users").then((response) => {
      setUsers(response.data)
    })
  })
  return (
    <div>
      <h1>Example React Env</h1>
      <ul>
        {users.length > 0 &&
          users.map((user) => {
            return <li>{user.login}</li>
          })}
      </ul>
    </div>
  )
}

export default App
