import './App.css'
import SideBar from './components/SideBar/SideBar'
import TopBar from './components/TopBar/TopBar'
function App() {
  return (
    <>
    <TopBar/>
    <div className='flex flex-row'>
      <SideBar/>
      <div className='w-screen text-center'>
        <h1 className='text-9xl'>Hey There!</h1>
        <p>Welcome to the friendly note-taking app, Note-Taker!</p>
      </div>
    </div>
    </>
  )
}

export default App
