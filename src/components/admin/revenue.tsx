import RevenueChart from "./revenuechart"

export default function RevenueInfo(){
    const revenue=[
        {
            title:"Revenue Report",
            amount:"$40 000",

        }
    ]
    return(
        <div className="flex flex-col shadow-md shadow-gray-100 rounded-md">
            {
                revenue.map((item,index)=>(
                    <div key={index} className="flex flex-col gap-5 shadow-md shadow-gray-100 rounded-md py-2 px-10">
                        <h1 className="text-gray-600 font-semibold text-xl">{item.title}</h1>
                        <h2 className="text-blue-600 font-bold text-2xl">{item.amount}</h2>
                        <RevenueChart/>


                    </div>
                ))
            }


        </div>
    )
}