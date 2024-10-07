import { Card, Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IVille } from "../../../utils/LocationInterface";

const VilleIndex = () => {
  const [ville, setVille] = useState<IVille[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // Stato per la pagina corrente
  const villePerPage = 10; // Ville per pagina (10 ville)

  useEffect(() => {
    const fetchVille = async () => {
      try {
        const response = await axios.get('http://localhost:5000/ville');
        let villeData = response.data;
        villeData = villeData.sort((a: IVille, b: IVille) => (b.like || 0) - (a.like || 0));
        setVille(villeData);
      } catch (error) {
        console.error('Error fetching ville:', error);
      }
    };
  
    fetchVille();
  }, []);

  const indexOfLastVille = currentPage * villePerPage;
  const indexOfFirstVille = indexOfLastVille - villePerPage;
  const currentVille = ville.slice(indexOfFirstVille, indexOfLastVille); 

  return (
    <>
      <div>
        <h1>Ville in lista by mi piace</h1>
        {currentVille.map((villa, index) => (
          <div className="p-2 grid gap-4 grid-cols-2" key={villa._id}>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mr-4">
                {index + 1 + indexOfFirstVille}
              </div>
              <Card className="max-w-sm" imgSrc={villa?.imgCover} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {villa?.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {villa.shortDescription}
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
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{villa?.like || 0}</p>
              </Rating>
              <a href={`/ville/${villa?.name}`}>
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

export default VilleIndex;
