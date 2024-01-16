import logo from "../assets/shared/desktop/logo-light.png";
import footerBg from "../assets/shared/desktop/bg-pattern-three-circles.svg";
import fb from "../assets/shared/desktop/icon-facebook.svg";
import insta from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";

export default function Footer() {
  return (
    <div className="bg-black mt-52 lg:mt-[20rem] relative h-full text-center py-16 px-6 sm:px-10">
      <div className="mx-0 max-w-7xl lg:mx-auto rounded-2xl px-6 sm:px-10 lg:px-20 py-16 bg-peach text-white -translate-y-1/2 lg:-translate-y-full relative lg:flex lg:justify-between lg:items-center lg:text-start">
        <img src={footerBg} className="absolute inset-0 h-full"></img>
        <div>
          <p className="text-3xl font-medium lg:w-1/2">
            Let’s talk about your project
          </p>
          <p className="text-base leading-6 mt-3 lg:w-1/2">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="mt-8 lg:mt-0 bg-white rounded-md text-black uppercase p-4 tracking-[1px]">
          Get in touch
        </button>
      </div>
      <div className=" text-white -mt-32 sm:-mt-14 lg:-mt-40 md:max-w-7xl mx-auto lg:-translate-y-1/4">
        <div className="md:flex justify-between items-center">
          <img className="w-56 h-auto mx-auto md:mx-0" src={logo}></img>
          <ul className="my-10 md:m-0 md:flex justify-between items-center md:gap-10">
            <li className="uppercase my-8 text-sm">our company</li>
            <li className="uppercase my-8 text-sm">locations</li>
            <li className="uppercase my-8 text-sm">contact</li>
          </ul>
        </div>
        <div className="md:flex justify-between items-end md:text-start">
          <div className="my-10 md:mb-0">
            <p className="leading-6 font-medium">Designo Central Office</p>
            <p className="leading-6">
              <span className="block mt-1">
                3886 Wellington Street Toronto,
              </span>
              <span className="block mt-1">Ontario M9C 3J5</span>
            </p>
          </div>
          <div className="my-10 md:mb-0">
            <p className="my-1">Contact Us (Central Office)</p>
            <p className="my-1">P : +1 253-863-8967</p>
            <p className="my-1">M : contact@designo.co</p>
          </div>
          <div className="flex mt-10 justify-center items-center gap-4">
            <img src={fb}></img>
            <img src={youtube}></img>
            <img src={twitter}></img>
            <img src={pinterest}></img>
            <img src={insta}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
