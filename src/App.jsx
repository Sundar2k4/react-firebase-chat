import Chat from "./components/userchat/Chat"
import Detail from "./components/userdetail/Detail"
import List from "./components/userlist/List"
const App = () => {
  return (
    <div className='container'>
     <List/>
     <Chat/>
     <Detail/>

    </div>
  )
}

export default App