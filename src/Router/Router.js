import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profile from '../Components/Profile';
import Skills from '../Components/Skills';
import Welcome from '../Components/Welcome';
const Rute = () => {
    return(
       <div>
        <Routes>
            <Route path='/' element={<Welcome />}/>            
            <Route path='profile' element={<Profile />}/>
            <Route path='skills' element={<Skills />}/>
            <Route path='address' element={<Skills />}/>
        </Routes>
       </div>
    )
}

export default Rute