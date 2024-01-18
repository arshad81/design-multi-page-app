import Navbar from "../components/header";

import DescriptionCard from "../components/descriptionCard.js";

import ProjectCard from "../components/projectCard.js";
import change from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";

import CategoryCard from "../components/categoryCard.js";
// -- Category Card images
import mobileWebDesign from "../assets/home/mobile/image-web-design.jpg";
import mobileAppDesign from "../assets/home/mobile/image-app-design.jpg";
import Footer from "../components/footer";

export default function GraphicDesign() {
  return (
    <div className="App bg-white scroll-smooth">
      <div className="max-w-7xl mx-auto">
        <header className="App-header sm:px-10">
          <Navbar />
        </header>
        <div className="sm:px-10">
          <DescriptionCard
            title="Graphic Design"
            description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
          />
          <div className="px-6 sm:px-0">
            <div className="py-14 lg:grid lg:grid-cols-3 gap-8">
              <div className="my-10 col-span-1">
                <ProjectCard
                  image={change}
                  title="TIM BROWN"
                  description="A book cover designed for Tim Brown’s new release, ‘Change’"
                />
              </div>
              <div className="my-10 col-span-1">
                <ProjectCard
                  image={boxedWater}
                  title="BOXED WATER"
                  description="A simple packaging concept made for Boxed Water"
                />
              </div>
              <div className="my-10 col-span-1">
                <ProjectCard
                  image={science}
                  title="Science"
                  description="A poster made in collaboration with the Federal Art Project"
                />
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-8">
              <div className="my-6">
                <CategoryCard title="Web Design" image={mobileWebDesign} path="/webdesign" />
              </div>
              <div className="my-6">
                <CategoryCard
                  title="App Design"
                  image={mobileAppDesign}
                  path="/appdesign"
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
