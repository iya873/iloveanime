import './Home.css'
import { useState, useEffect } from "react";
import axios from "axios";
import AnimeList from "../../components/Anime/AnimeList";
import Loading from '../../components/Loading';


const background = {
    backgroundImage: 'url("https://mcdn.wallpapersafari.com/medium/56/7/OFMv3J.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100%'
}


const Home = () => {
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
      <div className='home' style={background}>
          {loading ? <Loading /> : <AnimeList anime={anime} />}
      </div>
  )
}

export default Home