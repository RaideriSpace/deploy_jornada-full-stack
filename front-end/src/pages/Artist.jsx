import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import React from 'react'
import { artistArray } from "../assets/database/artists"
import SongList from '../componentes/SongList'
import { songsArray } from "../assets/database/songs"

const Artist = () => {

  const { id } = useParams();
  // console.log(useParams());

  // console.log(artistArray.filter((currentArtistObj, index) => currentArtistObj._id === Number(id)));
  // const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj._id === Number(id))[0];
  const {name, banner} = artistArray.filter((currentArtistObj) => currentArtistObj._id === id)[0];

  const songsArrayFromArtist = songsArray.filter((currentSongObj) => currentSongObj.artist === name);
  // console.log(songsArrayFromArtist);
  
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  // console.log(Math.floor(Math.random() * (songsArrayFromArtist.length - 1)));
  // console.log("Tamanho do Array:" + songsArrayFromArtist.length)
   // console.log(randomIdFromArtist)

  return (
    <div className="artist">
      <div className="artist__header" 
       style={{
        backgroundImage: 
          `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${banner})`,
      }}>

        <h2 className='artist__title'>
          {name}
        </h2>

        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="single-item__icon single-item__icon--artist" icon={faCirclePlay} />
        </Link>

      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist}/>

      </div>
    </div>
  )
}

export default Artist