import React from 'react'

const AnimeCarousel = ({ anime }) => {
    console.log(anime)
    return (
      <section>
               <div id='carousel' className='carousel slide'>
          <div className="carousel-inner">
              {anime.map((anime) => {
                  <div className="carousel-item" key={anime.id}>
                      <img src={anime.main_picture.large} alt='popular anime' />
                  </div>
              })}
          </div>
    </div>
      </section>
   
  )
}

export default AnimeCarousel