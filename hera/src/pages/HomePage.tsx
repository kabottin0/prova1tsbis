import axios from "axios";
import { useEffect, useState } from "react";
import { ICatering, IDimore, IImage, ISale, IVille } from "../utils/LocationInterface";
import { useFetchData } from "../utils/apiUtils";

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ville, sale, dimore, catering, loading, error} = useFetchData()
  const [images, setImages] = useState<IImage[]>([]);

  const questions = [
    { question: 'Americano Americano Americano?', answer: 'Risposta per Americano.' },
    { question: 'Cappuccino Cappuccino Cappuccino?', answer: 'Risposta per Cappuccino.' },
    { question: 'Double Espresso Double Espresso?', answer: 'Risposta per Double Espresso.' },
    { question: 'Latte Latte Latte Latte Latte Latte Latte?', answer: 'Risposta per Latte.' },
    { question: 'Macchiato Macchiato Macchiato?', answer: 'Risposta per Macchiato.' },
    { question: 'Mint Chocolate Mint Chocolate Mint?', answer: 'Risposta per Mint Chocolate.' },
    { question: 'Mocha Mocha Mocha Mocha Mocha?', answer: 'Risposta per Mocha.' },
    { question: 'White Mocha White Mocha White Mocha?', answer: 'Risposta per White Mocha.' },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/images');
        const imageFiles = response.data;

        const imagePromises = imageFiles.map(async (file: any) => {
          const signedUrlResponse = await axios.get(`http://localhost:5000/image/${file._id}`);
          return { url: signedUrlResponse.data.url, _id: file._id };
        });

        const imageUrls = await Promise.all(imagePromises);
        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const image = images.length > 0 ? images[0].url : '';

  return (
    <>
      <div className="py-4 flex">
        <div className="text-center w-3/12"></div>
        <div className="text-center w-6/12 ">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl" style={{ borderWidth: 4, borderRadius: 8, borderColor: 'white' }}>TOP LOCATION</h2>
        </div>
        <div className="text-center w-3/12"></div>
      </div>
      <div className="flex">
        <div className="text-center w-3/12"></div>
        <div className="text-center w-6/12 ">
          <div className="flex">
            <div className="w-3/12 mr-2 p-1 bg-white">
              {ville[0] && (
                <a href={`/ville/${ville[0]?.name}`}>
                  {image && <img src={image} alt="Immagine 1" className="w-full" />}
                  <p>{ville[0]?.name}</p>
                </a>
              )}
            </div>
            <div className="w-3/12 mr-2 p-1 bg-white">
              {sale[0] && (
                <a href={`/sale/${sale[0]?.name}`}>
                  {image && <img src={image} alt="Immagine 1" className="w-full" />}
                  <p>{sale[0]?.name}</p>
                </a>
              )}
            </div>
            <div className="w-3/12 mr-2 p-1 bg-white">
              {dimore[0] && (
                <a href={`/dimore/${dimore[0]?.name}`}>
                  {image && <img src={image} alt="Immagine 1" className="w-full" />}
                  <p>{dimore[0]?.name}</p>
                </a>
              )}
            </div>
            <div className="w-3/12 mr-2 p-1 bg-white">
              {catering[0] && (
                <a href={`/catering/${catering[0]?.name}`}>
                  {image && <img src={image} alt="Immagine 1" className="w-full" />}
                  <p>{catering[0]?.name}</p>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="text-center w-3/12"></div>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-6/12 h-1 bg-white opacity-50 transform rotate-1"></div>
      </div>
      <div className="w-full pt-8">
        <p>
          Il nostro sito è la piattaforma ideale per le coppie in cerca della location perfetta per il loro matrimonio o per chiunque stia organizzando un evento speciale. Qui potrai trovare una vasta selezione di strutture ricettive, suddivise in quattro categorie principali: ville per ricevimenti, eleganti sale per banchetti, dimore nobiliari dal fascino storico e servizi di catering professionale. Ogni opzione è accuratamente selezionata per offrirti il massimo della qualità, garantendo che il tuo evento si svolga in un ambiente unico e memorabile.
        </p>
        <p>
          Il nostro sistema di valutazione si basa interamente sulla qualità del servizio offerto dalle strutture, garantendo un'ordinamento meritocratico. Quando accedi a una delle categorie – villa per ricevimenti, sala per banchetti, dimora nobiliare o servizio catering – le strutture vengono elencate in base ai voti ricevuti dagli utenti. Non ci sono posizioni privilegiate a pagamento, ma un ranking trasparente determinato dalle recensioni reali di chi ha già usufruito delle location. Ogni coppia che visita una struttura, sia per un preventivo che per l'evento stesso, riceverà un codice con cui lasciare il proprio voto. In questo modo, solo le strutture con il miglior riscontro da parte degli utenti ottengono un posto nella sezione "Top Location".
        </p>
        <p>
          Gli utenti registrati avranno accesso esclusivo alla sezione dedicata alla personalizzazione del menù, dove potranno creare un’esperienza culinaria su misura per il loro evento. Una volta registrati, sarà possibile selezionare le opzioni proposte dalla location scelta, adattando il menù alle proprie esigenze e preferenze. Questa funzionalità permette alle coppie di avere il pieno controllo sulla scelta dei piatti e di coordinare ogni dettaglio del banchetto in modo semplice e intuitivo, garantendo un servizio perfettamente in linea con i loro desideri.

        </p>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-6/12 h-1 bg-white opacity-50 transform rotate-1"></div>
      </div>

      <div className="flex justify-around items-center pt-8">
        <a href="/ville" className="relative group w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
            <span className="text-white">VILLE</span>
          </div>
          <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-300" style={{ backgroundImage: `url(https://via.placeholder.com/300)` }}></div>
        </a>
        <a href="/Sale" className="relative group w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
            <span className="text-white">SALE</span>
          </div>
          <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-300" style={{ backgroundImage: `url(https://via.placeholder.com/300)` }}></div>
        </a>
        <a href="/dimore" className="relative group w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
            <span className="text-white">DIMORE</span>
          </div>
          <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-300" style={{ backgroundImage: `url(https://via.placeholder.com/300)` }}></div>
        </a>
        <a href="/catering" className="relative group w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center group-hover:bg-opacity-50 transition duration-300">
            <span className="text-white">Catering</span>
          </div>
          <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition duration-300" style={{ backgroundImage: `url(https://via.placeholder.com/300)` }}></div>
        </a>
      </div>

      {/* <div className="max-w-4xl mx-auto my-8 p-4 bg-white rounded-lg">
        <h2 className="text-lg font-bold mb-4" style={{ color: '#D4AF37' }}>Q & A</h2>
        {questions.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center py-2 cursor-pointer" onClick={() => toggleAnswer(index)}>
              <span>{item.question}</span>
              <span className={`transform ${openIndex === index ? 'rotate-180' : ''}`} style={{ color: '#D4AF37' }}>v</span>
            </div>
            {openIndex === index && (
              <div className="py-2">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div> */}

    </>
  );
};

export default HomePage;

