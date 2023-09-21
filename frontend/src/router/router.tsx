import {Route,Routes} from 'react-router-dom';
// @ts-ignore
import HOME from '../pages/Home.jsx';
// @ts-ignore
import TASK from '../pages/Task.jsx';
// @ts-ignore
import USERDETAIL from '../components/UserDetail.jsx';
// @ts-ignore
import ABOUT from '../pages/About.jsx';
// @ts-ignore
import WHYME from '../pages/whyme.jsx';

 function GlobalRouter() {
   return (
    <Routes>
        <Route path='/' element={<HOME />}/>
        <Route path='/task' element={<TASK/>}></Route>
        <Route path="/user/:username" element={<USERDETAIL/>} />
        <Route path="/about" element={<ABOUT/>} />
        <Route path="/whyme" element={<WHYME/>} />
    </Routes>
   )
 }
 
 export default GlobalRouter