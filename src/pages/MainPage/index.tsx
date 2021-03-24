import MainSection from '../../components/MainSection';
import Contact from '../../components/Contact';
import PageContainer from '../../components/PageContainer';
import Portfolio from '../../components/Portfolio';
import Navbar from '../../components/Navbar';
import Abilities from '../../components/Abilities';
import PageContent from '../../components/PageContent';
import AboutMe from '../../components/AboutMe';

const MainPage = () => (
  <PageContainer>
    <PageContent>
      <Navbar/>
      <MainSection/>
      <AboutMe />
      <Abilities/>
      <Portfolio/>
      <Contact/>
    </PageContent>
  </PageContainer>
);

export default MainPage;
