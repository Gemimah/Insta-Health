import Navbar from "../components/navbar"
import Card from "../components/Card"
import Button from "../components/Button"
import Footer from "../components/Footer"


export default function Service(){
    const services = [
        {
            image: "per.png",
            name: "Consultation",
            role: "We offer a consultation about different diseases like general medecine kids diseases and other disease which may affect any person through a meeting with a doctor on easy and low prices",
            buttonContent:"Learn more"

           
        },{
            image: "per.png",
            name: "Health Monitoring",
            role: "We offer a consultation about different diseases like general medecine kids diseases and other disease which may affect any person through a meeting with a doctor on easy and low prices",
            buttonContent:"Learn more"

           
        },
        {
            image: "per.png",
            name: "Second Options",
            role: "We offer a consultation about different diseases like general medecine kids diseases and other disease which may affect any person through a meeting with a doctor on easy and low prices",
            buttonContent:"Learn more"

           
        },
       
    ]

    return(
        <div className="mx-auto container">
            <Navbar/>
            <div className="p-20 flex flex-col items-center gap-10 ">
            <h1 className="font-bold text-2xl text-center text-[#0086AD] w-[700px]">Get to know different Services that we offer as Tiba health 
            in our daily activities and also get access our work .</h1>
            <p className="w-[500px] text-center text-gray-500">Get access to different medical acess and talk to your doctors of your dream
            through using our website tiba health</p>
            <h1 className="font-bold text-2xl text-center text-[#0086AD] ">Our Services</h1> 
            <div className="flex gap-10">
                {
                    services.map((item,index)=>(
                        <div className="" key={index}>
                              <Card
                            image={item.image}
                            imagestyle="rounded-full bg-[#0086AD] p-3 w-18 h-18 "
                            title={item.name}
                            description={
                                <div className="flex flex-col gap-4 items-center justify-center">
                                    <p className="text-gray-500 w-[300px]">{item.role}</p>
                                    <Button
                                        text={item.buttonContent}
                                        className="w-[150px] h-[50px] bg-[#0086AD] text-white"
                                    />
                                </div>
                            }
                            classname={`p-6  border-[1.5px] h-[350px] border-gray-300 rounded-lg  w-[400px]items-start justify-start ${index % 2 === 0 ? "" : "mt-10"
                                }`}
                            titlestyle={`${index % 2 === 0 ? "text-[#0086AD]" : "text-[#0086AD] "
                                }`}
                            pstyle={`${index % 2 === 0 ? "text-gray-500" : " text-white "
                                }`}


                        />

                        </div>
                    ))
                }

            </div>



            </div>
            <Footer/>

        </div>
    )
}