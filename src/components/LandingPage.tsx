import NavigationBar from "./header";
import HeroSection from "./heroSection";
import ServiceSection from "./services";
import PortfolioSection from "./portfolio";
import SkillSection from "./skills";
import Footer from "./footer";
import About from "./about";
import Contacts from "../pages/contact";
const LandingPage: React.FC = () => (
  <div className="">
    <NavigationBar />
    <HeroSection />
    <About />
    <ServiceSection />
    <PortfolioSection />
    <SkillSection />
    <Contacts />
    <Footer />
  </div>
);

export default LandingPage;
