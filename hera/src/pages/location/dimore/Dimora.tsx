import { useParams } from 'react-router-dom';
import { useFetchData } from '../../../utils/apiUtils';
import { IDimore } from '../../../utils/LocationInterface';
import { useEffect, useState } from 'react';

const Dimora = () => {
  const { dimoreid } = useParams()
  const { dimore, loading, error } = useFetchData(); 
  const [dimora, setDimora] = useState<IDimore | null>(null); 
  
  useEffect(() => {
    if (dimore.length > 0) {
      const selectedDimora = dimore.find((d) => d.name === dimoreid); 
      setDimora(selectedDimora || null); 
    }
  }, [dimore, dimoreid]); 
  
 
  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-3xl font-bold"> Dimora {dimora?.name}</h2>
        </div>
        <div className="mb-4">
          <p>{dimora?.shortDescription}</p>
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
          <p>{dimora?.longDescription}</p>
        </div>
        <a href={`/menu/dimora/${dimoreid}`} className="text-blue-500 hover:underline">
          <h3>Personalizza il tuo menù</h3>
        </a>
      </div>
    </>
  );
}

export default Dimora;
