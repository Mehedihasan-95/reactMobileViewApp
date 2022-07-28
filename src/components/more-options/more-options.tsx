import './more-options.scss';
import { BsArrowRightCircleFill } from "react-icons/bs";

const MoreOptions = ({ options }: any) => {

    return (
        <div className='flex items-center bg-white p-4 border-b-2'>
            <div className='mr-2'>
                <BsArrowRightCircleFill className='color-third' />
            </div>
            <p className='font-tatsam-regular text-sm'>{options.title}</p>
        </div>
    )
}

export default MoreOptions;
