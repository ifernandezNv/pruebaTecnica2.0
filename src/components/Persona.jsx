import React from 'react'

function Persona({dato}) {

  const {first_name, last_name, email, avatar} = dato;

  return (
    <>
      <div className='flex items-center gap-5'>
        <div>
          <img src={avatar}/>
        </div>
        <div>
          <p>{first_name}</p>
          <p>{last_name}</p>
          <p>{email}</p>
        </div>
        
      </div>
    </>
  )
}

export default Persona