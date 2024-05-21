import shopping from "./../assets/about.svg";
const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-4 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">
          We love
        </h1>
        <div className="text-primary text-4xl font-bold tracking-wider sm:text-5xl">
          comfy
        </div>
      </div>
      <div className="flex justify-center items-center pt-14">
        <img src={shopping} alt="shopping" className="max-w-xs xl:max-w-sm" />
      </div>
      <p className="mt-6 text-lg leading-7 max-w-3xl mx-auto ">
        Welcome to Comfy Store, where comfort is our specialty. Dive into a
        world of relaxation with our curated selection of furnishings and
        accessories. From irresistibly soft sofas to luxurious blankets, we have
        got you covered. Our stylish loungewear ensures comfort both at home and
        on the go. Let our friendly staff guide you to find your perfect comfort
        oasis. Discover the joy of true relaxation at Comfy Store today.
      </p>
    </>
  );
};

export default About;
