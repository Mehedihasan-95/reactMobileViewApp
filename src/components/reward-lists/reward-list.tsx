
import './reward-list.scss';

const RewardList = ()=>{
    return (
        <div className='bg-white rounded-xl w-full p-4 point-list-box flex justify-between items-center'>
            <div className='flex justify-between items-center'>
                <div className='bg-slate-600 rounded-md text-white w-10 h-10 p-3 flex justify-center items-center'>
                    <img src={require('../../assets/icons/award.png')} className='img-fluid'/>
                </div>

                <div className='pl-3'>
                    <p className='font-tatsam-regular'>মোবাইল রিচার্জ ২০ টাকা </p>
                    <p className='font-tatsam-regular text-sm text-gray-400'>১০০০ পয়েন্ট</p>
                </div>
            </div>

            <button className='font-tatsam-regular text-white bg-primary rounded-3xl px-4 py-2'>সংগ্রহ করুন</button>
        </div>
    )
}

export default RewardList;

// {
    // icon:
    // iconBg:
    // title:
    // point:
    // btnText:
    // btnBg:
    // isDisabled? 'change btn color' : 'change btn color';
    // isVideoEnabled? 'ভিডিও দেখুন' : 'সংগ্রহ করুন';
// }
