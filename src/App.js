import "./App.css";
import Footer from "./component/Footer/Footer_f";
import Hero from "./component/Hero";
import Join from "./component/Join/Join";
import Plan from "./component/Plan/Plan";
import Program from "./component/Program";
import Reasons from "./component/Reasons/Reasons";
import Testimonials from "./component/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
