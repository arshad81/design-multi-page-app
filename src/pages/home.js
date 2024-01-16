// CSS
import "../app.css";

// HEADER
import Navbar from "../components/header.js";

// CATEGORY CARD
import CategoryCard from "../components/categoryCard.js";
// -- Category Card images
import mobileWebDesign from "../assets/home/mobile/image-web-design.jpg";
import mobileAppDesign from "../assets/home/mobile/image-app-design.jpg";
import mobileGraphicDesign from "../assets/home/mobile/image-graphic-design.jpg";

// PROS CARD
import ProsCard from "../components/prosCard.js";
// -- Pros Card images
import Passionate from "../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../assets/home/desktop/illustration-friendly.svg";

import Footer from "../components/footer.js";
import IndexHero from "../components/indexHero.js";

function Home() {
  return (
    <div className="App bg-white ">
      <header className="App-header sm:px-10 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <div className="sm:px-10 max-w-7xl mx-auto">
        <IndexHero />
        <div className="px-6 md:px-0">
          <div className="my-32 lg:flex lg:items-stretch lg:justify-between lg:gap-6">
            <div className="my-6 lg:w-1/2">
              <CategoryCard title="Web Design" image={mobileWebDesign} />
            </div>
            <div className="lg:w-1/2">
              <div className="my-6">
                <CategoryCard title="App Design" image={mobileAppDesign} />
              </div>
              <div className="my-6">
                <CategoryCard
                  title="Graphic Design"
                  image={mobileGraphicDesign}
                />
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:gap-8">
            <ProsCard
              image={Passionate}
              title="PASSIONATE"
              description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            />
            <ProsCard
              image={Resourceful}
              title="Resourceful"
              description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
            />
            <ProsCard
              image={Friendly}
              title="Friendly"
              description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
