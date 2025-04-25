import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Family from './components/Family';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';

function App() {

  return (
    <div className="min-h-screen">
      <Header />
      <Hero profileData={profileData} />
      <About profileData={profileData} />
      <Family profileData={profileData} />
      <Education profileData={profileData} />
      <Gallery profileData={profileData} />
      <Contact profileData={profileData} />
      <Footer />
    </div>
  );
}

export default App;