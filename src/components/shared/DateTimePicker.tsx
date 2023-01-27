import { useDate } from "../../hooks/useDate";

const DateTimePicker: React.FC = () => {
  const { date } = useDate();
  return <span>{date}</span>;
};

export default DateTimePicker;
