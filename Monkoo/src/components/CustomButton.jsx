import { FaArrowRightLong } from "react-icons/fa6";

function CustomButton(props) {
  return (
    <button className='bg-(--primary-orange) text-(--primary-black) h-max tracking-tight font-medium px-8 py-4 rounded-tr-2xl rounded-br-2xl flex items-center gap-20 mt-4 active:scale-95 cursor-pointer'>
        <span>{props.text}</span> 
        <span><FaArrowRightLong /></span>
    </button>
  )
}

export default CustomButton