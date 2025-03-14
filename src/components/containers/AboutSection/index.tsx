import founder1 from "../../../assets/founders1.jpg";
import founder2 from "../../../assets/founders2.jpg";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className="mt-10 container mx-auto flex items-center justify-between gap-10">
      <div className="w-[50%] flex flex-col gap-10">
        <div>
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-[#f4ce14]">
            Little Lemon Restaurant
          </h2>
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-[#495e57]">
            Chicago
          </h4>
        </div>
        <p className="">
          Little Lemon is a cozy Mediterranean-inspired restaurant in the heart
          of Chicago. We blend fresh, vibrant ingredients with traditional
          recipes to create unforgettable dishes. Join us for a warm, welcoming
          dining experience that feels like home.
        </p>
      </div>
      <div className="h-96 w-[45%] relative">
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
