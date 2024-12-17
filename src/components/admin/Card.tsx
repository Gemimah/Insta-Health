interface cardsProps{
    image:string,
    title:string,
    numbers:string
}
export default function AdminCards({image,title,numbers}:cardsProps){
    return(
        <div className="flex  gap-5 py-5 px-8 items-center shadow-md shadow-gray-100 rounded-md">
            <img src={image} alt={title} className="w-[150px] h-[100px]  object-cover rounded-md" />
            <div className="flex flex-col gap-4">
            <h2 className="text-gray-500 text-sm ">{title}</h2>
            <p className="text-gray-600 text-md font-semibold">{numbers}</p>

            </div>

        </div>
    )
}