import { useState, useEffect } from "react";
import axios from "axios";



const Home = () => {
    let [anime, setAnime] = useState([]);

    useEffect(() => {
        getAnime();
    }, [])
    
const getAnime = async () => {
    const options = {
  method: 'GET',
  url: 'https://animes5.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
    'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
    console.log(response.data);
    setAnime(response.data)
} catch (error) {
	console.error(error);
}
}
  return (
    <div>Home</div>
  )
}

export default Home