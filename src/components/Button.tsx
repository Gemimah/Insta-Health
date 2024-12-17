
interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 border-[1.5px] border-[#0086AD]  rounded  hover:bg-[#0086AD] hover:border-[#0086AD] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
