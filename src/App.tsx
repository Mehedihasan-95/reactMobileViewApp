import './App.scss';
import { FaTrophy } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-box w-full z-0 h-48 absolute'> </div>
        <div className='circle absolute'></div>
      </div>
      <div className='p-4'>
        {/* user & reward*/}
        <div className='user-reward flex justify-between items-center relative py-5'>
          {/* user */}
          <div className='user flex items-center'>
            <div className='avatar'>
              <img src={require('./assets/img/demo-img.png')} className="img-fluid w-12 rounded-full" alt="" />
            </div>

            <div className='pl-4 name-lvl prose text-white'>
              <h4 className='user-name mb-0 text-white leading-6'>ইশতিয়াক</h4>
              <p className='level m-0 leading-none'>Level-Warrior</p>

            </div>
          </div>
          {/* reward button */}
          <button className='text-sm flex items-center reward-btn px-4 py-2'>  <FaTrophy className='mr-2' /> <strong>রিওয়ার্ড</strong></button>
        </div>

        <div className='bg-white rounded-2xl p-4 relative mt-8 shadow-md flex items-center justify-between'>
         <div>
          <p className='text-sm text-gray-400'>আপনার লেভেল :  Warrior</p>
          <h2 className='font-semibold'>রিওয়ার্ড পয়েন্ট ঃ ১৫০০</h2>
         </div>
         <div className='trofy'>
          <img src={require('./assets/img/cup.png')} className="img-fluid w-14" />
         </div>
        </div>


      </div>

      <footer className=' absolute bottom-0'>
        footer
      </footer>
    </div>
  );
}

export default App;
