import {Route , Routes } from 'react-router-dom'
import Loginpage from './pages/login/Loginpage';
import Homepage from './pages/home/Homepage';
import Signup from './components/auth/Signup';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
          <Route path='/home' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;