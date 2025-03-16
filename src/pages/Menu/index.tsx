import SectionTitle from "@/components/commons/SectionTitle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import salad from "../../assets/salad.jpg";
import bruschetta from "../../assets/bruschetta.jpg";
import calamari from "../../assets/calamari.jpg";
import pasta from "../../assets/pasta.jpg";
import steak from "../../assets/steak.jpg";
import salmon from "../../assets/salmon.jpg";
import lemonCake from "../../assets/lemon-cake.jpg";
import baklava from "../../assets/baklava.jpg";
import lemonade from "../../assets/lemonade.jpg";
import lemonSpritz from "../../assets/lemon-spritz.jpg";
import PageTitle from "@/components/commons/PageTitle";
import { useNavigate } from "react-router-dom";
import { URLSlug } from "@/config/constants";

type Category = {
  id: string;
  label: string;
};

type BaseMenuItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  isPopular: boolean;
};

type FoodItem = BaseMenuItem & {
  isVegetarian: boolean;
};

type DrinkItem = BaseMenuItem & {
  isAlcoholic: boolean;
};

type MenuItem = FoodItem | DrinkItem;

type MenuItems = {
  [key: string]: MenuItem[];
};

const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const categories: Category[] = [
    { id: "appetizers", label: "Appetizers" },
    { id: "mains", label: "Main Courses" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ];

  const menuItems: MenuItems = {
    appetizers: [
      {
        id: "greek-salad",
        name: "Greek Salad",
        description:
          "Crisp cucumbers, ripe tomatoes, Kalamata olives, feta, and red onions, drizzled with olive oil and oregano.",
        image: salad,
        price: 12.99,
        isVegetarian: true,
        isPopular: true,
      },
      {
        id: "bruschetta",
        name: "Bruschetta",
        description:
          "Toasted baguette topped with fresh tomatoes, basil, garlic, and a balsamic glaze.",
        image: bruschetta,
        price: 9.99,
        isVegetarian: true,
        isPopular: false,
      },
      {
        id: "calamari",
        name: "Calamari",
        description:
          "Crispy fried calamari served with lemon aioli and marinara sauce.",
        image: calamari,
        price: 14.99,
        isVegetarian: false,
        isPopular: true,
      },
    ],
    mains: [
      {
        id: "lemon-pasta",
        name: "Lemon Basil Linguine",
        description:
          "Al dente pasta tossed in a creamy basil sauce with a zesty lemon twist, topped with Parmesan and fresh herbs.",
        image: pasta,
        price: 18.99,
        isVegetarian: true,
        isPopular: true,
      },
      {
        id: "bourbon-steak",
        name: "Chicago Bourbon Strip",
        description:
          "Juicy, grilled-to-perfection steak glazed with a rich bourbon reduction, served with garlic butter and roasted vegetables.",
        image: steak,
        price: 29.99,
        isVegetarian: false,
        isPopular: true,
      },
      {
        id: "mediterranean-salmon",
        name: "Mediterranean Salmon",
        description:
          "Grilled salmon with a lemon herb crust, served with quinoa and roasted vegetables.",
        image: salmon,
        price: 24.99,
        isVegetarian: false,
        isPopular: false,
      },
    ],
    desserts: [
      {
        id: "lemon-cake",
        name: "Lemon Delight Cake",
        description:
          "Light and fluffy lemon cake with lemon curd filling and cream cheese frosting.",
        image: lemonCake,
        price: 8.99,
        isVegetarian: true,
        isPopular: true,
      },
      {
        id: "baklava",
        name: "Honey Baklava",
        description:
          "Layers of phyllo dough filled with chopped nuts and sweetened with honey syrup.",
        image: baklava,
        price: 7.99,
        isVegetarian: true,
        isPopular: false,
      },
    ],
    drinks: [
      {
        id: "lemon-spritz",
        name: "Little Lemon Spritz",
        description:
          "Refreshing cocktail with limoncello, prosecco, and sparkling water.",
        image: lemonSpritz,
        price: 11.99,
        isAlcoholic: true,
        isPopular: true,
      },
      {
        id: "mint-lemonade",
        name: "Fresh Mint Lemonade",
        description:
          "Housemade lemonade infused with fresh mint and a touch of honey.",
        image: lemonade,
        price: 5.99,
        isAlcoholic: false,
        isPopular: true,
      },
    ],
  };

  const isFoodItem = (item: MenuItem): item is FoodItem => {
    return "isVegetarian" in item;
  };

  const isDrinkItem = (item: MenuItem): item is DrinkItem => {
    return "isAlcoholic" in item;
  };

  return (
    <div className="min-h-screen">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <PageTitle title="Our Menu" />
          <p className="text-lg">
            Experience Mediterranean cuisine with a modern twist. Each dish is
            prepared with locally sourced ingredients and our signature lemon
            zest.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SectionTitle title="Browse Our Menu" />
          <p className="text-gray-500 mt-2 text-left">
            All dishes are made fresh daily with locally sourced ingredients
          </p>
        </div>

        <div className="mb-10">
          <Tabs defaultValue="appetizers" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs sm:text-base"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {menuItems[category.id].map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden sm:h-full h-40 py-0"
                    >
                      <div className="flex md:hidden h-full">
                        <div className="w-1/3  flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-2/3 p-4">
                          <div className="flex justify-between items-start mb-1">
                            <CardTitle className="text-lg">
                              {item.name}
                            </CardTitle>
                            <span className="font-bold text-primary">
                              ${item.price}
                            </span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {isFoodItem(item) && item.isVegetarian && (
                              <Badge variant="outline" className="text-xs">
                                Vegetarian
                              </Badge>
                            )}
                            {item.isPopular && (
                              <Badge className="bg-yellow-500 text-xs">
                                Popular
                              </Badge>
                            )}
                            {isDrinkItem(item) && item.isAlcoholic && (
                              <Badge variant="outline" className="text-xs">
                                Contains Alcohol
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="line-clamp-2 text-xs">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="hidden md:block">
                        <div className="h-48 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle>{item.name}</CardTitle>
                            <span className="font-bold text-primary">
                              ${item.price}
                            </span>
                          </div>
                          <div className="flex gap-1 flex-wrap mb-3">
                            {isFoodItem(item) && item.isVegetarian && (
                              <Badge variant="outline">Vegetarian</Badge>
                            )}
                            {item.isPopular && (
                              <Badge className="bg-yellow-500">Popular</Badge>
                            )}
                            {isDrinkItem(item) && item.isAlcoholic && (
                              <Badge variant="outline">Contains Alcohol</Badge>
                            )}
                          </div>
                          <CardDescription>{item.description}</CardDescription>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="rounded-lg shadow-sm mb-10">
          <h3 className="font-bold text-xl mb-4">Dietary Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Vegetarian</Badge>
              <span className="text-sm text-gray-600">
                Vegetarian-friendly dish
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">GF</Badge>
              <span className="text-sm text-gray-600">
                Gluten-free options available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500">Popular</Badge>
              <span className="text-sm text-gray-600">Customer favorite</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Contains Alcohol</Badge>
              <span className="text-sm text-gray-600">Contains alcohol</span>
            </div>
          </div>
        </div>

        <div className="text-center py-8 mb-10">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 cursor-pointer"
              onClick={() => navigate(URLSlug.orderOnline)}
            >
              Order Online
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate(URLSlug.reservations)}
              className="cursor-pointer"
            >
              Make a Reservation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
