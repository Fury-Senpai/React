import CustomButton from "./CustomButton";
import { Bitcoin , Plus , ListMinus  } from 'lucide-react';                                                             
const Card = (props) => {
    return (
        <div className="bg-(--color-primary) p-8 relative">
            {/* ONLY FOR DESIGN */}
            <div className="absolute top-1 left-1/2 transform translate-x-[-50%]">
                <ListMinus color="#525252" />
            </div>
            <div className="absolute bottom-1 left-1/2 transform translate-x-[-50%] scale-x-[-1]">
                <ListMinus color="#525252" />
            </div>
            <div className="absolute top-1/2 left-1 transform translate-y-[-50%]">
                <ListMinus color="#525252" />
            </div>
            <div className="absolute top-1/2 right-1 transform translate-y-[-50%] scale-x-[-1]">
                <ListMinus color="#525252" />
            </div>
            {/* second */}
            <div className="absolute top-2 left-2">
                <Plus color="black"/> 
            </div>
            <div className="absolute bottom-2 left-2">
                <Plus color="black"/> 
            </div>
            <div className="absolute top-2 right-2">
                <Plus color="black"/> 
            </div>
            <div className="absolute bottom-2 right-2">
                <Plus color="black"/> 
            </div>
            {/* MAIN */}
            <div className="w-full">
                <img className="h-full w-full object-cover" src={props.imgSrc} alt="" />
            </div>

            <div className="bg-amber-50 text-black font-bold text-sm tracking-tighter flex justify-between items-center px-4 py-2 mt-3">
                <p>
                    {props.name}
                </p>
                <div className="flex items-center gap-2">
                   <CustomButton className="bg-(--color-primary) rounded-2xl p-2" txt={<Bitcoin className="h-4 w-4"/>}/>
                   <CustomButton className="bg-(--color-primary) rounded-xl p-2 font-medium py-2 px-4" txt="Buy"/> 
                </div>
            </div>
        </div>
    )
}

export default Card;