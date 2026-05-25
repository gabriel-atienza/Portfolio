import Hero           from "./components/Hero";
import CareerPath     from "./components/CareerPath";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#1C1610" }}>
      <main className="max-w-2xl mx-auto" style={{ background: "#1C1610" }}>
        <Hero avatarSrc="/gabriel.jpg" />
        <CareerPath />
        <Certifications />
      </main>
    </div>
  );
}
