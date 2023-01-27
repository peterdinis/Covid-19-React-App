import { DateTimePicker } from ".";

interface IHeaderProps {
  text: string;
}

const Header: React.FC<IHeaderProps> = ({ text }: IHeaderProps) => {
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h1 className="text-4xl font-black text-black">{text}</h1>
      <h3 className="text-gray-400 text-lg">lastest update <DateTimePicker /></h3>
    </div>
  );
};

export default Header;
