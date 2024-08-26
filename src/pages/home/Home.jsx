import Transition from "../../components/transition/Transition";
import Skills from "../../components/skills/Skills";
import Awards from "../../components/awards/Awards";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {

  return (
    <div>
      <Hero />
      <Skills />
      <Awards />
      <Footer />
    </div>
  );
};

export default Transition(Home);
