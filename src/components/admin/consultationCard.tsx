export default function AdminConsultationCards() {
    const cards = [
        {
            numbers: "+500",
            title: "Total Consultation",
            classname: "bg-blue-600 text-white "
        },
        {
            numbers: "+500",
            title: "Successfully Consultation",
            classname: "bg-green-700 text-white "
        },
        {
            numbers: "+500",
            title: "Failed Consultation",
            classname: "bg-red-600 text-white "
        }
    ]
    return (
        <div className="flex gap-10">
            {
                cards.map((card, index) => (
                    <div key={index} className={`w-[385px] h-[150px] rounded-md overflow-hidden ${card.classname}`}>
                        <div className="flex justify-center items-center h-full flex-col gap-5">

                            <p className="text-2xl font-bold">{card.numbers}</p>
                            <h3 className="text-white text-lg font-bold">{card.title}</h3>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}