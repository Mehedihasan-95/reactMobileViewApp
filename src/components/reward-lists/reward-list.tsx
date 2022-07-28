import './reward-list.scss';

const RewardList = ({ rewards }: any) => {
    let iconBgClass = '';
    if (rewards.isBtnDisabled == true && rewards.isVideoEnabled == false) {
        iconBgClass = 'bg-1'
    } else if (rewards.isBtnDisabled == false && rewards.isVideoEnabled == true) {
        iconBgClass = 'bg-2'
    } else {
        iconBgClass = 'bg-3'
    }

    const onBtnClick = (param:any)=> {
        if (param) {
            alert(1)
        } else {
            alert('সংগ্রহিত হয়েছে!')
        }
    }
    return (
        <div className='bg-white rounded-xl w-full p-4 point-list-box flex justify-between items-center mb-4'>
            <div className='flex justify-between items-center'>
                <div className={`${iconBgClass} rounded-md text-white w-10 h-10 p-3 flex justify-center items-center`}>
                    <img src={rewards.icon} className='img-fluid' />
                </div>

                <div className='pl-3'>
                    <p className='font-tatsam-regular'>{rewards.title} </p>
                    <p className='font-tatsam-regular text-sm text-gray-400'>{rewards.point}</p>
                </div>
            </div>

            <button onClick={()=>{ onBtnClick(rewards.isBtnDisabled)}}
            className={`font-tatsam-regular rounded-3xl px-4 py-2 ${rewards.isBtnDisabled ? 'text-gray-600 bg-gray-300' : ' text-white bg-secondary'}`}>{rewards.isVideoEnabled ? 'ভিডিও দেখুন' : 'সংগ্রহ করুন'}</button>
        </div>
)}

export default RewardList;
