import { useNavigate } from "react-router-dom";

const GoHomeButton: React.FC = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/");
  };

  return (
    <button
      onClick={goBackToHome}
      className="mt-4 ml-8 rounded-lg bg-blue-300 text-black font-bold p-2"
    >
      Go to main page
    </button>
  );
};

export default GoHomeButton;
