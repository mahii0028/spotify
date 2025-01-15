import PropTypes from "prop-types";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const propTypes = {
  image: PropTypes.bool.isRequired,
  name: PropTypes.bool.isRequired,
  desc: PropTypes.bool.isRequired,
  id: PropTypes.bool.isRequired,
};

const SongsItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img className="rounded" src={image} alt="image" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

SongsItem.propTypes = propTypes;
export default SongsItem;
