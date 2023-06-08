import { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../../components/Loading";
import DetailCard from "../../components/Details/DetailCard";
import { useParams } from "react-router-dom";


const DetailsPage = () => {
  const params = useParams()
  let [details, setDetails] = useState({})
  let [loading, setLoading] = useState(false)
  
  useEffect(() => {
    getDetails();
},[])

  const getDetails = async () => {
     const options = {
  method: 'GET',
  url: `https://animes5.p.rapidapi.com/anime/${params.id}`,
  params: {fields: '*'},
  headers: {
    'X-RapidAPI-Key': '58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
    'X-RapidAPI-Host': 'animes5.p.rapidapi.com'
  }
};

    try {
        // setLoading(true);
	    const response = await axios.request(options);
        console.log(response.data.anime);
        setDetails(response.data.anime)
        // setLoading(false);
    } catch (error) {
        // setLoading(false)
	    console.error(error);
}
}
  


  return (
    <>
      <h1>Details Page</h1>
      <h2 className='title-english'>{details.title_english}</h2>
      <h3 className='title-japanese'>{details.title_japanese}</h3>
      <p>{details.genres + ' '}</p>
    </>
    
)
}

export default DetailsPage