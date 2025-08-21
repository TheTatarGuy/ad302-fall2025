import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Мария С.",
      text: "Анна помогла мне пройти через очень сложный период в жизни. Благодаря её поддержке и профессионализму я смогла найти внутренние ресурсы и изменить свою жизнь к лучшему.",
      rating: 5
    },
    {
      name: "Алексей К.",
      text: "Семейная терапия с Анной Ивановой спасла наш брак. Она помогла нам научиться слушать друг друга и находить компромиссы. Очень благодарен за профессиональную помощь.",
      rating: 5
    },
    {
      name: "Елена В.",
      text: "Работа с тревожностью дала потрясающие результаты. Анна использует эффективные методы и создаёт атмосферу полного доверия. Рекомендую всем, кто нуждается в помощи.",
      rating: 5
    },
    {
      name: "Дмитрий Л.",
      text: "Сын стал более уверенным в себе после работы с психологом. Анна нашла подход к ребёнку и помогла ему справиться с трудностями в школе. Спасибо за профессионализм!",
      rating: 5
    },
    {
      name: "Ольга М.",
      text: "Индивидуальная терапия помогла мне разобраться в себе и своих отношениях. Анна - внимательный и чуткий специалист, которому можно довериться.",
      rating: 5
    },
    {
      name: "Игорь Р.",
      text: "Кризисная терапия в самый тяжёлый момент жизни. Анна помогла не только пережить потерю, но и найти силы жить дальше. Безмерно благодарен.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center bg-gradient-secondary snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Отзывы</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
              <span className="md:hidden">Мнения моих клиентов</span>
              <span className="hidden md:block">Мнения людей, которым я помогла найти путь к внутренней гармонии</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 h-4 lg:w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                    <span className="md:hidden">"{testimonial.text.slice(0, 80)}..."</span>
                    <span className="hidden md:block">"{testimonial.text}"</span>
                  </p>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft max-w-2xl mx-auto w-full">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">довольных</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-1 sm:mb-2">4.9</div>
                <div className="text-xs sm:text-sm text-muted-foreground">оценка</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent mb-1 sm:mb-2">120+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;