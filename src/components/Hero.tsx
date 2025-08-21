import { Button } from "@/components/ui/button";
import heroImage from "@/assets/psychologist-hero.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Профессиональная
              <span className="text-primary block">психологическая</span>
              помощь
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Индивидуальная и семейная терапия. Помогаю найти внутренние ресурсы, 
              преодолеть кризисы и построить гармоничные отношения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-primary shadow-medium hover:shadow-soft transition-all"
              >
                <span className="hidden sm:inline">Записаться на консультацию</span>
                <span className="sm:hidden">Записаться</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm sm:text-base text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">95%</div>
                <div className="text-sm sm:text-base text-muted-foreground">положительных отзывов</div>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl shadow-medium">
              <img 
                src={heroImage} 
                alt="Психолог Анна Иванова" 
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
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