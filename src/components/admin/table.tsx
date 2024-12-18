interface TableProps {
    
    image?: string; // Image URL
    name?: string; // Name of the item
    category?: string; // Category of the item
    rating?: string; // Optional rating
  }
  
  export default function Tables({
    image,
    name,
    category,
    rating,
  }: TableProps) {
    const values = [<img src={image} alt="" className="w-8 h-8 rounded-full mx-auto" />, name, category, rating || "-"];
  
    return (
      <div className="flex flex-col gap-6 p-4 rounded-md z-50">
        <div className="grid grid-cols-4 gap-4 text-center">
          
          {/* Corresponding Values */}
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
  