import { Fragment } from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/frontend-assets/assets";
import AlbumItem from "./AlbumItem";
import SongsItem from "./SongsItem";

const DisplayHome = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((songs, index) => (
            <SongsItem key={index} name={songs.name} desc={songs.desc} id={songs.id} image={songs.image} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayHome;
