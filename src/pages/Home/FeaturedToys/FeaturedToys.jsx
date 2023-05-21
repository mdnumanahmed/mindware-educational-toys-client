import { useEffect, useState } from "react";
import FeaturedImg from "./FeaturedImg";

const FeaturedToys = () => {
  const [toys, setToys] = useState([])
  const [imgSrc, setImgSrc] = useState(
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  );

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleImgSrc = (event) => {
    const imageSrc = event.target.getAttribute('src');
    console.log(imageSrc);
    setImgSrc(imageSrc)
  };
  return (
    <div className="py-20 container mx-auto">
      <div className="section-header text-center">
        <p className="font-bold mb-3">Explore Popular Toys</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">Our Featured Toys</h2>
      </div>
      <div className="grid gap-4">
        <div data-aos="slide-up" data-aos-easing="ease-in" data-aos-duration="600" data-aos-delay="50">
          <img className="h-auto w-full rounded-lg" src={imgSrc} alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" onClick={handleImgSrc}>
          {
            toys.slice(0,5).map(toy => <FeaturedImg key={toy._id} toy={toy} />)
            
          }          
        </div>
      </div>
    </div>
  );
};

export default FeaturedToys;
