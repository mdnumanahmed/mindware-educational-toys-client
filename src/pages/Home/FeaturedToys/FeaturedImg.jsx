
const FeaturedImg = ({toy}) => {
  return (
    <div>
      <img
        className="h-auto max-w-full rounded-lg cursor-pointer"
        src={toy.photo}
        alt={toy.toy_name}
      />
    </div>
  );
};

export default FeaturedImg;
