import './Home.css'
import AnimeList from "../../components/Anime/AnimeList";



const background = {
    backgroundImage: 'url("https://mcdn.wallpapersafari.com/medium/56/7/OFMv3J.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100%'
}


const Home = ({anime}) => {

  return (
      <div className='home' style={background}>
           <AnimeList anime={anime} />
      </div>
  )
}

export default Home