import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PageTitle from "@/components/commons/PageTitle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { fetchAPI, submitAPI } from "@/api/api";
import { cn } from "@/lib/utils";

import dining from "../../assets/dining.jpg";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  guests: z
    .number({ invalid_type_error: "Please enter a number." })
    .int({ message: "Number of guests must be a whole number." })
    .min(1, { message: "At least 1 guest is required." })
    .max(20, { message: "Maximum 20 guests allowed." }),
  date: z.date({
    required_error: "Reservation date is required.",
  }),
  timeSlot: z
    .string({ required_error: "Please select an available time slot." })
    .min(1, { message: "Please select an available time slot." }),
});

type FormValues = z.infer<typeof formSchema>;

const ReservationsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isLoadingTimeSlots, setIsLoadingTimeSlots] = useState(false);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      guests: 2,
      timeSlot: "",
    },
  });

  const selectedDate = form.watch("date");

  useEffect(() => {
    const fetchTimeSlots = async () => {
      if (!selectedDate) return;

      try {
        setIsLoadingTimeSlots(true);
        const response = await fetchAPI(selectedDate);
        setAvailableTimeSlots(response || []);

        if (form.getValues("timeSlot")) {
          form.setValue("timeSlot", "");
        }
      } catch (error) {
        console.error("Error fetching available time slots:", error);
        setAvailableTimeSlots([]);
      } finally {
        setIsLoadingTimeSlots(false);
      }
    };

    fetchTimeSlots();
  }, [selectedDate, form]);

  const onSubmit = async (values: FormValues) => {
    try {
      setIsLoading(true);

      const success = await submitAPI(values);

      if (success) {
        setSubmittedData(values);
        setConfirmationOpen(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-10 container mx-auto">
      <PageTitle title="Make a Reservation" className="mb-10" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="" />
                  </FormControl>
                  <FormDescription>
                    The reservation will be placed under this name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      {...field}
                      className=""
                    />
                  </FormControl>
                  <FormDescription>
                    We'll send your reservation confirmation to this email
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Guests</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={20}
                      placeholder="2"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      className="w-1/2"
                    />
                  </FormControl>
                  <FormDescription>
                    Please indicate how many people will be dining
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Select the date for your reservation
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Slot</FormLabel>
                  <Select
                    disabled={
                      isLoadingTimeSlots ||
                      !selectedDate ||
                      availableTimeSlots.length === 0
                    }
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[240px]">
                        <SelectValue
                          placeholder={
                            isLoadingTimeSlots
                              ? "Loading..."
                              : !selectedDate
                              ? "Select a date first"
                              : availableTimeSlots.length === 0
                              ? "No available times"
                              : "Select a time"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableTimeSlots.map((timeSlot) => (
                        <SelectItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Available time slots for the selected date
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading || isLoadingTimeSlots}
              className="mt-6"
            >
              {isLoading ? "Submitting..." : "Confirm Reservation"}
            </Button>
          </form>
        </Form>
        <div className="h-full w-full rounded-xl overflow-hidden hidden sm:flex">
          <img
            src={dining}
            alt="people dining"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <Dialog open={confirmationOpen} onOpenChange={setConfirmationOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Reservation Confirmed
            </DialogTitle>
            <DialogDescription>
              Your reservation has been successfully placed.
            </DialogDescription>
          </DialogHeader>

          {submittedData && (
            <div className="py-4 space-y-3">
              <div className="grid grid-cols-3 gap-1">
                <p className="text-muted-foreground">Name:</p>
                <p className="col-span-2 font-medium">{submittedData.name}</p>
              </div>

              <div className="grid grid-cols-3 gap-1">
                <p className="text-muted-foreground">Email:</p>
                <p className="col-span-2">{submittedData.email}</p>
              </div>

              <div className="grid grid-cols-3 gap-1">
                <p className="text-muted-foreground">Guests:</p>
                <p className="col-span-2">
                  {submittedData.guests}{" "}
                  {submittedData.guests === 1 ? "person" : "people"}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1">
                <p className="text-muted-foreground">Date:</p>
                <p className="col-span-2">
                  {format(submittedData.date, "PPPP")}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1">
                <p className="text-muted-foreground">Time:</p>
                <p className="col-span-2">{submittedData.timeSlot}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-muted-foreground">
                  A confirmation email has been sent to your email address.
                </p>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button onClick={() => setConfirmationOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ReservationsPage;
