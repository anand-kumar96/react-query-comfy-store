import { Link } from "react-router-dom";
import hero1 from "../assets/hero5.webp";
import hero2 from "../assets/hero6.webp";
import hero3 from "../assets/hero7.webp";
import hero4 from "../assets/hero8.webp";
import hero5 from "../assets/hero1.webp";
import hero6 from "../assets/hero2.webp";
import hero7 from "../assets/hero3.webp";
import { useEffect, useRef } from "react";

const carouselImages = [hero1,hero2, hero3,hero4,hero5,hero6,hero7];
const Hero = () => {
  const carouselRef = useRef(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const { scrollLeft, offsetWidth, scrollWidth } = carouselRef.current;
      let newPosition = scrollLeft + offsetWidth;
      console.log(newPosition,scrollWidth);
      if (newPosition >= scrollWidth-5) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center pt-4">
      {/*FIRST COLUMN*/}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          Discover a new era of shopping comfort.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Step into a world where shopping becomes an indulgent escape. Discover
          curated comforts, unwind in cozy corners, and join a community built
          on relaxation and style. Experience retail therapy redefined, where
          every visit feels like a warm embrace.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      {/*SECOND COLUMN*/}
      <div className="hidden h-[28rem] xl:h-[30rem] lg:carousel carousel-center p-2 space-x-2 bg-neutral rounded-box" ref={carouselRef}>
        {carouselImages.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
