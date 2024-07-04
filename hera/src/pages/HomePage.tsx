import { Carousel } from 'flowbite-react';
import image1 from "../assets/ammi.png";
const HomePage = () => {
  return (
    <>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <label>Top location</label>
        <Carousel>
          <img src={image1} alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
      <div className='mt-6'>
        <label>Location</label>
      </div>
      {/* inserire immagine dentro i cerchi */}
      <div className="bg-gray-400 p-2 grid gap-2 grid-cols-4">
        <div className="rounded-full h-16 w-16 flex bg-teal-400 m-6">
          <a href='/ville' className=' m-4'>
            <h1>Ville</h1>
          </a>
        </div>
        <div className="rounded-full h-16 w-16 flex bg-teal-400 m-6">
          <a href='/sale' className=' m-4'>
            <h1>Sale</h1>
          </a>
        </div>
        <div className="rounded-full h-16 w-16 flex bg-teal-400 m-6">
          
          <a href='/dimore' className=' m-4'>
            <h1>Dimore</h1>
          </a>
        </div>
        <div className="rounded-full h-16 w-16 flex bg-teal-400 m-6">
          <a href='/catering' className=' m-4'>
            <h1>Catering</h1>
          </a>
        </div>
      </div>
      <footer>
        {/* inserire info  */}
        <div>footer</div>
      </footer>
    </>
  );
};


export default HomePage;

