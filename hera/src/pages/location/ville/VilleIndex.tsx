import { Card, Rating } from "flowbite-react";
import image1 from "../../ammi.png";

// Esempio di array di dati delle ville
const ville = [
  {
    id: 1,
    title: "nome villa 1",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    imgSrc: image1,
    like: 2,
  },
  {
    id: 2,
    title: "nome villa 2",
    description: "Details about another significant acquisition in the tech industry.",
    imgSrc: image1,
    like: 3,
  },
  // Aggiungi altre ville qui
];

const VilleIndex = () => {
  // Ordina le ville in base al campo 'like' in ordine decrescente
  const sortedVille = ville.sort((a, b) => b.like - a.like);


  return (
    <>
      <div>
        <h1>Ville in lista by mi piace</h1>
        {sortedVille.map((villa, index) => (
          <div className="p-2 grid gap-4 grid-cols-2">
            <div key={villa.id} className="flex items-center mb-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mr-4">{index + 1}</div>
              <Card className="max-w-sm" imgSrc={villa.imgSrc} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {villa.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {villa.description}
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
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
              </Rating>
              <a href={`/ville/${villa.title}`}>
                <h3>Clicca sulla villa scelta</h3>
              </a>
            </div>

          </div>
        ))}
        <p>paginazione</p>
      </div>
    </>
  );
};

export default VilleIndex;
