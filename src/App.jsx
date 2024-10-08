import Navbar from "../src/Navbar/Navbar";
import Hero2 from "./Hero/Hero2";
// import Client from "./Client/Client";
import Client from "./Client/Client2";
import Cta from "./CTA/Cta";
import About from "./About/About";
import Service2 from "./Service/Service2";
import Projects from "./Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
import Roadmap from "./Roadmap/Roadmap";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
import "./index.css";
import Testimonial2 from "./Testimonial/Test2";

function App() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      {/* <Client /> */}
      <Client />
      <Cta />
      <About />
      <Service2 />
      <Projects />
      {/* <Testimonial /> */}
      <Testimonial2 />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
