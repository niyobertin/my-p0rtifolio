import NavigationBar from "./header";
import HeroSection from "./heroSection";
import ServiceSection from "./services";
import PortfolioSection from "./portfolio";
import BlogsSection from "./blogeSection";
const LandingPage:React.FC = () => (
    <div className="">
        <NavigationBar/>
        <HeroSection/>
        <ServiceSection/>
        <PortfolioSection/>
        <BlogsSection/>
    </div>
);

export default LandingPage;