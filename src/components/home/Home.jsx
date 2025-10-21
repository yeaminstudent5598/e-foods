import FAQPage from "@/pages/FAQPage";
import Banner from "../banner/Banner";
import Bestsellers from "./bestsellers/Bestsellers";
import CategoryShop from "./categoryShop/CategoryShop";
import Deals from "./dealsOfTheDay/Deals";
import WhyChooseUs from "./features/WhyChooseUs";
import OurProcess from "./process/OurProcess";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <CategoryShop/>
            <WhyChooseUs />
            <Bestsellers />
            <Deals/>
            <OurProcess/>
            <FAQPage/>
            <Testimonials/>
        </div>
    );
};

export default Home;