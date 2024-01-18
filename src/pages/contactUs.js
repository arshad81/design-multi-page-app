import Navbar from "../components/header";
import Location from "../components/location";
import ContactUsComponent from "../components/contactUs";
import Footer from "../components/footer";

import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg";

export default function ContactUs() {
  return (
    <div className="scroll-smooth">
      <header className="App-header sm:px-10 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <div className="sm:px-10 max-w-7xl mx-auto">
        <ContactUsComponent/>
        <div className="my-32 lg:flex items-center justify-around">
          <div className="mb-12 lg:m-0">
            <Location image={canada} title="Canada" target="canada"/>
          </div>
          <div className="my-12 lg:m-0">
            <Location image={australia} title="Australia" target="australia" />
          </div>
          <div className="mt-12 lg:m-0">
            <Location image={uk} title="United Kingdom" target="uk" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
