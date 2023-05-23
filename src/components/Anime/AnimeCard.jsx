import AnimeModal from "../Modal/AnimeModal"


const AnimeCard = ({anime}) => {
  return (
      <div className='card' style={{width: '18rem'}}>
          <img src={anime.main_picture.medium} alt={anime.title} />
          <div className="card-body">
              <h5 className="card-title">{anime.title_english}</h5>
              <AnimeModal anime={anime} />
          </div>
    </div>
  )
}

export default AnimeCard