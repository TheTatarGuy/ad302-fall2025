import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { getContent, type Language } from "@/i18n/content";

type TestimonialsProps = {
  lang: Language;
};

const Testimonials = ({ lang }: TestimonialsProps) => {
  const { testimonials } = getContent(lang);

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center bg-gradient-secondary snap-start"
    >
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
        <div className="h-full flex flex-col justify-center">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
              {testimonials.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">
              <span className="md:hidden">{testimonials.introShort}</span>
              <span className="hidden md:block">{testimonials.introLong}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {testimonials.items.slice(0, 3).map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-all"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 h-4 lg:w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4 leading-relaxed">
                    <span className="md:hidden">
                      "{testimonial.text.slice(0, 80)}..."
                    </span>
                    <span className="hidden md:block">
                      "{testimonial.text}"
                    </span>
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
              {testimonials.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 ${
                      index === 0
                        ? "text-primary"
                        : index === 1
                          ? "text-secondary"
                          : "text-accent"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
