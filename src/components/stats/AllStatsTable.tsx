import { Header, Layout } from "../shared";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/statsQueries";
import StatsHeader from "./StatsHeader";

const AllStatsTable: React.FC = () => {
  const { data, isError } = useQuery(["countries"], api.getAllCountriesStats);

  console.log(data);

  return (
    <Layout>
      <Header text="All Stats about covid" />
      <div className="w-full sm:px-6">
        <StatsHeader />
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Active cases</th>
                <th className="font-normal text-left pl-12">County</th>
                <th className="font-normal text-left pl-12">Deaths</th>
                <th className="font-normal text-left pl-20">Population</th>
                <th className="font-normal text-left pl-20">Recovered</th>
                <th className="font-normal text-left pl-16">Tests</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {data &&
                data.map((item: any) => {
                  return (
                    <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-medium">{item.active}</p>
                          </div>
                        </div>
                      </td>
                      <td className="pl-12">
                        <p className="text-sm font-medium leading-none text-gray-800">
                          {item.country}
                        </p>
                      </td>
                      <td className="pl-12">
                        <p className="font-medium">32/47</p>
                        <p className="text-xs leading-3 text-gray-600 mt-2">
                          {item.deaths}
                        </p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">{item.population}</p>
                      </td>
                      <td className="pl-20">
                        <p className="font-medium">{item.recovered}</p>
                      </td>
                      <td className="pl-16">
                        <p className="font-medium">{item.tests}</p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AllStatsTable;
