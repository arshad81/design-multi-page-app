import BgSvg from "../assets/home/desktop/bg-pattern-hero-home.svg";

export default function ProsCard(props) {
  return (
    <div className="text-center md:text-start my-20 md:flex md:gap-12 justify-between items-center">
      <div className="relative">
        <img className="mx-auto md:min-w-52" src={props.image} alt="passionate svg"></img>
        <img className="mx-auto absolute inset-0 h-full" src={BgSvg} alt="passionate svg"></img>
      </div>
      <div className="md:w-fit">
        <p className="mt-12 md:mt-0 tracking-[5px] text-xl uppercase font-medium">{props.title}</p>
        <p className="mt-8 leading-6 text-base">{props.description}</p>
      </div>
    </div>
  );
}
