import './App.css';
import Header from './components/Header/Header';
import ContentCard from './components/ContentCard/ContentCard';
import FeaturedItem from './components/FeaturedItem/FeaturedItem';
import Navigation from './components/Navigation/Navigation';
import Product from './components/Product/Product';
import ClientLogoSection from './components/ClientLogoSection/ClientLogoSection';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <ContentCard></ContentCard>
      <Product></Product>
      <FeaturedItem></FeaturedItem>
      <ClientLogoSection></ClientLogoSection>
      <Footer></Footer>
    </>
  );
}

export default App
