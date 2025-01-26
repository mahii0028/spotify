import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [color, setColor] = useState('#ffffff');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append('image', image);
      formData.append('bgColor', color);
      formData.append('name', name);
      formData.append('desc', desc);

      const response = await axios.post(`${url}/api/album/add`, formData);
      if (response.data.success) {
        toast.success('Album added');
        setDesc('');
        setImage(false);
        setName('');
        setColor('#ffffff');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Error occured');
    }
    setLoading(false);
  };

  return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
      <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-red-600 rounded-full animate-spin'></div>
    </div>
  ) : (
    <form onSubmit={submitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className='flex flex-col gap-4'>
        <p>Upload image</p>
        <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' accept='image/*' hidden />
        <label htmlFor='image'>
          <img className='w-24 cursor-pointer' src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
        </label>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          type='text'
          placeholder='Type Here'
        />
      </div>
      <div className='flex flex-col gap-2.5'>
        <p>Album description</p>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
          type='text'
          placeholder='Type Here'
        />
      </div>
      <div className='flex flex-col gap-3'>
        <p>Background Color</p>
        <input value={color} onChange={(e) => setColor(e.target.value)} type='color' />
      </div>
      <button className='px-14 py-2.5 bg-black text-white cursor-pointer'>ADD</button>
    </form>
  );
};

export default AddAlbum;
