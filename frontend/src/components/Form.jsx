import React from 'react'

export default function form() {
  return (
    <div className='container form-container'>
      <form>
        Привет!
        <input type="text" className='input input-name'/>
        <input type="text" className='input input-cirname'/>
        <button className='btn form-btn'>Отправить</button>
      </form>
    </div>
  )
}

