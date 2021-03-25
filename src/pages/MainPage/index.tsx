import MainSection from '../../components/MainSection';
import PageContainer from '../../components/PageContainer';
import Portfolio from '../../components/Portfolio';
import Navbar from '../../components/Navbar';
import Abilities from '../../components/Abilities';
import PageContent from '../../components/PageContent';
import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';

const MainPage = () => (
  <PageContainer>
    <PageContent>
      <Navbar/>
      <MainSection/>
      <AboutMe />
      <Abilities/>
      <Portfolio/>
      <Footer />
    </PageContent>
  </PageContainer>
);

export default MainPage;
