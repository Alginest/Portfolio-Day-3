import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
    </div>
  );
}

export default App;
