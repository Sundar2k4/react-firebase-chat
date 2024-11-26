import './Chat.css'
import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
const Chat = () => {
  const [open,setOpen] = useState(false);
  const [text,setText] = useState('');
  const handleClick = (e) =>{
    setText((prev) => prev+e.emoji);
    setOpen(false);
  }
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
      <div className="center">
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad consequatur magnam consectetur recusandae alias voluptas aspernatur dignissimos dicta sit, explicabo aliquam quaerat sunt veritatis, debitis harum, modi earum voluptates.</p>
                 <span>1 min ago</span>   
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad consequatur magnam consectetur recusandae alias voluptas aspernatur dignissimos dicta sit, explicabo aliquam quaerat sunt veritatis, debitis harum, modi earum voluptates.</p>
                 <span>1 min ago</span>   
          </div>
        </div>
        <div className="message">
          <img src="/avatar.png" alt="" />
          <div className="texts">
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad consequatur magnam consectetur recusandae alias voluptas aspernatur dignissimos dicta sit, explicabo aliquam quaerat sunt veritatis, debitis harum, modi earum voluptates.</p>
                 <span>1 min ago</span>   
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/img.png" alt="" />
          <img src="/camera.png" alt="" />
          <img src="/mic.png" alt="" />
        </div>
          <input type="text" placeholder='type a message...' value={text} onChange={ e => setText(e.target.value)}/>
          <div className="emoji">
            <img src="/emoji.png" alt="" onClick={()=>setOpen((prev)=> !(prev))}/>
            {open && (
              <div className="picker">
                <EmojiPicker onEmojiClick={handleClick}/>
              </div>
              
            )}
          </div>
          <button className='send'>
            Send
          </button>
      </div>
    </div>
  )
}

export default Chat
