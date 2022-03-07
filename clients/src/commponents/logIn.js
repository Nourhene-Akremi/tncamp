import React from 'react'

function logIn() {
  return (
    <div>
      <form method="post">
      
       <div className="email">
          <label>Email </label>
          <input type="email" name="email" id="" />
       </div>

      <div className="password">      
          <label>Password </label>
          <input type="password" name="password" id="" />
      </div>

        </form>
    </div>
  )
}

export default logIn