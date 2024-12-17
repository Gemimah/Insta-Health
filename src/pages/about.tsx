import Navbar from "../components/navbar";
import Button from "../components/Button";
import WhatsappBot from "../components/tsapBot";
import Card from "../components/Card";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import Footer from "../components/Footer";


export default function About() {
    const textContent = [
        "Insta health was an idea of a person who is eagerly want to make the african lives good and healthy through connecting many africans who get easily attacked by diseases hence helping them to get easy and fast access to medecines.",
        "Insta health now is a broadband company which is now offering various health and medical programs online for africans which will help them live in advanced health and disease protection through using an automated telemedecine app which is now easy to use for different people and also offering diverse information about health for african families at low and easy price and now we are patterning with many companies which offer health services."
    ];

    const cardContent = [
        {
            title: "Mission",
            titlestyle: "text-[#0086AD]",
            content: [
                "Elevating African health through easy connecting of doctors to patients and enabling easy access to health activities for all African countries.",
                "Empowering communities with education and resources to improve overall health and well-being.",
                "Collaborating with partners to build a sustainable healthcare ecosystem across Africa."
            ]
        },
        {
            title: "Values",

            content: [
                "Elevating African health through easy connecting of doctors to patients and enabling easy access to health activities for all African countries.",
                "Empowering communities with education and resources to improve overall health and well-being.",
                "Collaborating with partners to build a sustainable healthcare ecosystem across Africa."
            ]
        },
        {
            title: "Vision",

            content: [
                "Elevating African health through easy connecting of doctors to patients and enabling easy access to health activities for all African countries.",
                "Empowering communities with education and resources to improve overall health and well-being.",
                "Collaborating with partners to build a sustainable healthcare ecosystem across Africa."
            ],

        }
    ];
    const team = [
        {
            image: "person1.png",
            name: "John Doe",
            role: "Founder & CEO",
            link: [
                {
                    href: "https://www.facebook.com",
                    icon: <FaFacebook />,
                },
                {
                    href: "https://www.twitter.com",
                    icon: <FaTwitter />,
                },
                {
                    href: "https://www.instagram.com",
                    icon: <FaLinkedin />,
                },
            ]
        },
        {
            image: "person1.png",
            name: "Steven Hardern",
            role: "Doctor manager",
            link: [
                {
                    href: "https://www.facebook.com",
                    icon: <FaFacebook />,
                },
                {
                    href: "https://www.twitter.com",
                    icon: <FaTwitter />,
                },
                {
                    href: "https://www.instagram.com",
                    icon: <FaLinkedin />,
                },
            ]
        },
        {
            image: "person1.png",
            name: "Mark Barren",
            role: "Founder & CEO",
            link: [
                {
                    href: "https://www.facebook.com",
                    icon: <FaFacebook />,
                },
                {
                    href: "https://www.twitter.com",
                    icon: <FaTwitter />,
                },
                {
                    href: "https://www.instagram.com",
                    icon: <FaLinkedin />,
                },
            ]
        }
    ]

    return (
        <div className="mx-auto container">
            <Navbar />
            <div className="bg-[#0086AD] text-white h-[650px]">
                <div className="p-20 justify-between w-full flex">
                    <div className="flex flex-col gap-10">
                        <h1 className="text-3xl font-semibold w-[600px]">How Insta Health Started Making Medical Work?</h1>
                        {textContent.map((text, index) => (
                            <p key={index} className="text-white text-start w-[600px]">{text}</p>
                        ))}
                        <Button
                            text="Download our mobile app"
                            className="bg-white text-[#0086AD] w-[300px] h-[60px] font-medium"
                        />
                    </div>
                    <div className="flex flex-col items-end">
                        <img src="/people.png" alt="About Image" className="w-[550px]" />
                        <WhatsappBot style="ml-[350px] mt-6" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-10">
                <h1 className="font-bold text-2xl text-[#0086AD] mb-8">What Really We Are</h1>
                <div className="flex gap-6 flex-wrap justify-center">
                    {cardContent.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            description={
                                <ul className="flex flex-col gap-2 text-left">
                                    {card.content.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            }
                            classname={`p-6  border-[1.5px] h-[350px] border-gray-300 rounded-lg  w-[400px] ${index % 2 === 0 ? "bg-white text-black" : "bg-[#0086AD] text-white"
                                }`}
                            titlestyle={`${index % 2 === 0 ? "text-[#0086AD]" : " text-white "
                                }`}
                            pstyle={`${index % 2 === 0 ? "text-gray-500" : " text-white "
                                }`}


                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center py-10 gap-10">
                <h1 className="font-bold text-2xl text-[#0086AD] ">Meet our excellent team</h1>
                <p className="text-center w-[400px] text-gray-500">Meet our enthuasist team which works more flexible
                    and very hard to make the work easy</p>
                <div className="flex items-center justify-center gap-28">
                    {
                        team.map((person, index) => (
                            <div key={index}>
                                <Card image={person.image} classname={`p-2  border-[1.5px] h-[250px] border-gray-300 rounded-lg  w-[250px] ${index %2=== 0 ? " ":"shadow-md shadow-slate-100"}`} title={person.name}
                                    description={
                                        <div className="flex flex-col gap-2">
                                            <p className="text-gray-500">{person.role}</p>

                                        <ul className="flex items-center justify-center text-[20px] gap-4 text-center">
                                            {person.link.map((point, idx) => (
                                                <li key={idx}>{point.icon}</li>
                                            ))}
                                        </ul>

                                        </div>
                                        
                                    } titlestyle="text-[#0086AD]" imagestyle="w-28 h-24" />


                            </div>
                        ))
                    }

                </div>



            </div>
            <Footer/>
        </div>
    );
}
