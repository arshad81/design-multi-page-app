export default function AboutUsCard(props) {
  return (
    <div className="bg-light-peach text-center md:rounded-2xl overflow-hidden lg:flex lg:items-center">
      <img alt="image alt text" className="w-full md:hidden" src={props.mobileImage}></img>
      <img alt="image alt text" className="w-full hidden md:block lg:hidden" src={props.tabImage}></img>
      <img alt="image alt text" className={`${props.isRight?"lg:order-2":""} w-full hidden lg:block lg:w-2/5`} src={props.desktopImage}></img>
      <div className="p-6 lg:w-3/5 lg:text-start lg:px-24">
        <p className="my-6 text-peach text-3xl font-medium">{props.title}</p>
        <p className="my-6 text-base">{props.para1}</p>
        <p className="my-6 text-base">{props.para2}</p>
      </div>
    </div>
  );
}
