import mobileImage from "../assets/home/desktop/image-hero-phone.png";
import bgImage from "../assets/home/desktop/bg-pattern-hero-home.svg";

export default function IndexHero() {
  return (
    <div className="bg-peach text-center text-white pt-20 overflow-hidden relative md:rounded-xl lg:flex lg:justify-between lg:items-start lg:text-start lg:ps-24 lg:py-36">
      <img className='absolute w-full left-1/2 z-10 top-1/2 -translate-y-1/2' src={bgImage}></img>
      <div className="px-6 lg:w-1/2 z-10 relative">
        <p className="text-3xl md:text-5xl md:leading-[48px] font-medium">
          Award-winning custom designs and digital branding solutions
        </p>
        <p className="mt-4 text-sm">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="mt-8 z-20 relative bg-white rounded-md text-black uppercase p-4 tracking-[1px]">
          Learn More
        </button>
      </div>
      <img className="translate-y-1/4 -mt-50p mx-auto z-20 relative lg:hidden" src={mobileImage}></img>
      <img className="hidden lg:block absolute top-0 right-0" src={mobileImage}></img>
    </div>
  );
}
