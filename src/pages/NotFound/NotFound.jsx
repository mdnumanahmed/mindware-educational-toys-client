
import notFound from "../../assets/not-found.gif";
import { Link, useRouteError } from "react-router-dom";
import { Button } from "flowbite-react";

const NotFound = () => {
  const { error, status, statusText } = useRouteError();
  console.log(error);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <img src={notFound} alt="" />
        <div className="text-center mt-5">
          <p className="text-4xl font-bold text-red-600">
            {error && (
              <>
                {status} {statusText}
              </>
            )}
          </p>
          <p className="text-xl font-bold text-red-600 my-4">{error && error.message}</p>
          <Link to='/' ><Button className="block mx-auto">Go to Homepage</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
