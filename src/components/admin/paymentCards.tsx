export default function PaymentCards(){
    const cards=[
        {
            title:"Total Expenses",
            amount:"$500",
            
        },
        {
            title:"Appointments Payments",
            amount:"$5000",
            
        },
        {
            title:"Medical Payments",
            amount:"$500",
            
        }
    ]
    return(
        <div className="flex gap-5">
            {
                cards.map((item,index)=>(
                    <div key={index} className={`flex flex-col gap-3 rounded-md items-center justify-center w-[280px] h-[100px]  ${index %2 !== 0 ? "bg-white text-gray-600 border-[1.5px] border-gray-100" :" bg-blue-600 text-white " }`}>
                        <h1 className="font-medium text-md">{item.title}</h1>
                        <h2 className=" font-semibold text-xl">{item.amount}</h2>
                    </div>
                ))
            }

        </div>
    )
}