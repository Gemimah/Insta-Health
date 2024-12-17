import Button from './Button';

export default function Benefit() {
    const offers = [
        {
            title: "For Patients",
            offerCard: [
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: ""
                },
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: "relative -ml-[200px] mt-20"
                }
            ],
            offerInfo: [
                {
                    image: "/patient.png",
                    content: "We get unlocked stability and happiness of working and helping patients for them to be cured and get well with their work which enable them to have a good and longlasting living without problems of any sickness and hence make them connect with proffesional healthcares"
                }
            ]
        },
        {
            title: "For Physicians",
            offerCard: [
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: ""
                },
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: "relative -ml-[200px] mt-20"
                }
            ],
            offerInfo: [
                {
                    image: "/doctor.jpg",
                    content: "At our core, we strive to unlock the stability and happiness of both patients and healthcare professionals. By working together, we help patients achieve recovery and lasting well being, allowing them to live healthy, problem-free lives. For doctors and physicians, this mission enables a fulfilling career, where they can connect deeply with their patients, providing expert care that leads to meaningful outcomes. This strong bond between patients and professional healthcare providers promotes a future where everyone enjoys better health and long-lasting happiness."
                }
            ]
        },
        {
            title: "For Insurance",
            offerCard: [
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: ""
                },
                {
                    title: "Offers",
                    description: "Convenience of remote consultations",
                    description2: "Access to top healthcare professionals",
                    description3: "Reduced travel time and costs",
                    buttontext: "Learn More",
                    classname: "relative -ml-[200px] mt-20"
                }
            ],
            offerInfo: [
                {
                    image: "/insurance.png",
                    content: "As an insurance provider, we are dedicated to ensuring the stability and well-being of individuals by supporting their access to quality healthcare. By helping patients receive the necessary care, we enable them to recover, maintain good health, and enjoy a long, problem-free life. Our services not only protect their financial security but also foster a strong connection between patients and professional healthcare providers, ensuring comprehensive care and peace of mind for all involved."
                }
            ]
        }
    ];

    return (
        <div className="mx-auto container flex flex-col gap-10 py-10 px-20">
            <h1 className="text-2xl font-semibold text-center text-[#0086AD]">Benefits of Working With Us</h1>
            <div className="flex flex-col gap-28">
                {offers.map((item, index) => (
                    <div
                        className={`flex justify-between ${
                            index % 2 !== 0 ? "flex-row-reverse" : ""
                        }`}
                        key={index}
                    >
                        <div className="flex flex-col gap-10">
                            <h1 className="text-[#0086AD] text-xl font-semibold">{item.title}</h1>
                            <div className="flex">
                                {item.offerCard.map((card, index2) => (
                                    <div
                                        key={index2}
                                        className={`flex items-center text-center p-5 h-[320px] w-[350px] rounded-lg text-white flex-col gap-10 bg-[#0086AD] ${card.classname}`}
                                    >
                                        <h2 className="text-2xl font-semibold">{card.title}</h2>
                                        <div className="flex flex-col gap-5 text-left">
                                            <ol className="flex flex-col gap-3">
                                                <li>{card.description}</li>
                                                <li>{card.description2}</li>
                                                <li>{card.description3}</li>
                                            </ol>
                                        </div>
                                        <Button text={card.buttontext} className="text-[#0086AD] bg-white w-[150px]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col  text-center">
                            {item.offerInfo.map((info, index3) => (
                                <div key={index3} className=' flex flex-col  gap-8 text-center justify-center items-center'>
                                    <img src={info.image} alt="" className="w-[300px] h-[300px]" />
                                    <p className="w-[500px] text-gray-500 text-center">{info.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
