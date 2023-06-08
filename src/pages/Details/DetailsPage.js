import { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../../components/Loading";
import DetailCard from "../../components/Details/DetailCard";
import { useParams } from "react-router-dom";

const DetailsPage = () => {

  let params = useParams();
  let [anime, setAnime] = useState([]);
  let [loading, setLoading] = useState(false);


  useEffect(() => {
    animeDetails();
  }, [setAnime])
  const animeDetails = async () => {
  
    const options = {
      method: 'GET',
      url: `https://animes5.p.rapidapi.com/${params.id}`,
      params: {
        fields: '*' },
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
    <div>
      {anime.map((anime, i) => {
        return (
          <DetailCard anime={anime} />
        )
      })}
    </div>
  )
}

export default DetailsPage