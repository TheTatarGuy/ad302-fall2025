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
    <section id="contact" className="min-h-screen flex items-center snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Контакты</h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
              <span className="md:hidden">Свяжитесь со мной удобным способом</span>
              <span className="hidden md:block">Готова помочь вам на пути к внутренней гармонии. Свяжитесь со мной удобным способом</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Phone className="w-5 h-5 sm:w-6 h-6 text-primary mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">Телефон</h4>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl">+7 (495) 123-45-67</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    <span className="md:hidden">9:00-20:00, ежедневно</span>
                    <span className="hidden md:block">Доступен с 9:00 до 20:00, ежедневно</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Mail className="w-5 h-5 sm:w-6 h-6 text-secondary mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg break-all">anna.ivanova@psychology.ru</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <MapPin className="w-5 h-5 sm:w-6 h-6 text-accent mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">Адрес</h4>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg">г. Москва, ул. Тверская, д. 15</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Метро: Тверская, Пушкинская
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-gradient-primary flex-1 text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex-1 text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 h-5 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium order-1 lg:order-2">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">Записаться</CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="md:hidden">Заполните форму для записи</span>
                  <span className="hidden md:block">Заполните форму, и я свяжусь с вами для уточнения деталей</span>
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Имя *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Телефон</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Опишите вашу ситуацию..."
                      rows={3}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary shadow-medium text-sm sm:text-base"
                    size="lg"
                  >
                    Отправить заявку
                  </Button>
                </form>
                
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <span className="md:hidden">* Первая консультация (30 мин) - бесплатно</span>
                    <span className="hidden md:block">* Первая консультация (30 минут) - бесплатно. Конфиденциальность гарантирована.</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;