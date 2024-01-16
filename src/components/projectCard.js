export default function ProjectCard(props) {
  return (
    <div className="rounded-2xl overflow-hidden md:flex lg:flex-col items-center bg-light-peach h-full">
        <img className="md:w-1/2 lg:w-full" src={props.image}></img>
      <div className="text-center px-7 py-8 md:w-1/2 lg:w-full h-full">
        <p className="text-peach text-xl tracking-[5px] uppercase">{props.title}</p>
        <p className="text-base leading-6 mt-4 lg:mt-6">{props.description}</p>
      </div>
    </div>
  );
}
