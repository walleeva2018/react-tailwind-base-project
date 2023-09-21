import Navbar from "./components/Navbar/Navbar"
import GlobalRouter from "./router/router"

const App= () =>{
  return (
    <div className='bg-green-600'>
       <Navbar/>
       <GlobalRouter />
    </div>
  )
}

export default App