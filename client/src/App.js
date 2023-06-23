import './App.css';
import { Route, Routes } from 'react-router-dom';
import PhoneList from './pages/PhoneList';
import Error from './components/Error';
import PhoneDetails from './pages/PhoneDetails';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<PhoneList/>}/>
        <Route path='/phones/:id' element ={<PhoneDetails/>}/>

        <Route path='/error' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
