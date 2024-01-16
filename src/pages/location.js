import Navbar from "../components/header";
import LocationCard from "../components/locationCard";

export default function Location() {
  return (
    <div>
      <header className="App-header sm:px-10 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <LocationCard
        country="Canada"
        name="Designo Central Office"
        address1="3886 Wellington Street"
        address2="Toronto, Ontario M9C 3J5"
        phone="+1 253-863-8967"
        email="contact@designo.co"
      />
    </div>
  );
}
