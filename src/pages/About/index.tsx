import PageTitle from "@/components/commons/PageTitle";

import founder1 from "../../assets/founders1.jpg";

const AboutPage = () => {
  return (
    <section className="container mx-auto px-4  my-10">
      <PageTitle title="About" className="mb-4" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="">
          <img
            src={founder1}
            alt="About little lemon"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="">
            Nestled in the vibrant streets of Chicago, Little Lemon is a beloved
            Mediterranean-inspired restaurant that brings the flavors of the
            Mediterranean to your table. Founded with a passion for fresh,
            high-quality ingredients, we craft every dish with care, blending
            traditional recipes with modern twists. Our menu features a variety
            of zesty, flavorful options, from our signature Lemon Basil Linguine
            to the hearty Chicago Bourbon Strip steak and the refreshing
            Athenian Delight salad.
            <br />
            <br />
            At Little Lemon, we believe dining is more than just a meal—it's an
            experience. Our warm, inviting atmosphere is perfect for family
            dinners, romantic evenings, or lively gatherings with friends. Our
            dedicated team is committed to providing exceptional service,
            ensuring every visit is memorable.
            <br />
            <br />
            Whether you're a local or just passing through, we invite you to
            savor the vibrant tastes of the Mediterranean at Little Lemon. From
            our kitchen to your table, we're proud to share our love for food,
            community, and tradition. Come join us and discover why Little Lemon
            is a cherished gem in Chicago's dining scene.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
