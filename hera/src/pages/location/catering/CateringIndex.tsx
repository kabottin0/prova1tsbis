import { Card, Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ICatering } from "../../../utils/LocationInterface";

const CateringIndex = () => {
  const [catering, setCatering] = useState<ICatering[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const cateringPerPage = 10; 

  useEffect(() => {
    const fetchCatering = async () => {
      try {
        const response = await axios.get('http://localhost:5000/catering');
        let cateringData = response.data;
        cateringData = cateringData.sort((a: ICatering, b: ICatering) => (b.like || 0) - (a.like || 0));
        setCatering(cateringData);
      } catch (error) {
        console.error('Error fetching catering:', error);
      }
    };
  
    fetchCatering();
  }, []);

  const indexOfLastCatering = currentPage * cateringPerPage;
  const indexOfFirstCatering = indexOfLastCatering - cateringPerPage;
  const currentCatering = catering.slice(indexOfFirstCatering, indexOfLastCatering); 

  return (
    <>
      <div>
        <h1>Catering in lista by mi piace</h1>
        {currentCatering.map((cateringItem, index) => (
          <div className="p-2 grid gap-4 grid-cols-2" key={cateringItem._id}>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mr-4">
                {index + 1 + indexOfFirstCatering}
              </div>
              <Card className="max-w-sm" imgSrc={cateringItem?.imgCover} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {cateringItem?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {cateringItem.shortDescription}
                </p>
              </Card>
            </div>
            <div>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{cateringItem?.like || 0}</p>
              </Rating>
              <a href={`/catering/${cateringItem?.name}`}>
                <h3>Clicca sul catering scelto</h3>
              </a>
            </div>
          </div>
        ))}

        {/* Paginazione */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          >
            Pagina 1
          </button>
          <button
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className={`px-4 py-2 mx-1 border ${currentPage === 2 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          >
            Pagina 2
          </button>
        </div>
      </div>
    </>
  );
};

export default CateringIndex;
