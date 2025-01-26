import { ToastContainer, toast } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import AddAlbum from './pages/AddAlbum';
import AddSong from './pages/AddSong';
import ListAlbum from './pages/ListAlbum';
import ListSong from './pages/ListSong';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:4000';

const App = () => {
  const notify = () => toast('Wow so easy!');
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <SideBar />
      <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
        <Navbar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-album' element={<AddAlbum />} />
            <Route path='/add-song' element={<AddSong />} />
            <Route path='/list-album' element={<ListAlbum />} />
            <Route path='/list-song' element={<ListSong />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
