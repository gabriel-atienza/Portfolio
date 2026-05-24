import Hero           from "./components/Hero";
import CareerPath     from "./components/CareerPath";
import Certifications from "./components/Certifications";

export default function App() {
  return (
    <main>
      <Hero avatarSrc="/gabriel.jpg" />
      <CareerPath />
      <Certifications />
    </main>
  );
}
