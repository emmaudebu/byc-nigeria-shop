import "./App.css";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Newcollections from "./Components/Newcollections";

function App() {
  return (
    <main className=" max-w-screen-xl mx-auto">
      <NavBar />
      <Hero />
      <Newcollections />
    </main>
  );
}
export default App;
