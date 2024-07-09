import { Card, Rating } from "flowbite-react";
import image1 from "../../ammi.png";

const weddings = [
  { id: 1, name: 'NOME VILLA', rating: 4 },
  { id: 2, name: 'NOME VILLA', rating: 5 },
  { id: 3, name: 'NOME VILLA', rating: 3 },
  { id: 4, name: 'NOME VILLA', rating: 4 },
  { id: 5, name: 'NOME VILLA', rating: 2 },
];

const StarRating = ({ rating }: any) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} className={`h-5 w-5 mt-4 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.232 3.775a1 1 0 00.95.691h3.973c.969 0 1.372 1.24.588 1.81l-3.21 2.324a1 1 0 00-.364 1.118l1.232 3.775c.3.921-.755 1.688-1.54 1.118L10 13.617l-3.21 2.324c-.784.57-1.84-.197-1.54-1.118l1.232-3.775a1 1 0 00-.364-1.118L2.91 9.203c-.784-.57-.381-1.81.588-1.81h3.973a1 1 0 00.95-.691l1.232-3.775z" />
      </svg>
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};


const VilleIndex = () => {

  return (
    <>
      <div className="py-4 flex">
        <div className="text-center w-2/12"></div>
        <div className="text-center w-8/12 ">
          {weddings.map((wedding, index) => (
            <a href={`/ville/${wedding.name}`}>
            <div
              key={wedding.id}
              className="p-4 mb-4 flex hover:bg-white hover:bg-opacity-50 transition duration-300"
            >
              <div className="py-1 px-3 border text-white rounded-full absolute" style={{backgroundColor: '#D4AF37'}}>{index+1}</div>
              <div className="flex-shrink-0 mr-4 w-1/2">
                <img
                  src="https://via.placeholder.com/300x100"
                  alt="Wedding"
                  className="rounded-md w-full object-cover"
                />
              </div>
              <div className="w-1/2">
              <StarRating rating={wedding.rating} />

                <div className="flex text-left pt-4 items-center justify-between">
                  <div className="font-bold text-xl text-white">
                    {wedding.name}
                  </div>
                </div>
                <p className="text-white text-left">
                  CFVGKBNL BN CBNJKL JNKML JNKML H BNKML HBJNK HBJNK H BJNk H BJN KBN
                  ...
                </p>
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center w-2/12"></div>
    </>
  );
};

export default VilleIndex;
