import './App.css'
import SideBar from './pages/SideBar/SideBar'
import TopBar from './pages/TopBar/TopBar'
function App({page}) {

  return (
    <>
    <TopBar/>
    <div className='flex flex-row w-full h-100'>
      <SideBar/>
        {page}
    </div>
    </>
  )
}

export default App
