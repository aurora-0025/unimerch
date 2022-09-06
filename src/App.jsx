import { useRef } from "react";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
function App() {
  const scrollRef = useRef(null);
  return (
    <div className="flex flex-col h-100% w-100% font-poppins">
      <NavBar scrollRef={scrollRef} />  
      <Landing /> 
      <Banner />
      <Features />
      <Shop scrollRef={scrollRef} />
      <Footer />
    </div>
  );
}

export default App;
