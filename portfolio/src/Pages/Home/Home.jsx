import Navbar from "../../Components/Navbar/Navbar";
import Contact from "../../Components/Contact/Contact";
import Experience from "../../Components/Experience/Experience";
import Footer from "../../Components/Footer/Footer";
import Intro from "../../Components/Intro/Intro";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Works from "../../Components/Works/Works";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Thumbnail />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
