import UiHero from '../components/Hero'
import UiFrame from '../components/Service'
import UiAboutMe from '../components/AboutMe'
import UiPortfolio from '../components/Portfolio'
import UiContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      {/* UI HERO SECTION */}
      <div
        id="/"
        className="p-4"
      >
        <UiHero />
      </div>
      {/*Services Section */}
      <div
        id="/Services"
        className="p-4"
      >
        <UiFrame />
      </div>
      {/* About Me Section */}
      <div
        id="/About me"
        className="p-4"
      >
        <UiAboutMe />
      </div>
      {/* Portfolio Section */}
      <div
        id="/Portfolio"
        className="p-4"
      >
        <UiPortfolio />
      </div>
      {/* Contact Me Section */}
      <div
        id="/Contact me"
        className="p-4"
      >
        <UiContactMe />
      </div>
      {/* UI END SECTION */}
      <div className="w-full bg-[#FFFFFF]/4 p-4">
        <Footer />
      </div>
    </>
  );
}
