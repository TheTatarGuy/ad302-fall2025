import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Brain, Heart, Clock, MapPin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальная терапия",
      description: "Работа с тревогой, депрессией, самооценкой, личностным ростом",
      duration: "60 минут",
      price: "от 3500 ₽"
    },
    {
      icon: Users,
      title: "Семейная терапия",
      description: "Решение семейных конфликтов, улучшение отношений, работа с парами",
      duration: "90 минут", 
      price: "от 5000 ₽"
    },
    {
      icon: Brain,
      title: "Кризисная терапия",
      description: "Помощь в острых кризисных ситуациях, поддержка при утратах",
      duration: "60 минут",
      price: "от 4000 ₽"
    },
    {
      icon: Heart,
      title: "Работа с детьми",
      description: "Детская психология, адаптация, поведенческие проблемы",
      duration: "45 минут",
      price: "от 3000 ₽"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="min-h-screen flex items-center snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Услуги</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              <span className="md:hidden">Психологическая помощь для людей всех возрастов</span>
              <span className="hidden md:block">Предлагаю комплексную психологическую помощь для людей всех возрастов. Каждая сессия адаптируется под ваши индивидуальные потребности.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                <CardHeader className="text-center pb-2 sm:pb-4 p-3 sm:p-4 lg:p-6">
                  <service.icon className="w-6 h-6 sm:w-8 h-8 lg:w-10 h-10 text-primary mx-auto mb-2 sm:mb-3 lg:mb-4" />
                  <CardTitle className="text-xs sm:text-sm lg:text-base xl:text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{service.description}</p>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 sm:w-4 h-4 mr-1 sm:mr-2" />
                      {service.duration}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-primary">
                      {service.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">Первая консультация</div>
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-3 sm:mb-4">Бесплатно (30 минут)</div>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-primary shadow-medium w-full sm:w-auto"
                size="lg"
              >
                <span className="hidden sm:inline">Записаться на бесплатную консультацию</span>
                <span className="sm:hidden">Бесплатная консультация</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;