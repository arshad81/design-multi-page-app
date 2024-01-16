import Navbar from "../components/header";

import DescriptionCard from "../components/descriptionCard.js";

import ProjectCard from "../components/projectCard.js";
import imageExpress from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";

import CategoryCard from "../components/categoryCard.js";
// -- Category Card images
import mobileAppDesign from "../assets/home/mobile/image-app-design.jpg";
import mobileGraphicDesign from "../assets/home/mobile/image-graphic-design.jpg";
import Footer from "../components/footer";

export default function WebDesign() {
  return (
    <div className="App bg-white ">
      <div className="max-w-7xl mx-auto">
        <header className="App-header sm:px-10">
          <Navbar />
        </header>
        <div className="sm:px-10">
          <DescriptionCard
            title="Web Design"
            description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
          />
          <div className="px-6 sm:px-0">
            <div className="py-14 lg:grid lg:grid-cols-3 gap-8">
              <div className="my-10">
                <ProjectCard
                  image={imageExpress}
                  title="Express"
                  description="A multi-carrier shipping website for ecommerce businesses"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={transfer}
                  title="Transfer"
                  description="Site for low-cost money transfers and sending money within seconds"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={photon}
                  title="Photon"
                  description="A state-of-the-art music player with high-resolution audio and DSP effects"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={builder}
                  title="Builder"
                  description="Connects users with local contractors based on their location"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={blogr}
                  title="Blogr"
                  description="Blogr is a platform for creating an online blog or publication"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={camp}
                  title="Camp"
                  description="Get expert training in coding, data, design, and digital marketing"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-8">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
