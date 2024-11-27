import ClientLogoSection from "../ClientLogoSection/ClientLogoSection";
import ContentCard from "../ContentCard/ContentCard";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import Header from "../Header/Header";
import Product from "../Product/Product";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ContentCard></ContentCard>
            <Product></Product>
            <FeaturedItem></FeaturedItem>
            <ClientLogoSection></ClientLogoSection>
        </div>
    );
};

export default Home;