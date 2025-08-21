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
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Услуги</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Предлагаю комплексную психологическую помощь для людей всех возрастов. 
            Каждая сессия адаптируется под ваши индивидуальные потребности.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.duration}
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                </div>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full"
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-soft">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Формат работы</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Очные консультации</div>
                    <div className="text-muted-foreground">
                      В уютном офисе в центре города
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold">Онлайн-сессии</div>
                    <div className="text-muted-foreground">
                      Через защищенные видеосвязи
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-6 lg:mt-0">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Первая консультация</div>
              <div className="text-lg sm:text-xl text-muted-foreground mb-4">Бесплатно (30 минут)</div>
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