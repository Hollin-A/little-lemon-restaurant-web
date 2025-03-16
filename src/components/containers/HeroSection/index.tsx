import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import heroImage from "../../../assets/restaurant-interior.jpg";
import { URLSlug } from "@/config/constants";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full sm:h-[60vh] h-[40vh] mt-4 relative">
      <div className="w-full h-full flex justify-between items-center container mx-auto px-4 gap-40">
        <div className="flex flex-col gap-4 justify-between h-full sm:max-h-[70%] max-h-[80%]">
          <div className="flex flex-col sm:gap-2">
            <h1 className="scroll-m-20 sm:text-4xl text-3xl font-extrabold tracking-tight lg:text-5xl text-yellow">
              Little Lemon Restaurant
            </h1>
            <h4 className="scroll-m-20 sm:text-xl text-lg font-semibold tracking-tight text-green">
              Chicago
            </h4>
            <p className="leading-7 sm:[&:not(:first-child)]:mt-6 [&:not(:first-child)]:mt-2">
              Welcome to Little Lemon, your go-to spot in Chicago for fresh,
              vibrant flavors and zesty dishes. From cozy dinners to lively
              gatherings, we craft every meal with love, tradition, and a touch
              of Mediterranean magic. Join us today!
            </p>
          </div>
          <Button
            className="max-w-max cursor-pointer"
            variant="outline"
            onClick={() => navigate(URLSlug.reservations)}
          >
            Reserve a table
          </Button>
        </div>
        <div className="h-[90%] aspect-square border rounded-xl sm:block hidden">
          <img
            src={heroImage}
            alt="Hero Image - Restaurant Interior Image"
            className="w-full h-full object-cover"
          />
        </div>
        <img
          src={heroImage}
          alt="Hero section background"
          className="absolute w-full h-full -z-10 object-cover top-0 left-0 blur-lg opacity-60"
        />
      </div>
    </section>
  );
};

export default HeroSection;
