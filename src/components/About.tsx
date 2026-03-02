import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users } from "lucide-react";
import { getContent, type Language } from "@/i18n/content";

type AboutProps = {
  lang: Language;
};

const About = ({ lang }: AboutProps) => {
  const { about } = getContent(lang);
  const cards = about.cards;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-secondary snap-start"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-center">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {about.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
              <span className="md:hidden">{about.introShort}</span>
              <span className="hidden md:block">{about.introLong}</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <GraduationCap className="w-8 h-8 sm:w-10 h-10 lg:w-12 h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
                  {cards[0].title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  <span className="md:hidden">{cards[0].short}</span>
                  <span className="hidden md:block">{cards[0].long}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <Heart className="w-8 h-8 sm:w-10 h-10 lg:w-12 h-12 text-secondary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
                  {cards[1].title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  <span className="md:hidden">{cards[1].short}</span>
                  <span className="hidden md:block">{cards[1].long}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <Users className="w-8 h-8 sm:w-10 h-10 lg:w-12 h-12 text-accent mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">
                  {cards[2].title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                  <span className="md:hidden">{cards[2].short}</span>
                  <span className="hidden md:block">{cards[2].long}</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-soft hidden md:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {about.journeyTitle}
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{about.journeyParagraphs[0]}</p>
              <p>{about.journeyParagraphs[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
