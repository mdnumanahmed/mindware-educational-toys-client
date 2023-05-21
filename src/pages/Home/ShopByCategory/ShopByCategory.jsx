import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryToy from "./CategoryToy";

const ShopByCategory = () => {
  const [categoryToys, setCategoryToys] = useState([]);
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/categorizedToy/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryToys(data);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-blue-50">
      <div className="py-20 container mx-auto">
        <div className="section-header text-center">
          <p className="font-bold mb-3">Choose your favorite toys</p>
          <h2 className="text-5xl font-bold text-[#ff007a] mb-7">
            Shop By Category
          </h2>
        </div>

        <Tabs>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <TabList>
              <Tab>
                <button
                  onClick={() => handleTabClick("all")}
                  type="button"
                  className={`text-blue-700 hover:text-white hover:bg-blue-700 ${
                    activeTab === "all"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-900"
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800`}
                >
                  All Toys
                </button>
              </Tab>
              <Tab>
                <button
                  onClick={() => handleTabClick("Math Toys")}
                  type="button"
                  className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 ${
                    activeTab === "Math Toys"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-900"
                  } focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
                >
                  Math Toys
                </button>
              </Tab>
              <Tab>
                <button
                  onClick={() => handleTabClick("Language Toys")}
                  type="button"
                  className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 ${
                    activeTab === "Language Toys"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-900"
                  } focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
                >
                  Language Toys
                </button>
              </Tab>
              <Tab>
                <button
                  onClick={() => handleTabClick("Science Toys")}
                  type="button"
                  className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 ${
                    activeTab === "Science Toys"
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-900"
                  } focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
                >
                  Science Toys
                </button>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categoryToys.map((toy) => (
                  <CategoryToy key={toy._id} toy={toy} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categoryToys.map((toy) => (
                  <CategoryToy key={toy._id} toy={toy} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categoryToys.map((toy) => (
                  <CategoryToy key={toy._id} toy={toy} />
                ))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categoryToys.map((toy) => (
                  <CategoryToy key={toy._id} toy={toy} />
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
