import './reward-list.scss';
import Modal from "react-modal";
import { useState } from "react";

const RewardList = ({ rewards }: any) => {
    let iconBgClass = '';
    if (rewards.isBtnDisabled === true && rewards.isVideoEnabled === false) {
        iconBgClass = 'bg-1'
    } else if (rewards.isBtnDisabled === false && rewards.isVideoEnabled === true) {
        iconBgClass = 'bg-2'
    } else {
        iconBgClass = 'bg-3'
    }

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const onBtnClick = (param: any) => {
        if (param) {
            toggleModal();
        } else {
            alert('সংগ্রহিত হয়েছে!')
        }
    }
    return (
        <div className='bg-white rounded-xl w-full p-4 point-list-box flex justify-between items-center mb-4 relative'>
            <div className='flex justify-between items-center'>
                <div className={`${iconBgClass} rounded-md text-white w-10 h-10 p-3 flex justify-center items-center`}>
                    <img src={rewards.icon} className='img-fluid' />
                </div>

                <div className='pl-3'>
                    <p className='font-tatsam-regular'>{rewards.title} </p>
                    <p className='font-tatsam-regular text-sm text-gray-400'>{rewards.point}</p>
                </div>
            </div>

            <button onClick={() => { onBtnClick(rewards.isBtnDisabled) }}
                className={`font-tatsam-regular text-sm rounded-3xl px-4 py-2 ${rewards.isBtnDisabled ? 'text-gray-600 bg-gray-300' : ' text-white bg-secondary'}`}>{rewards.isVideoEnabled ? 'ভিডিও দেখুন' : 'সংগ্রহ করুন'}
            </button>
            <Modal
                style={{
                    overlay: {
                        position: 'absolute',
                        margin: 'auto',
                        width: '24rem',
                        height: '50rem',
                        right: 0,
                        left: 0,
                        bottom: 0,
                        backgroundColor: '#000000bf'
                    },
                    content: {
                        position: 'absolute',
                        inset: 'auto',
                        margin: '87% 0 0 0',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '3rem 3rem 0 0',
                        outline: 'none',
                        padding: '20px',
                        width: '100%'
                    }
                }}

                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog">
                <div className='w-full text-center'>
                    <p className='font-tatsam-medium text-3xl py-5'>পর্যাপ্ত পয়েন্ট নেই</p>
                    <div className=' flex justify-center'>
                        <img src={require('../../assets/img/star-point.png')} alt='' />
                    </div>
                    <p className='font-tatsam-regular text-lg py-6'>রিয়ার্ড সংগ্রহ করার জন্য আপনার পয়েন্ট নেই। নিয়মিত কুইজাস গেম খেলে পয়েন্ট অর্জন করুন</p>

                </div>
                {/* <button onClick={toggleModal}>Close modal</button> */}
            </Modal>
        </div>
    )
}

export default RewardList;
