import { FaWhatsapp } from "react-icons/fa";
interface botProps{
    style?:string;
}

export default function WhatsappBot({style}: botProps){
    return(
        <div className="w-full ">
            <div className={`bg-[#17AE17] w-[200px]  text-white h-[50px] gap-3  fixed flex items-center rounded-full  p2 justify-center ${style}`}>
                <FaWhatsapp className="font-medium"/>
                <p className="font-medium ">Chat on Whatsapp</p>

            </div>

        </div>
    )
}