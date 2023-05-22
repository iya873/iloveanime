import axios from "axios";


export const getAnime = async () => {
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
	const response = await axios.request(options);
    console.log(response.data);
    setAnime(response.data.animes)
} catch (error) {
	console.error(error);
}
}