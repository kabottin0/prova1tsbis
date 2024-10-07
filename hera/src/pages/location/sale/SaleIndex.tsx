import { Card, Rating } from "flowbite-react";
import image1 from "../../ammi.png";
import { useEffect, useState } from "react";
import { ISale } from "../../../utils/LocationInterface";
import axios from "axios";


const SaleIndex = () => {
  const [sale, setSale] = useState<ISale[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const salePerPage = 10; 

  useEffect(() => {
    const fetchSale = async () => {
      try {
        const response = await axios.get('http://localhost:5000/sale');
        let saleData = response.data;
        saleData = saleData.sort((a: ISale, b: ISale) => (b.like || 0) - (a.like || 0));
        setSale(saleData);
      } catch (error) {
        console.error('Error fetching ville:', error);
      }
    };
  
    fetchSale();
  }, []);

  const indexOfLastSale= currentPage * salePerPage;
  const indexOfFirstSale = indexOfLastSale - salePerPage;
  const currentSale = sale.slice(indexOfFirstSale, indexOfLastSale); 

  return (
    <>
      <div>
        <h1>Ville in lista by mi piace</h1>
        {currentSale.map((sala, index) => (
          <div className="p-2 grid gap-4 grid-cols-2" key={sala?._id}>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mr-4">
                {index + 1 + indexOfFirstSale}
              </div>
              <Card className="max-w-sm" imgSrc={sala?.imgCover} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {sala?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {sala?.shortDescription}
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
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{sala?.like || 0}</p>
              </Rating>
              <a href={`/sale/${sala?.name}`}>
                <h3>Clicca sulla villa scelta</h3>
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

export default SaleIndex;
