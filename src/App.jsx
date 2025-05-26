import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";

import "../css/App.css";

function App() { 
  return (
    <>
    <Header/>
     
      <Hero />
      <MovieSection />
      <Footer />
    </>
  );
}
export default App;