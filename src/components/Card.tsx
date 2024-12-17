interface CardProps {
    image?: string;
    title?: string;
    description?: string | JSX.Element;
    classname?: string;
    titlestyle?: string;
    pstyle?: string;
    imagestyle?:string
}

export default function Card({ image, title, description, classname, titlestyle, pstyle,imagestyle }: CardProps) {
    return (
        <div className={`${classname} flex flex-col items-center justify-center gap-5`}>
            {image && <img src={image} alt={title || "Card Image"} className={`w-16 h-16 ${imagestyle}`} />}
            <h2 className={`font-semibold text-2xl ${titlestyle}`}>{title}</h2>
            <p className={`text-gray-500 w-[300px] text-center ${pstyle}`}>{description}</p>
        </div>
    );
}
