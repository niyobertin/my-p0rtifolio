import NavigationBar from "./header";
import HeroSection from "./heroSection";
import ServiceSection from "./services";
import PortfolioSection from "./portfolio";
import BlogsSection from "./blogeSection";
import SkillSection from "./skills";
import Footer from "./footer";
const LandingPage:React.FC = () => (
    <div className="">
        <NavigationBar/>
        <HeroSection/>
        <ServiceSection/>
        <PortfolioSection/>
        <SkillSection/>
        <BlogsSection/>
        <Footer/>
    </div>
);

export default LandingPage;