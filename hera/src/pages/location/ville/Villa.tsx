// VillaCard.js
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Footer from '../../../components/Footer';

const images = [
  'path/to/image1.jpg',
  'path/to/image2.jpg',
  'path/to/image3.jpg',
  'path/to/image4.jpg',
];
const StarRating = ({ rating }: any) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.232 3.775a1 1 0 00.95.691h3.973c.969 0 1.372 1.24.588 1.81l-3.21 2.324a1 1 0 00-.364 1.118l1.232 3.775c.3.921-.755 1.688-1.54 1.118L10 13.617l-3.21 2.324c-.784.57-1.84-.197-1.54-1.118l1.232-3.775a1 1 0 00-.364-1.118L2.91 9.203c-.784-.57-.381-1.81.588-1.81h3.973a1 1 0 00.95-.691l1.232-3.775z" />
      </svg>
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};
const Villa = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="pt-4 flex">
        <div className="text-center w-2/12"></div>
        <div className="text-center w-8/12" style={{ borderWidth: 4, borderRadius: 8, borderBottomWidth: 0, borderColor: 'white' }}>
          <div className="flex justify-center items-center">
            <div className="text-left w-10/12">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">NOME VILLA</h2>
            </div>
            <div className="text-right w-2/12">
              <StarRating rating={2} />
            </div>
          </div>
        </div>
        <div className="text-center w-2/12"></div>
      </div>

      <div className="flex ">
        <div className="text-center w-2/12"></div>
        <div className="text-center w-8/12 bg-white" style={{ borderWidth: 4, borderRadius: 8, borderColor: 'white' }}>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center w-2/12"></div>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-6/12 h-1 bg-white opacity-50 transform rotate-1"></div>
      </div>

      <div className="flex pt-4 ">
        <div className="text-center w-2/12"></div>
        <div className="text-center w-8/12">
          <p className='text-white'>
            L'inizio del vostro viaggio d'amore può iniziare nel migliore dei modi se farete affidamento per il noleggio dell'auto da cerimonia a Fil.Pio Cars, società palermitana, che sarà in grado di eccellere e per il vostro giorno assicurarvi un servizio impeccabile .
            Articoli offerti
            La Fil.Pio Cars è azienda leader nel noleggio con conducente in Sicilia. L'azienda è specializzata nel noleggio con autista di auto di lusso per la vostra cerimonia e nel noleggio con conducente per servizi transfer.
            Tutti gli autisti sono selezionati per la loro discrezione, professionalità,educazione e cortesia. La lussuosa flotta di Fil.Pio Cars sarà pronta a soddisfare la clientela più esigente.
            Altri servizi
            Celerità, puntualità, perfezione ed efficienza contraddistinguono anche gli altri servizi offerti da Fil.Pio Cars,tra cui:
            Servizio di noleggio Limousine
            Servizio di noleggio di auto da rappresentanza
            Transfert per gli aeroporti/ stazioni di treni e porti della Sicilia
            Servizio di noleggio minibus con autista
            Escursioni e tour nelle località più suggestive della meravigliosa Sicilia

            L'inizio del vostro viaggio d'amore può iniziare nel migliore dei modi se farete affidamento per il noleggio dell'auto da cerimonia a Fil.Pio Cars, società palermitana, che sarà in grado di eccellere e per il vostro giorno assicurarvi un servizio impeccabile .
            Articoli offerti
            La Fil.Pio Cars è azienda leader nel noleggio con conducente in Sicilia. L'azienda è specializzata nel noleggio con autista di auto di lusso per la vostra cerimonia e nel noleggio con conducente per servizi transfer.
            Tutti gli autisti sono selezionati per la loro discrezione, professionalità,educazione e cortesia. La lussuosa flotta di Fil.Pio Cars sarà pronta a soddisfare la clientela più esigente.
          </p>
          <a href={`/menu/villa/${1}`}>
            <button className="mt-4 bg-white font-bold py-2 px-14 rounded-lg" style={{ color: '#D4AF37' }}>
              PERSONALIZZA IL TUO MENU
            </button>
          </a>
        </div>
        <div className="text-center w-2/12"></div>
      </div>
    </div>
  );
};

export default Villa;
