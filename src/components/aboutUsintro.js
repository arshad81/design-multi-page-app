export default function AboutUsIntro(props) {
  return (
    <div className="bg-peach text-white text-center lg:text-start sm:rounded-xl overflow-hidden lg:flex lg:items-center">
      <img alt="image alt text" className="w-full md:hidden" src={props.mobileImage}></img>
      <img alt="image alt text" className="w-full hidden md:block lg:hidden" src={props.tabImage}></img>
      <img alt="image alt text" className="w-full hidden lg:block lg:order-2 w-2/5" src={props.desktopImage}></img>
      <div className="py-28 md:py-16 px-6 md:px-14 w-3/5 lg:ps-24">
        <p className="text-3xl lg:text-5xl font-medium">{props.title}</p>
        <p className="mt-4 text-sm lg:text-base mx-auto">
          {props.description}
        </p>
      </div>
    </div>
  );
}
