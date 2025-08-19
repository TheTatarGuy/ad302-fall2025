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
    <section id="testimonials" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground">
            Мнения людей, которым я помогла найти путь к внутренней гармонии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">4.9</div>
                <div className="text-muted-foreground">средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">120+</div>
                <div className="text-muted-foreground">отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;