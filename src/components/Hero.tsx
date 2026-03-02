import { Button } from "@/components/ui/button";
import heroImage from "@/assets/psychologist-hero.jpg";
import { getContent, type Language } from "@/i18n/content";

type HeroProps = {
  lang: Language;
};

const Hero = ({ lang }: HeroProps) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const { hero } = getContent(lang);
  const statColors = ["text-primary", "text-secondary", "text-accent"];

  return (
    <section className="min-h-screen flex items-center bg-gradient-hero pt-20 md:pt-0 snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block md:inline">{hero.titleLine1}</span>
              <span className="text-primary block">{hero.titleLine2}</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="md:hidden">{hero.descriptionShort}</span>
              <span className="hidden md:block">{hero.descriptionLong}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary shadow-medium hover:shadow-soft transition-all text-sm sm:text-base"
              >
                <span className="hidden sm:inline">{hero.primaryCtaLong}</span>
                <span className="sm:hidden">{hero.primaryCtaShort}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm sm:text-base"
              >
                {hero.secondaryCta}
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
              {hero.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold ${statColors[index] ?? "text-primary"}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-medium">
              <img
                src={heroImage}
                alt={hero.imageAlt}
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
