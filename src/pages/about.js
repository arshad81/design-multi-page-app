import Navbar from "../components/header";
//  import DescriptionCard from "../components/descriptionCard";
import AboutUsCard from "../components/aboutUsCard";
import AboutUsIntro from "../components/aboutUsintro";
import Location from "../components/location";
import Footer from "../components/footer";

import heroImageMobile from "../assets/about/mobile/image-about-hero.jpg";
import heroImageTab from "../assets/about/tablet/image-about-hero.jpg";
import heroImageDesktop from "../assets/about/desktop/image-about-hero.jpg";


import imageWorldClassMobile from "../assets/about/mobile/image-world-class-talent.jpg";
import imageWorldClassTab from "../assets/about/tablet/image-world-class-talent.jpg";
import imageWorldClassDesktop from "../assets/about/desktop/image-world-class-talent.jpg";

import realDealMobile from "../assets/about/mobile/image-real-deal.jpg";
import realDealTab from "../assets/about/tablet/image-real-deal.jpg";
import realDealDesktop from "../assets/about/desktop/image-real-deal.jpg";

import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg";

export default function About() {
  return (
    <div>
      <header className="App-header sm:px-10 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <div className="sm:px-10 max-w-7xl mx-auto">
        <AboutUsIntro
          mobileImage={heroImageMobile}
          tabImage={heroImageTab}
          desktopImage={heroImageDesktop}
          title="About Us"
          description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences."
        />
        <div className="md:my-32">
          <AboutUsCard
            isRight = {false}
            mobileImage={imageWorldClassMobile}
            tabImage={imageWorldClassTab}
            desktopImage={imageWorldClassDesktop}
            title="World-class talent"
            para1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   "
            para2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          />
        </div>
        <div className="my-32 lg:flex items-center justify-around">
          <div className="mb-12 lg:m-0">
            <Location image={canada} title="Canada" />
          </div>
          <div className="my-12 lg:m-0">
            <Location image={australia} title="Australia" />
          </div>
          <div className="mt-12 lg:m-0">
            <Location image={uk} title="United Kingdom" />
          </div>
        </div>
        <AboutUsCard
          isRight = {true}
          mobileImage={realDealMobile}
          tabImage={realDealTab}
          desktopImage={realDealDesktop}
          title="The real deal"
          para1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success   "
          para2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        />
      </div>
      <Footer />
    </div>
  );
}
