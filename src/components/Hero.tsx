import Button from "./Button"
import WhatsappBot from "./tsapBot"
export default function Hero() {
    const actionButton=[
        {
            name:"Book an appointment",path:"",style: "bg-[#0086AD] text-white p-2"
            
        },
        {
            name:"Download our mobile app",path:"",style: " text-[#0086AD] p-2 "
        }
    ]
    return (

        <div className="mx-auto container px-20 ">
            <div className=" flex items-center md:justify-between justify-center md:flex-row flex-col ">
                <div className="flex flex-col gap-8">
                    <h1 className="font-bold text-4xl text-[#0086AD]">Insta Health</h1>
                    <h1 className="font-bold text-4xl text-gray-500 text-center md:text-start w-[500px]">Revolutionizing Healthcare
                        with Telemedicine</h1>
                    <img src="/line.png" alt="" className="md:w-[500px] w-[300px] " />
                    <p className="w-[500px] text-gray-500">Get to know different services that we offer to make your health look
                        good and ok through starting with us either you are a doctor or a patient
                        just start working with us and get to know more about us.</p>
                       <div className="flex  gap-5">
                       {
                            actionButton.map((btn, index)=>(
                                <Button key={index} text={btn.name} className={`${btn.style} w-full`}  />
                            ))
                        }

                       </div>

                </div>
                <div className="flex flex-col items-end">
                <img src="/landing.png" alt="" className="w-[800px]" />
                <WhatsappBot style="ml-[600px] -mt-[150px]"/>
                </div>

            </div>

        </div>



    )
}