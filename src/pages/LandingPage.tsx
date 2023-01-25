import { Wrapper } from "../components/hero";
import { Header, Layout } from "../components/shared";

const LandingPage: React.FC = () => {
    return (
        <Layout>
         <Header text="Covid-19 Tracker" />
         <Wrapper />
        </Layout>
    )
}


export default LandingPage;