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

const testimonials: {
  name: string;
  image: string;
  comment: string;
}[] = [
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

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="w-full bg-secondary mt-10 py-20">
      <div className="container mx-auto items-center flex flex-col gap-10">
        <SectionTitle title="Testimonials" />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="gap-4 h-full">
                  <CardHeader className="flex gap-4 items-center">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt="person"
                        className="object-cover"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardTitle>{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center">
                    <p className="text-sm text-gray-400">
                      {testimonial.comment}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
