import './faq.scss';
import { FaChevronRight } from "react-icons/fa";

const Faq = ({ faqs }: any) => {

    return (
        <div className='flex justify-between items-center p-4 bg-white  border-b-2'>
            <div className='flex items-center'>
                <div className='mr-2'>
                   <img src={faqs.icon} className="w-4" />
                </div>
                <p className='font-tatsam-medium text-md'>{faqs.title}</p>
            </div>
            <div>
                <FaChevronRight className=' text-gray-400'/>
            </div>
        </div>
    )
}

export default Faq;
