import { useState } from "react";

const FeaturedToys = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  );

  const handleImgSrc = (event) => {
    const imageSrc = event.target.getAttribute('src');
    console.log(imageSrc);
    setImgSrc(imageSrc)
  };
  return (
    <div className="py-20 container mx-auto">
      <div className="section-header text-center">
        <p className="font-bold mb-3">Explore Popular Toys</p>
        <h2 className="text-5xl font-bold text-[#ff007a] mb-7">Our Featured Toys</h2>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto w-full rounded-lg" src={imgSrc} alt="" />
        </div>
        <div className="grid grid-cols-5 gap-4" onClick={handleImgSrc}>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToys;
