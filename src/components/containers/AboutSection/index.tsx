import founder1 from "../../../assets/founders1.jpg";
import founder2 from "../../../assets/founders2.jpg";

const AboutSection = () => {
  return (
    <section className="mt-10 container mx-auto px-4 flex items-center justify-between gap-10">
      <div className="sm:w-[50%] w-full flex flex-col sm:gap-10 gap-6">
        <div>
          <h2 className="scroll-m-20 sm:text-3xl text-2xl font-extrabold tracking-tight lg:text-4xl text-yellow">
            About Little Lemon Restaurant
          </h2>
          {/* <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-green">
            Chicago
          </h4> */}
        </div>
        <p className="">
          Little Lemon is a cozy Mediterranean-inspired restaurant in the heart
          of Chicago. We blend fresh, vibrant ingredients with traditional
          recipes to create unforgettable dishes. Join us for a warm, welcoming
          dining experience that feels like home.
        </p>
      </div>
      <div className="h-96 w-[45%] relative hidden sm:block">
        <div className="h-[80%] aspect-square rounded-xl overflow-hidden absolute right-0 top-0 border-2 border-[#ffffff99]">
          <img
            src={founder1}
            alt="Little Lemon Founders"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[80%] aspect-square rounded-xl overflow-hidden absolute left-0 bottom-0 drop-shadow-md border-2 border-[#ffffff99]">
          <img
            src={founder2}
            alt="Little Lemon Founders"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
