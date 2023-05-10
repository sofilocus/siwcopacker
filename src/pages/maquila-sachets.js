import About from "../components/landing-maquila/about";
import Hero from "../components/landing-maquila/hero";

export default function Landing() {
  return (
    <section className="text-neutral-600 w-screen flex flex-col items-center justify-center">
      <div>
        <Hero />
        <div className="md:max-w-7xl w-screen flex flex-col items-center justify-center container mx-auto">
          <About />
        </div>
      </div>
    </section>
  );
}
