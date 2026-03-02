import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { type Language } from "@/i18n/content";

type IndexProps = {
  lang: Language;
};

const Index = ({ lang }: IndexProps) => {
  return (
    <div className="min-h-screen snap-y snap-mandatory overflow-y-scroll md:snap-none">
      <Header lang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
