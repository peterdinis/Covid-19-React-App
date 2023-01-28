import { Header, Layout } from "../shared";
import {
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

const InfoWrapper: React.FC = () => {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }: any) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    setUserInput("");
  };
  return (
    <Layout>
      <Header text="Covid Statistics" />
      <div>
        <h2 className="text-center mt-4 font-bold text-3xl">
          Find Covid info in specific country
        </h2>
        <div className="max-w-md mx-auto">
          <div className="mt-6 relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                onChange={handleSearch}
                id="search"
                placeholder="Find Country.."
              />
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 bg-transparent  rounded-lg py-3">
        <p className="font-bold mt-4 text-xl">Country Name : {country} </p>

        <p className="font-bold mt-4 text-xl">Cases : {cases}</p>

        <p className="font-bold mt-4 text-xl">Deaths : {deaths}</p>

        <p className="font-bold mt-4 text-xl">Recovered : {recovered}</p>

        <p className="font-bold mt-4 text-xl">Cases Today : {todayCases}</p>

        <p className="font-bold mt-4 text-xl">Deaths Today : {deathCases}</p>

        <p className="font-bold mt-4 text-xl">
          Recovered Today : {recoveredCases}
        </p>
      </div>
    </Layout>
  );
};

export default InfoWrapper;
