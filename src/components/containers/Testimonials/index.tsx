import SectionTitle from "@/components/commons/SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Sarah from "../../../assets/sarah.jpg";
import Micheal from "../../../assets/micheal.jpg";
import Emily from "../../../assets/emily.jpg";
import David from "../../../assets/david.jpg";
import Jessica from "../../../assets/jessica.jpg";

const testimonials = [
  {
    name: "Sarah T.",
    image: Sarah,
    comment:
      "Little Lemon is my favorite spot in Chicago! The Athenian Delight salad is so fresh, and the Lemon Basil Linguine is to die for. Perfect for a cozy dinner!",
  },
  {
    name: "Michael R.",
    image: Micheal,
    comment:
      "The Chicago Bourbon Strip steak was cooked to perfection! The ambiance is warm, and the staff is incredibly friendly. Highly recommend this place for a special night out.",
  },
  {
    name: "Emily L.",
    image: Emily,
    comment:
      "I can't get enough of the Mediterranean flavors here! The Athenian Delight is my go-to, and the desserts are amazing. Little Lemon never disappoints!",
  },
  {
    name: "David P.",
    image: David,
    comment:
      "The Lemon Basil Linguine is a masterpiece! The flavors are so vibrant, and the portions are generous. Little Lemon has become our family's favorite restaurant in Chicago.",
  },
  {
    name: "Jessica M.",
    image: Jessica,
    comment:
      "From the food to the service, everything at Little Lemon is top-notch. The Chicago Bourbon Strip is a must-try, and the atmosphere is so inviting. Love this place!",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-secondary sm:mt-10 mt-6 sm:py-10 py-6">
      <div className="container mx-auto px-4 items-center flex flex-col sm:gap-10 gap-6">
        <SectionTitle title="Testimonials" />
        <div className="relative w-full max-w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="px-2">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-1"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex flex-row gap-4 items-center">
                      <Avatar className="h-12 w-12 flex-shrink-0">
                        <AvatarImage
                          src={testimonial.image}
                          alt={`${testimonial.name}'s photo`}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-base sm:text-lg">
                        {testimonial.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-gray-400">
                        {testimonial.comment}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 sm:mt-6">
              <CarouselPrevious className="static mr-2 translate-y-0" />
              <CarouselNext className="static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
