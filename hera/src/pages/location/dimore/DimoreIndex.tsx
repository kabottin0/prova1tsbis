import { Card, Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IDimore } from "../../../utils/LocationInterface";

const DimoreIndex = () => {
  const [dimore, setDimore] = useState<IDimore[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const dimorePerPage = 10; 

  useEffect(() => {
    const fetchDimore = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dimore');
        let dimoreData = response.data;
        dimoreData = dimoreData.sort((a: IDimore, b: IDimore) => (b.like || 0) - (a.like || 0));
        setDimore(dimoreData);
      } catch (error) {
        console.error('Error fetching dimore:', error);
      }
    };
  
    fetchDimore();
  }, []);

  const indexOfLastDimora = currentPage * dimorePerPage;
  const indexOfFirstDimora = indexOfLastDimora - dimorePerPage;
  const currentDimore = dimore.slice(indexOfFirstDimora, indexOfLastDimora); 

  return (
    <>
      <div>
        <h1>Dimore in lista by mi piace</h1>
        {currentDimore.map((dimora, index) => (
          <div className="p-2 grid gap-4 grid-cols-2" key={dimora._id}>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mr-4">
                {index + 1 + indexOfFirstDimora}
              </div>
              <Card className="max-w-sm" imgSrc={dimora?.imgCover} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {dimora?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {dimora.shortDescription}
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
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{dimora?.like || 0}</p>
              </Rating>
              <a href={`/dimore/${dimora?.name}`}>
                <h3>Clicca sulla dimora scelta</h3>
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

export default DimoreIndex;
