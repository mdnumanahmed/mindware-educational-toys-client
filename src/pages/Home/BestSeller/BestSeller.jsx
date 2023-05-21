import { useEffect, useState } from "react";
import BestToy from "./BestToy";

const BestSeller = () => {
  const [bestToy, setBestToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
      .then((res) => res.json())
      .then((data) => {
        setBestToy(data);
      });
  }, []);

  return (
    <div className="py-20 container mx-auto">
      <div className="section-header text-center">
        <p className="font-bold mb-3">Explore Popular Toys</p>
        <h2 className="text-3xl md:text-5xl font-bold text-[#ff007a] mb-7">
          Our Best Seller Toys
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestToy.slice(0, 8).map((toy) => (
          <BestToy key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
