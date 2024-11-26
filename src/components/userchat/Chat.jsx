import './Chat.css'
import React from 'react'

const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="chatter">
          <img src="/avatar.png" alt="" />
        <div className="texts">
          <span>Sundar</span>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        </div>
        <div className="icons1">
        <img src="/phone.png" alt="" />
        <img src="/video.png" alt="" />
        <img src="/info.png" alt="" />
      </div>
     
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Chat
