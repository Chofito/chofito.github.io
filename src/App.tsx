import AboutMe from './AboutMe';
import Career from './Career';
import DarkModeToggle from './DarkModeToggle';
import ProfileImage from './ProfileImage';
import Resources from './Resources';

function App() {
  return (
    <div
      className="flex flex-col items-center md:justify-center min-h-screen bg-gray-100 p-2"
    >
      <DarkModeToggle />
      <ProfileImage />
      <AboutMe />
      <Career />
      <Resources />
    </div>
  );
}

export default App
