import { Header, Layout } from "../shared";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@tanstack/react-query";
import * as api from "../../api/queries/vaccinateQueries";

const VaccinateTable: React.FC = () => {
  const { data, isError, isLoading } = useQuery(
    ["vaccinates"],
    api.getAllVaccines
  );

  console.log(data);

  return (
    <Layout>
      <Header text="Vaccines available for treatment" />
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col bg-white rounded-lg">
            <a href="#">
              <h1 className="text-center pt-2 pb-2 text-xl font-bold">
                Variant a
              </h1>
              <div className="mt-6">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Basic info</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VaccinateTable;
