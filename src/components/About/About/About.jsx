import ClientLogoSection from "../../ClientLogoSection/ClientLogoSection";
import AboutEstore from "../AboutEstor/AboutEstore";
// import ClientsLogoSection from "../ClientsLogoSection/ClientsLogoSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import TeamMember from "../TeamMember/TeamMember";

const About = () => {
    return (
        <div>
            <AboutEstore></AboutEstore>
            <FeaturesSection></FeaturesSection>
            <TeamMember></TeamMember>
            <ClientLogoSection></ClientLogoSection>
        </div>
    );
};

export default About;