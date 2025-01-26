import { Fragment, useContext } from 'react';
import Navbar from './Navbar';
import AlbumItem from './AlbumItem';
import SongsItem from './SongsItem';
import { PlayerContext } from '../context/PlayerContext';

const DisplayHome = () => {
  const { songsData, albumsData } = useContext(PlayerContext);
  return (
    <Fragment>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((songs, index) => (
            <SongsItem key={index} name={songs.name} desc={songs.desc} id={songs._id} image={songs.image} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayHome;
