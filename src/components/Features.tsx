import Card from "./Card"
export default function Features(){
    const cards=[
        {
            image:"/messaging.png",
            title:"Video Call",
            description:"Join our live video call sessions with our expert doctors.",
            className:"border-[1.5px] border-gray-300 rounded-xl   bg-white h-[320px]",
            p:"text-gray-500",
            titlestyle:"text-[#0086AD]"
        },
        {
            image:"/book.png",
            title:"Appointment Booking",
            description:"Join our live video call sessions with our expert doctors.",
            className:"bg-[#0086AD] text-white rounded-xl   text-white h-[380px]",
            p:"text-white",
            titlestyle:"text-white"
        },
        {
            image:"/audio.png",
            title:"Audio Call",
            description:"Join our live video call sessions with our expert doctors.",
            className:"border-[1.5px] border-gray-300 rounded-xl   bg-white h-[320px]",
            p:"text-gray-500",
            titlestyle:"text-[#0086AD]"
        },
        {
            image:"/messaging.png",
            title:"Messaging",
            description:"Join our live video call sessions with our expert doctors.",
            className:"border-[1.5px] border-gray-300 rounded-xl   bg-white h-[320px]",
            p:"text-gray-500",
            titlestyle:"text-[#0086AD]"
        }

    ]
    return(
        <div className="mx-auto container px-20 pb-10">
            <div className="flex flex-col gap-5 items-start">
                <h1 className="text-2xl text-[#0086AD] font-semibold">Our Features</h1>
                <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center align-center place-items-center lg:grid-cols-4 gap-10 ">
                    {
                        cards.map((card,index)=>(
                            <Card key={index} image={card.image} title={card.title} description={card.description} classname={card.className} titlestyle={card.titlestyle} pstyle={card.p} />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}