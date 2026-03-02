import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { getContent, type Language } from "@/i18n/content";

type ContactProps = {
  lang: Language;
};

const Contact = ({ lang }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();
  const { contact } = getContent(lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: contact.toast.title,
      description: contact.toast.description,
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center snap-start">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {contact.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
              <span className="md:hidden">{contact.introShort}</span>
              <span className="hidden md:block">{contact.introLong}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 order-1">
              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Phone className="w-5 h-5 sm:w-6 h-6 text-primary mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">
                      {contact.info.phoneLabel}
                    </h4>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl">
                    {contact.info.phoneValue}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    <span className="md:hidden">{contact.info.phoneShort}</span>
                    <span className="hidden md:block">
                      {contact.info.phoneLong}
                    </span>
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <Mail className="w-5 h-5 sm:w-6 h-6 text-secondary mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">
                      {contact.info.emailLabel}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg break-all">
                    {contact.info.emailValue}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <MapPin className="w-5 h-5 sm:w-6 h-6 text-accent mr-2 sm:mr-3" />
                    <h4 className="font-semibold text-sm sm:text-base">
                      {contact.info.addressLabel}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg">
                    {contact.info.addressValue}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {contact.info.addressNote}
                  </p>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-gradient-primary flex-1 text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 h-5 mr-2" />
                  {contact.channels.whatsapp}
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 text-sm sm:text-base"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 h-5 mr-2" />
                  {contact.channels.telegram}
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium order-2 mt-10">
              <CardHeader className="p-4  pt-8 sm:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">
                  {contact.form.title}
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  <span className="md:hidden">
                    {contact.form.subtitleShort}
                  </span>
                  <span className="hidden md:block">
                    {contact.form.subtitleLong}
                  </span>
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      {contact.form.nameLabel}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={contact.form.namePlaceholder}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      {contact.form.emailLabel}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={contact.form.emailPlaceholder}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      {contact.form.phoneLabel}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={contact.form.phonePlaceholder}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      {contact.form.messageLabel}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={contact.form.messagePlaceholder}
                      rows={3}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary shadow-medium text-sm sm:text-base"
                    size="lg"
                  >
                    {contact.form.submit}
                  </Button>
                </form>

                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <span className="md:hidden">{contact.form.noteShort}</span>
                    <span className="hidden md:block">
                      {contact.form.noteLong}
                    </span>
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
