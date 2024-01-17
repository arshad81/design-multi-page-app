import circleImage from "../assets/shared/desktop/bg-pattern-small-circle.svg";

export default function Location(props) {
  return (
    <div className="text-center">
      <div className="relative">
        <img className="mx-auto" src={props.image}></img>
        <img src={circleImage} className="absolute top-0 left-1/2 -translate-x-1/2"></img>
      </div>
      <div className="mt-12">
        <p className="uppercase text-xl tracking-[5px] mb-8">{props.title}</p>
        <button className="mt-8 bg-peach text-white px-5 py-4 rounded-lg block w-fit mx-auto hover:bg-secondary-peach hover:text-white ">
          See Location
        </button>
      </div>
    </div>
  );
}
