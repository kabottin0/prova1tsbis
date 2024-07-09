import { useState } from "react";

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleAnswer = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <div className="w-3/12  mr-2 p-1 bg-white">
              <img src="https://via.placeholder.com/150" alt="Immagine 1" className="w-full" />
              <p> nome villa 1</p>
            </div>
            <div className="w-3/12  mx-2 p-1 bg-white">
              <img src="https://via.placeholder.com/150" alt="Immagine 1" className="w-full" />
              <p> nome sala 1</p>

            </div>
            <div className="w-3/12  mx-2 p-1 bg-white">
              <img src="https://via.placeholder.com/150" alt="Immagine 1" className="w-full" />
              <p> nome dimora 1</p>

            </div>
            <div className="w-3/12 pb-2 ml-2 p-1 bg-white">
              <img src="https://via.placeholder.com/150" alt="Immagine 1" className="w-full" />
              <p> nome catering 1</p>

            </div>
          </div>
        </div>
        <div className="text-center w-3/12"></div>
      </div>

      <div className="flex justify-center pt-8">
        <div className="w-6/12 h-1 bg-white opacity-50 transform rotate-1"></div>
      </div>
      <div className="w-full pt-8">
        <img src="https://via.placeholder.com/1920x600" alt="Immagine Rettangolare" className="w-full h-auto" />
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

      <div className="max-w-4xl mx-auto my-8 p-4 bg-white rounded-lg">
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
      </div>

    </>
  );
};


export default HomePage;

