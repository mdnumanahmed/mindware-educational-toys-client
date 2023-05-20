import { Accordion } from "flowbite-react";
import { createRef } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Blogs = () => {
  const ref = createRef();
  return (
    <div className="container mx-auto" ref={ref}>
      <Accordion arrowIcon={FaRegArrowAltCircleDown}>
        <Accordion.Panel>
          <Accordion.Title>
            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              


            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            2. Compare SQL and NoSQL databases?
          </Accordion.Title>
          <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
              ----Express.js-----
            </p>

            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                It is used to build web-apps using approaches and principles of
                Node.js.
              </li>
              <li>It is built on Node.js.</li>
              <li>Framework based on Node.js.</li>
              <li>It requires less coding time.</li>
              <li>Written in:JavaScript</li>
            </ul>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              -----Node.js----
            </p>

            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                It is used to build web-apps using approaches and principles of
                Node.js.
              </li>
              <li>It is built on Google’s V8 engine.</li>
              <li>
                Run-time platform or environment designed for server-side
                execution of JavaScript.
              </li>
              <li>It requires more coding time.</li>
              <li>Written in:C, C++, JavaScript</li>
            </ul>
            
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            3. What is express js? What is Nest JS?
          </Accordion.Title>
          <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
             



             </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            4. What is MongoDB aggregate and how does it work
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              

            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>      
    </div>
  );
};

export default Blogs;
