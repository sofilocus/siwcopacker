import About from "../components/landing/about";
import Hero from "../components/landing/hero";

export default function Landing() {
  return (
    <section className="text-neutral-600 w-screen flex flex-col items-center justify-center">
      <Hero />
      <div className="md:max-w-7xl w-screen flex flex-col items-center justify-center container mx-auto">
        <About />
      </div>
    </section>
  );
}
