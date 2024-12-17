import Navbar from "../components/navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/Footer";

export default function Packages() {
    const cardContent = [
        {
            title: "Family Package",
            price: "$50/month",
            features: [
                "Home caring and health support to all family members",
                "Reduced insurance money for payment",
                "Free audio and video call",
                "Addition of more than five people in family",
                "Day-to-day family caring and easy appointments",
            ],
            buttonContent:"Choose Package"
        },
        {
            title: "Individual Package",
            price: "$20/month",
            features: [
                "Home caring and health support to an individual",
                "Reduced insurance money for payment",
                "Free audio and video call",
                "Easy appointments with doctors",
                "Comprehensive health tracking tools",
            ],
            buttonContent:"Choose Package"
        },
    ];

    return (
        <div className="mx-auto container">
            <Navbar />
            <div className="p-20 flex flex-col items-center gap-10">
                <h1 className="font-bold text-2xl text-center text-[#0086AD]">
                    Know different packages that most of our customers get in order to have a better life
                </h1>
                <p className="w-[900px] text-center text-gray-500">
                    You are getting to know different packages that our customers likely want to get and know how the packages work and the main price that the
                    packages cost for the better health of our customers
                </p>
                <h1 className="font-bold text-2xl text-[#0086AD]">Our Packages</h1>
                <div className="flex flex-wrap gap-10 justify-center">
                    {cardContent.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={
                                <div className="flex flex-col gap-10 items-center justify-center text-center">
                                    <p className="text-xl font-semibold text-gray-500">{card.price}</p>
                                    <ul className="text-left">
                                        {card.features.map((feature, idx) => (
                                            <li key={idx} className="text-gray-500 w-[400px]">
                                                {feature}
                                            </li>

                                        ))}

                                    </ul>
                                    <Button
                                        text={card.buttonContent}
                                        className="w-[180px] h-[50px] bg-[#0086AD] text-white"
                                    />
                                </div>
                            }
                            classname={`p-6 border-[1.5px] h-[400px] gap-10 border-gray-300 rounded-lg w-[500px] ${
                                index % 2 === 0 ? "bg-white text-black" : ""
                            }`}
                            titlestyle={`${
                                index % 2 === 0 ? "text-[#0086AD]" : "text-[#0086AD]"
                            }`}
                            pstyle={`${index % 2 === 0 ? "text-gray-500" : ""}`}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
