import { useNavigate } from "react-router-dom";
import { CalendarClock, Clock, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { URLSlug } from "@/config/constants";
import PageTitle from "@/components/commons/PageTitle";

const OrderOnline = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="text-white py-12">
        <div className="container mx-auto px-4">
          <PageTitle title="Order Online" />
          <p className="text-lg md:w-2/3">
            Enjoy Little Lemon's delicious Mediterranean cuisine in the comfort
            of your home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Card className="border-2 border-gray-400">
          <CardContent className="flex flex-col items-center text-center p-6 md:p-12">
            <div className="bg-yellow-100 p-4 rounded-full mb-6">
              <Clock className="h-12 w-12 text-yellow-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Online Ordering System is Under Maintenance
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl">
              We're currently upgrading our online ordering system to serve you
              better. We apologize for any inconvenience and appreciate your
              patience.
            </p>
            <div className="bg-secondary p-6 rounded-lg shadow-sm w-full max-w-md mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 text-primary" />
                Order by Phone
              </h3>
              <p className="text-gray-400 mb-2">
                Please call us to place your order:
              </p>
              <a
                href="tel:+13125551234"
                className="text-2xl font-bold text-primary hover:underline block mb-4"
              >
                (312) 555-1234
              </a>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="mr-2 h-4 w-4" />
                <span>Available 11:00 AM - 9:30 PM daily</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <CalendarClock className="mr-2 h-5 w-5 text-primary" />
              Make a Reservation
            </h3>
            <p className=" mb-6">
              Prefer dining in? Book a table at our restaurant and enjoy the
              full Little Lemon experience.
            </p>
            <Button
              className="w-full sm:w-auto cursor-pointer"
              onClick={() => navigate(URLSlug.reservations)}
            >
              Reserve a Table
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Visit Our Restaurant</h3>
            <p className=" mb-2">1234 Lemon St</p>
            <p className=" mb-6">Chicago, IL 60601</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Get Directions
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                View Hours
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 bg-secondary p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">
                When will online ordering be available again?
              </h4>
              <p className="text-gray-400">
                We expect our new and improved online ordering system to be up
                and running within the next two weeks.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                Is there a minimum order for delivery?
              </h4>
              <p className="text-gray-400">
                Yes, we require a $20 minimum order for delivery. There is no
                minimum for pickup orders.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">
                What is your delivery area?
              </h4>
              <p className="text-gray-400">
                We currently deliver within a 5-mile radius of our restaurant
                location in downtown Chicago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
