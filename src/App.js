import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import DetailsPage from './pages/Details/DetailsPage';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Loading from './components/Loading';

function App() {

    let [anime, setAnime] = useState([]);
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        getAnime();
    }, [])
    
const getAnime = async () => {
    const options = {
  method: 'GET',
  url: 'https://animes5.p.rapidapi.com/',
  params: {fields: '*'},
  headers: {
    'X-RapidAPI-Key': '58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
    'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
  }
};

    try {
        setLoading(true);
	    const response = await axios.request(options);
        console.log(response.data);
        setAnime(response.data.animes)
        setLoading(false);
    } catch (error) {
        setLoading(false)
	    console.error(error);
}
}

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={loading ? <Loading /> : <Home anime={anime} />} />
        <Route path='/search' element={<Search />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/details/:id' element={<DetailsPage anime={anime} />} />
        <Route path='/*' element={<Navigate to='/'/>}  />
      </Routes>
    </div>
  );
}

export default App;
