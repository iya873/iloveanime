import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Navigate to='/'/>}  />
      </Routes>
    </div>
  );
}

export default App;
