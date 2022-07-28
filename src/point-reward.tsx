import { FiBarChart } from "react-icons/fi";
import { BiWifi, BiLeftArrowAlt } from "react-icons/bi";
import { BsBatteryFull } from "react-icons/bs";
import RewardList from "./components/reward-lists/reward-list";
import './point-reward.scss'

const PointReward = () => {
    const PointsReward = [
        {
            id:1,
            icon: require('./assets/icons/award.png'),
            title: 'মোবাইল রিচার্জ ২০ টাকা',
            point: '১০০০ পয়েন্ট',
            isBtnDisabled: false,
            isVideoEnabled: false, 
        },
        {
            id:2,
            icon: require('./assets/icons/lock.png'),
            title: 'মোবাইল রিচার্জ ৫০ টাকা ',
            point: '১৫০০ পয়েন্ট',
            isBtnDisabled: true,
            isVideoEnabled: false,
        },
        {
            id:3,
            icon: require('./assets/icons/play.png'),
            title: 'যেভাবে কাজ করে',
            point: 'বিস্তারিত দেখতে ক্লিক করুন',
            isBtnDisabled: false,
            isVideoEnabled: true,
        }
    ]
    return (
        <div className='body h-full p-4'>
            <div className='header-top-icon'>
                <div className='flex justify-between items-center'>
                    <div>9:41</div>
                    <div className='flex items-center'>
                        <FiBarChart className='text-md' />
                        <BiWifi className='text-md mx-1' />
                        <BsBatteryFull className='text-lg' />
                    </div>
                </div>
            </div>
            <div className='header-nav flex items-center py-3'>
                <BiLeftArrowAlt />
                <p className='font-tatsam-medium text-xl ml-3'>পয়েন্ট রিওয়ার্ড</p>
            </div>
            <div className='status-box rounded-lg p-5'>
                <div className='flex justify-between'>
                    <p className='font-tatsam-regular text-md text-white'>ইশতিয়াক আহমেদ</p>
                    <div className='flex items-center'>
                        <img src={require('./assets/img/prize_hires.png')} className="w-4 mr-1" />
                        <p className='font-tatsam-regular text-md text-white'>১২০০ পয়েন্ট</p>
                    </div>
                </div>

                <div className='pt-8 text-center text-white'>
                    <p className='text-2xl font-semibold'>Warrior</p>
                    <div className='w-full h-2 rounded-md my-2 bg-white'></div>
                    <p className='font-tatsam-regular px-2 text-sm'>পয়েন্ট ব্যবহার করলে লেভেলের অগ্রগতির উপর কোন প্রভাব পড়বে না</p>
                </div>
            </div>

            <div className='nav-header-title py-6'>
                <div className=' flex justify-between items-center'>
                    <p className='font-tatsam-regualar text-md'>পয়েন্ট রিওয়ার্ড</p>
                    <p className='font-tatsam-regualar text-sm'>সব দেখুন</p>
                </div>
            </div>

            <div>
                {PointsReward.map((rewards)=>{
                    return <RewardList key={rewards.id} rewards={rewards}/>;
                }
                )}
            </div>
        </div>
    )
};
export default PointReward;