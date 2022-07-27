import './point-reward.scss'
import { FiBarChart } from "react-icons/fi";
import { BiWifi,BiLeftArrowAlt } from "react-icons/bi";
import { BsBatteryFull } from "react-icons/bs";
const PointReward = () => {
    return (
        <div className='body h-full p-4'>
            <div className='header-top-icon'>
                <div className='flex justify-between items-center'>
                    <div>9:41</div>
                    <div className='flex items-center'>
                        <FiBarChart className='text-md'/>
                        <BiWifi className='text-md mx-1'/>
                        <BsBatteryFull className='text-lg'/>
                    </div>
                </div>
            </div>
            <div className='header-nav flex items-center py-3'>
                <BiLeftArrowAlt/>
                <p className='font-tatsam-medium text-xl ml-3'>পয়েন্ট রিওয়ার্ড</p>
            </div>
            <div className='status-box rounded-lg p-5'>
                <div className='flex justify-between'>
                    <p className='font-tatsam-medium text-sm'>ইশতিয়াক আহমেদ</p>
                    <div className='flex items-center'>
                        <img src={require('./assets/img/prize_hires.png')} className="w-3" />
                        <p className='font-tatsam-medium text-sm'>১২০০ পয়েন্ট</p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default PointReward;