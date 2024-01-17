import Navbar from "../components/header";

import DescriptionCard from "../components/descriptionCard.js";

import ProjectCard from "../components/projectCard.js";
import airlifter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

import CategoryCard from "../components/categoryCard.js";
// -- Category Card images
import mobileWebDesign from "../assets/home/mobile/image-web-design.jpg";
import mobileGraphicDesign from "../assets/home/mobile/image-graphic-design.jpg";
import Footer from "../components/footer";

export default function AppDesign() {
  return (
    <div className="App bg-white ">
      <div className="max-w-7xl mx-auto">
        <header className="App-header sm:px-10">
          <Navbar />
        </header>
        <div className="sm:px-10">
          <DescriptionCard
            title="App Design"
            description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
          />
          <div className="px-6 sm:px-0">
            <div className="py-14 lg:grid lg:grid-cols-3 gap-8 ">
              <div className="my-10">
                <ProjectCard
                  image={airlifter}
                  title="AIRFILTER"
                  description="Solving the problem of poor indoor air quality by filtering the air"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={eyecam}
                  title="EYECAM"
                  description="Product that lets you edit your favorite photos and videos at any time"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={faceit}
                  title="FACEIT"
                  description="Get to meet your favorite internet superstar with the faceit app"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={todo}
                  title="TODO"
                  description="A todo app that features cloud sync with light and dark mode"
                />
              </div>
              <div className="my-10">
                <ProjectCard
                  image={loopstudios}
                  title="LOOPSTUDIOS"
                  description="A VR experience app made for Loopstudios"
                />
              </div>
            </div>
            <div className=" lg:grid lg:grid-cols-2 gap-8">
              <div className="my-6">
                <CategoryCard
                  title="Web Design"
                  image={mobileWebDesign}
                  path="/webdesign"
                />
              </div>
              <div className="my-6">
                <CategoryCard
                  title="Graphic Design"
                  image={mobileGraphicDesign}
                  path="/graphicdesign"
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
