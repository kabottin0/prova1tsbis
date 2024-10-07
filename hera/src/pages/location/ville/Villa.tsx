// VillaCard.js
import 'tailwindcss/tailwind.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IVille } from '../../../utils/LocationInterface';
import { useFetchData } from '../../../utils/apiUtils';


const Villa = () => {
  const { villeid } = useParams()
  const { ville, loading, error } = useFetchData();
  const [villa, setVilla] = useState<IVille | null>(null);


  useEffect(() => {
    if (ville.length > 0) {
      const selectedVilla = ville.find((v) => v.name === villeid); 
      setVilla(selectedVilla || null); 
    }
  }, [ville, villeid]); 

  

  return (
    <>
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-3xl font-bold"> Villa {villa?.name}</h2>
      </div>
      <div className="mb-4">
        <p>{villa?.shortDescription}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="Descrizione dell'immagine 1" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Descrizione dell'immagine 2" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="Descrizione dell'immagine 3" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="Descrizione dell'immagine 4" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="Descrizione dell'immagine 5" />
        </div>
      </div>
      <div className="mb-4">
        <p>{villa?.longDescription}</p>
      </div>
      <a href={`/menu/villa/${villeid}`} className="text-blue-500 hover:underline">
        <h3>Personalizza il tuo menù</h3>
      </a>
    </div>
  </>
);
};

export default Villa;
