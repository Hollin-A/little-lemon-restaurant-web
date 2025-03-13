import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import salad from "../../../assets/salad.jpg";
import pasta from "../../../assets/pasta.jpg";
import steak from "../../../assets/steak.jpg";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/commons/SectionTitle";

const specialsList: {
  title: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Greek Salad",
    description:
      "Try our Athenian Delight—crisp cucumbers, ripe tomatoes, Kalamata olives, feta, and red onions, drizzled with olive oil and oregano for a fresh Mediterranean bite.",
    image: salad,
  },
  {
    title: "Steak",
    description:
      "Savor our Chicago Bourbon Strip—juicy, grilled-to-perfection steak glazed with a rich bourbon reduction, served with garlic butter and roasted veggies.",
    image: steak,
  },
  {
    title: "Pasta",
    description:
      "Indulge in our Lemon Basil Linguine—al dente pasta tossed in a creamy basil sauce with a zesty lemon twist, topped with Parmesan and fresh herbs.",
    image: pasta,
  },
];

type Props = {};

const Highlights = (props: Props) => {
  return (
    <div className="container mx-auto flex flex-col gap-6 mt-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Specials" />
        <Button variant="outline">Online Menu</Button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {specialsList.map((item) => (
          <Card key={item.title} className="overflow-auto pt-0 pb-4">
            <div className="h-60">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <CardHeader className="px-4">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardFooter className="px-4">
              <Button className="max-w-max" variant="secondary">
                Order Online <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
