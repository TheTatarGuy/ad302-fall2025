import { Button } from "@/components/ui/button";
import heroImage from "@/assets/psychologist-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-hero pt-20 md:pt-0 snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center h-full">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="block md:inline">Профессиональная</span>
              <span className="text-primary block">психологическая помощь</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="md:hidden">Индивидуальная и семейная терапия. Помогаю преодолеть кризисы.</span>
              <span className="hidden md:block">Индивидуальная и семейная терапия. Помогаю найти внутренние ресурсы, преодолеть кризисы и построить гармоничные отношения.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-primary shadow-medium hover:shadow-soft transition-all text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Записаться на консультацию</span>
                <span className="sm:hidden">Записаться</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm sm:text-base"
              >
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-secondary">500+</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-accent">95%</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">отзывов</div>
              </div>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-medium">
              <img 
                src={heroImage} 
                alt="Психолог Анна Иванова" 
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