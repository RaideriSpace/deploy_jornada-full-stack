import React from 'react'
import Player from '../componentes/Player';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from "../assets/database/songs"
import { artistArray } from "../assets/database/artists"

const Song = () => {
  const { id } = useParams();
  // console.log(id);

  // const songId = useParams().id;
  // console.log(songId);
  
  const { image, name, duration, artist, audio} = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];
  // console.log(songObj)
  
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];
  // const artistId = artistArray.filter(
    //   (currentArtistObj) => currentArtistObj.name === artist
    // )[0].id;
    // console.log(artistObj)
    
    const songsArrayFromArtist = songsArray.filter(
      (currentSongObj) => currentSongObj.artist === artist
    );
    // console.log(songsArrayFromArtist);


    // const randomIndex = id + 1;
    const randomIndex = Math.floor(
      Math.random()* (songsArrayFromArtist.length -1)
    );
    const nextSong = songsArrayFromArtist[randomIndex]._id;
    // console.log(nextSong);
    
    const randomIndex2 = Math.floor(
      Math.random() * (songsArrayFromArtist.length - 1) 
    );
    const backSong = songsArrayFromArtist[randomIndex2]._id;
    
    return (
    <div className='song'>
      <div className='song__container'>
        <div className='song__image-container'>
          <img src={image} alt={`Imagem da música ${name}`}/>
        </div>
      </div>

      <div className='song__bar'>
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <div className='song__artist-image'>
            <img
              width={75}
              height={75} 
              src={artistObj.image} 
              alt={`Imagem do Artista ${artist}`}/>
          </div>
        </Link>

        <Player duration={duration} nextSong={nextSong} backSong={backSong} audio={audio}/>

        <div>
          <p className='song__name'>{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song