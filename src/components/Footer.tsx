import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Психолог Анна Иванова
            </h3>
            <p className="text-muted-foreground">
              Профессиональная психологическая помощь. 
              Индивидуальная и семейная терапия в Москве.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>+7 (495) 123-45-67</p>
              <p>anna.ivanova@psychology.ru</p>
              <p>г. Москва, ул. Тверская, д. 15</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Индивидуальная терапия</p>
              <p>Семейная терапия</p>
              <p>Кризисная помощь</p>
              <p>Детская психология</p>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center flex-wrap">
            Сделано с <Heart className="w-4 h-4 text-red-500 mx-2" /> для помощи людям
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Анна Иванова. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;