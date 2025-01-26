import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { url } from '../App';

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error('Error occured');
    }
  };

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      toast.success(response.data.message);
      await fetchAlbum();
    } catch (error) {
      toast.error('Error occured');
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div>
      <p>All Songs List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5  bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Album Color</b>
          <b>Action</b>
        </div>
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5  bg-gray-100'
            >
              <img className='w-12 ' src={item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type='color' value={item.bgColor} />
              <p className='cursor-pointer' onClick={() => removeAlbum(item._id)}>
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAlbum;
