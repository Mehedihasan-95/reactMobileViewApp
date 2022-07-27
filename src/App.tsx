import './App.scss';
import QuizCategory from './components/quiz-category/quiz-category'
import { FaTrophy, FaAngleRight } from "react-icons/fa";
function App() {
  const quizLists = [
    {
      id: 1,
      icon: require("./assets/img/play.png"),
      name: "খেলাধুলা"
    },
    {
      id: 2,
      icon: require("./assets/img/info.png"),
      name: "তথ্যমূলক"
    },
    {
      id: 3,
      icon: require("./assets/img/idea.png"),
      name: "গুগলি"
    },
    {
      id: 4,
      icon: require("./assets/img/globe.png"),
      name: "আন্তর্জাতিক"
    },
    {
      id: 5,
      icon: require("./assets/img/bd.png"),
      name: "বাংলাদেশ"
    },
    {
      id: 6,
      icon: require("./assets/img/war.png"),
      name: "এন্টারটেইন"
    },

  ]
  const menuIcons = [
    {
      id: 1,
      icon: require('./assets/icons/home.png')
    },
    {
      id: 2,
      icon: require('./assets/icons/trofy.png')
    },
    {
      id: 3,
      icon: require('./assets/icons/apps.png')
    },
    {
      id: 4,
      icon: require('./assets/icons/menu.png')
    },

  ]
  return (
    <div className="App">
      <div className='header'>
        <div className='header-box w-full z-0 h-48 absolute'> </div>
        <div className='circle absolute'></div>
      </div>

      <div className='body p-4'>
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
          <button className='text-sm flex items-center reward-btn px-4 py-2'>  <FaTrophy className='mr-2' /> <strong className='font-tatsam-regular'>রিওয়ার্ড</strong></button>
        </div>

        {/* reward point*/}
        <div className='bg-white rounded-2xl p-4 relative mt-8 flex items-center justify-between reward-point-box'>
          <div>
            <p className='text-sm text-gray-400'><span className='font-tatsam-regular'>আপনার লেভেল :</span>  Warrior</p>
            <h2 className='font-tatsam-medium text-lg'>রিওয়ার্ড পয়েন্ট ঃ ১৫০০</h2>
          </div>
          <div className='trofy'>
            <img src={require('./assets/img/cup.png')} className="img-fluid w-14" />
          </div>
        </div>

        {/* quiz reward */}
        <div className='quiz py-4'>
          <div className='flex items-center justify-between pb-3'>
            <div className='reward-img'>
              <img src={require('./assets/img/reward-img.png')} className="img-fluid w-40" />
            </div>
            <div className='quiz-text text-right'>
              <h1 className='font-tatsam-bold text-2xl color-secondary'>কুইজার্স রিওয়ার্ড</h1>
              <p className='font-tatsam-regular text-sm'>অর্জন করে লুফে নাও দারুন সব</p>
              <p className='font-tatsam-regular text-sm'>আকর্ষণীয় অফার</p>
              <button className='rounded-3xl mt-2 px-4 py-2 bg-primary text-white text-xs'>ক্লিক কর</button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-2 h-2 rounded bg-primary'></div>
            <div className='w-2 h-2 rounded mx-1 bg-gray-300'></div>
            <div className='w-2 h-2 rounded bg-gray-300'></div>
          </div>
        </div>

        {/* select quiz */}
        <div className='select-quiz py-4'>
          <div className='flex justify-between items-center pb-3'>
            <h3 className='font-tatsam-medium text-xl'>কুইজ ক্যাটাগরি পছন্দ করুন</h3>
            <FaAngleRight className='text-xl' />
          </div>
          <div className="grid grid-cols-3 gap-5">
            {quizLists.map((categoryItems) => {
              return <QuizCategory key={categoryItems.id} categoryList={categoryItems} />
            })
            }
          </div>

        </div>

      </div>

      <footer className='absolute bottom-0 w-full'>
        <div className='nav-bar bg-white h-16'>
          <div className='grid grid-cols-4 h-full gap-5'>
            {menuIcons.map((icons) => {
              return <div className='flex justify-center items-center'>
                <img src={icons.icon} className="w-8" />
              </div>
            })

            }
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
