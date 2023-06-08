import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import DetailsPage from './pages/Details/DetailsPage';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App() {

 

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/*' element={<Navigate to='/'/>}  />
      </Routes>
    </div>
  );
}

export default App;
