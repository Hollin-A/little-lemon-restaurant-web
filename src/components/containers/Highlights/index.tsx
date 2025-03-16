import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/commons/SectionTitle";

import salad from "../../../assets/salad.jpg";
import pasta from "../../../assets/pasta.jpg";
import steak from "../../../assets/steak.jpg";
import { URLSlug } from "@/config/constants";

const specialsList = [
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

const Highlights = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 flex flex-col sm:gap-6 gap-4 sm:mt-10 mt-6">
      <div className="flex justify-between items-center gap-4">
        <SectionTitle title="Specials" />
        <Button
          variant="outline"
          onClick={() => navigate(URLSlug.menu)}
          className="cursor-pointer"
        >
          Online Menu
        </Button>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-6">
        {specialsList.map((item) => (
          <Card key={item.title} className="overflow-hidden py-0">
            <div className="sm:hidden flex flex-row h-full sm:max-h-none max-h-40">
              <div className="w-1/3 h-auto">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="w-2/3 flex flex-col">
                <CardHeader className="px-3 py-3">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="px-3 py-2 mt-auto">
                  <Button
                    className="max-w-max text-xs h-8 cursor-pointer"
                    variant="secondary"
                    onClick={() => navigate(URLSlug.orderOnline)}
                  >
                    Order <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>

            <div className="hidden sm:flex pt-0 pb-4 sm:flex-col sm:gap-4 sm:justify-between sm:h-full">
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
                <Button
                  className="max-w-max cursor-pointer"
                  variant="secondary"
                  onClick={() => navigate(URLSlug.orderOnline)}
                >
                  Order Online <ArrowRight className="ml-1" />
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
