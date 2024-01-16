export default function LocationCard(props) {
  return (
    <div className="bg-light-peach text-center">
      <img className="w-full md:hidden" src={props.mobileImage}></img>
      <img
        className="w-full hidden md:block lg:hidden"
        src={props.tabImage}
      ></img>
      <img
        className="w-full hidden lg:block lg:w-2/5"
        src={props.desktopImage}
      ></img>
      <div>
        <p className="text-peach">{props.country}</p>
        <p className="">{props.name}</p>
        <p className="">{props.address1}</p>
        <p className="">{props.address2}</p>
        <p className="">Contact</p>
        <p className="">P:<span>{props.phone}</span></p>
        <p className="">M:<span>{props.email}</span></p>
      </div>
    </div>
  );
}
