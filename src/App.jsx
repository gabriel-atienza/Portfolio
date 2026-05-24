import Hero           from "./components/Hero";
import CareerPath     from "./components/CareerPath";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1610]">
      <main className="max-w-2xl mx-auto shadow-sm bg-[#1A1610]">
        <Hero avatarSrc="/gabriel.jpg" />
        <CareerPath />
        <Certifications />
      </main>
    </div>
  );
}
