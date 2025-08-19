import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">О себе</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Психолог с 10-летним опытом работы. Специализируюсь на индивидуальной 
              и семейной терапии, помощи в кризисных ситуациях и личностном росте.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Образование</h3>
                <p className="text-muted-foreground">
                  МГУ им. М.В. Ломоносова, факультет психологии. 
                  Повышение квалификации в области семейной терапии.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Подход</h3>
                <p className="text-muted-foreground">
                  Гуманистический подход, эклектическая терапия. 
                  Работаю с принципами доверия и безоценочного принятия.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Опыт</h3>
                <p className="text-muted-foreground">
                  Более 500 успешных случаев. Работа с тревожностью, 
                  депрессией, семейными конфликтами и личностным ростом.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold mb-6">Мой путь в психологии</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Моя профессиональная деятельность началась с желания помогать людям 
                находить внутренние ресурсы для преодоления жизненных трудностей. 
                За годы практики я убедилась, что каждый человек обладает уникальным 
                потенциалом для исцеления и роста.
              </p>
              <p>
                В своей работе я использую интегративный подход, сочетая различные 
                терапевтические методы в зависимости от потребностей клиента. 
                Основой моей практики является создание безопасного пространства, 
                где можно открыто говорить о самых сложных переживаниях.
              </p>
              <p>
                Верю, что психотерапия — это совместный процесс исследования и 
                открытий, где клиент является экспертом своей жизни, а психолог — 
                проводником в этом путешествии к пониманию себя.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;