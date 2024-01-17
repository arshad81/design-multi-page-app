import Navbar from "../components/header";
import LocationCard from "../components/locationCard";
import mobileCanada from "../assets/locations/desktop/image-map-canada.png";
import tabCanada from "../assets/locations/tablet/image-map-canada.png";
import desktopCanada from "../assets/locations/desktop/image-map-canada.png";
import Footer from "../components/footer";

export default function Location() {
  return (
    <div>
      <header className="App-header sm:px-10 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <div className="sm:px-10 max-w-7xl mx-auto">
        <LocationCard
          isRight={false}
          mobileImage={mobileCanada}
          tabImage={tabCanada}
          desktopImage={desktopCanada}
          country="Canada"
          name="Designo Central Office"
          address1="3886 Wellington Street"
          address2="Toronto, Ontario M9C 3J5"
          phone="+1 253-863-8967"
          email="contact@designo.co"
        />
        <div className="mt-10">
          <LocationCard
          isRight={true}
            mobileImage={mobileCanada}
            tabImage={tabCanada}
            desktopImage={desktopCanada}
            country="Canada"
            name="Designo Central Office"
            address1="3886 Wellington Street"
            address2="Toronto, Ontario M9C 3J5"
            phone="+1 253-863-8967"
            email="contact@designo.co"
          />
        </div>
        <div className="mt-10">
          <LocationCard
          isRight={false}

            mobileImage={mobileCanada}
            tabImage={tabCanada}
            desktopImage={desktopCanada}
            country="Canada"
            name="Designo Central Office"
            address1="3886 Wellington Street"
            address2="Toronto, Ontario M9C 3J5"
            phone="+1 253-863-8967"
            email="contact@designo.co"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
