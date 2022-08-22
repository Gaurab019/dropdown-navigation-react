import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/HeroSection/MainSection";

function App() {
  return (
    <section className="App">
      <Navbar />
      <MainSection />
    </section>
  );
}

export default App;
