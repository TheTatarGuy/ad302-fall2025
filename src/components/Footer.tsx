import { Heart } from "lucide-react";
import { getContent, type Language } from "@/i18n/content";

type FooterProps = {
  lang: Language;
};

const Footer = ({ lang }: FooterProps) => {
  const { footer } = getContent(lang);

  return (
    <footer className="bg-card border-t py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              {footer.brand}
            </h3>
            <p className="text-muted-foreground">{footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footer.contactsTitle}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{footer.contacts.phone}</p>
              <p>{footer.contacts.email}</p>
              <p>{footer.contacts.address}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{footer.servicesTitle}</h4>
            <div className="space-y-2 text-muted-foreground">
              {footer.services.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center flex-wrap">
            {footer.madeWith} <Heart className="w-4 h-4 text-red-500 mx-2" />{" "}
            {footer.madeWithTail}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
