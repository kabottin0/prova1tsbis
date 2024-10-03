import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <>
    <div className="flex justify-center pt-8">
        <div className="w-6/12 h-1 bg-white opacity-50 transform rotate-1"></div>
      </div>


    <div className="py-4 flex">
        <div className="text-center w-3/12"></div>
        <div className="w-6/12 ">
          <div className="p-8 flex justify-between items-center">
            <div>
              <h2 className="text-white text-lg font-bold">TALK TO US</h2>
              <p className="text-white mt-2">Numero di telefono aziendale</p>
              <p className="text-white">+76 209 1092 4095</p>
              <p className="text-white italic mt-2">email aziendale</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Collegamento facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Collegamento instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center w-3/12"></div>
      </div>
    </>
  )
}


export default Footer
