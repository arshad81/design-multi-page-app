export default function LocationCard(props) {
  return (
    <div className="lg:flex md:justify-between md:gap-8">
      <img
        className="md:rounded-xl w-full md:hidden"
        src={props.mobileImage}
      ></img>
      <img
        className="md:rounded-xl w-full hidden md:block lg:hidden"
        src={props.tabImage}
      ></img>
      <img
        className={` md:rounded-xl w-full hidden lg:block lg:w-2/5 ${props.isRight? "" : "lg:order-2"}`}
        src={props.desktopImage}
      ></img>
      <div className={`md:rounded-xl bg-light-peach text-center md:text-start sm:mt-8 lg:w-3/5 lg:m-0 ${props.isRight? "lg:order-1" : ""}`}>
        <div className="py-20 px-6 md:px-20 lg:h-full lg:flex lg:flex-col lg:justify-center">
          <p className="text-peach font-medium text-3xl">{props.country}</p>
          <div className="md:flex md:justify-between md:mt-6">
            <div className="my-6 md:my-0">
              <p className="font-semibold my-1">{props.name}</p>
              <p className="my-1">{props.address1}</p>
              <p className="my-1">{props.address2}</p>
            </div>
            <div className="my-6 md:my-0">
              <p className="font-semibold my-1">Contact</p>
              <p className="my-1">
                P:<span>{props.phone}</span>
              </p>
              <p className="my-1">
                M:<span>{props.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
