import Navbar from "../src/Navbar/Navbar";
import Hero2 from "./Hero/Hero2";
import Client from "./Client/Client";
import Cta from "./CTA/Cta";
import About from "./About/About";
// import Service from "./Service/Service";
import Service2 from "./Service/Service2";
import Projects from "./Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
import Roadmap from "./Roadmap/Roadmap";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Client />
      <Cta />
      <About />
      <Service2 />
      <Projects />
      <Testimonial />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
