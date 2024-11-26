import React, { useState } from 'react'
import './chatlist.css'
const ChatList = () => {
  const [addMode,setAddMode] = useState('false');
  return (
    
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='jhon' />
        </div>
        <img src={ addMode?'/minus.png':'/plus.png'} alt="" className='add' onClick={() => setAddMode((prev) => !prev)}/>
      </div>
      <div className="chatitems">
        <img src="/avatar.png" alt="" />
        <div className="text">
          <span>Sundar</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatitems">
        <img src="/avatar.png" alt="" />
        <div className="text">
          <span>Sundar</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatitems">
        <img src="/avatar.png" alt="" />
        <div className="text">
          <span>Sundar</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
