export default function CategoryCard(props) {
  return (
    <div className="rounded-2xl h-64 flex flex-col justify-center text-center bg-black bg-no-repeat bg-cover text-white relative overflow-hidden">
      <img src={props.image} className="absolute inset-0 h-full w-full opacity-40"></img>
      <p className="uppercase my-1.5 text-4xl font-medium tracking-[1.4px] z-10">{props.title}</p>
      <span className="flex items-center justify-center my-1.5 gap-4 z-10">
        <p className="uppercase text-base font-medium tracking-[5px]">View Projects</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 stroke-[4px] h-auto">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </div>
  );
}
