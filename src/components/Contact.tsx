import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время для записи на консультацию.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Контакты</h2>
          <p className="text-xl text-muted-foreground">
            Готова помочь вам на пути к внутренней гармонии. Свяжитесь со мной удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground mt-2">
                  Доступен с 9:00 до 20:00, ежедневно
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 text-secondary mr-3" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">anna.ivanova@psychology.ru</p>
                <p className="text-muted-foreground mt-2">
                  Отвечаю в течение 24 часов
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 text-accent mr-3" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl">г. Москва, ул. Тверская, д. 15</p>
                <p className="text-muted-foreground mt-2">
                  Метро: Тверская, Пушкинская
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p>Понедельник - Пятница: 9:00 - 20:00</p>
                  <p>Суббота: 10:00 - 18:00</p>
                  <p>Воскресенье: 12:00 - 17:00</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex space-x-4">
              <Button className="bg-gradient-primary flex-1">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="w-5 h-5 mr-2" />
                Telegram
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Записаться на консультацию</CardTitle>
              <p className="text-muted-foreground">
                Заполните форму, и я свяжусь с вами для уточнения деталей
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите вашу ситуацию или вопросы..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary shadow-medium"
                  size="lg"
                >
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  * Первая консультация (30 минут) - бесплатно. 
                  Конфиденциальность гарантирована.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;