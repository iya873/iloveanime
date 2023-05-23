import AnimeCard from "./AnimeCard"


const AnimeList = ({anime}) => {
  return (
      <div className='container-fluid'>
          <h2>Popular Searches</h2>
          <div className="row">
              
               {anime.map((anime, i) => {
                   return (
                  <div className="col" key={i}>
                  <AnimeCard anime={anime}  />
                       </div>
                   )
          })}   
              
          </div>
          
    </div>
  )
}

export default AnimeList