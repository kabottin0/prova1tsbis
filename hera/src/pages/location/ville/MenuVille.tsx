import { useParams } from 'react-router-dom';

const MenuVille = () => {
  const { locationId } = useParams();
  return (
    <>
      {/* tutto dentro un form per l'invio alla location  
          potranno esserci solo i nomi dei piatti o nome e foto dipende dalla villa se fa le foto al piatto
      */}
      <div>
        <p>Personalizza il tuo menù con la villa {locationId}</p>
      </div>
      <div>
        <input type="text" placeholder='scegli il tuo budget' />
      </div>
      <div>
        <div className="flex m-6">
          <div className="flex items-center mr-4">
            <input
              id="inline-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="inline-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              0-50 pax
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="inline-2-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="inline-2-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              51-100 pax
            </label>
          </div>
          <div className="flex items-center mr-4">
            <input
              id="inline-checked-checkbox"
              type="checkbox"
              checked
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="inline-checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              101-200 pax
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="inline-disabled-checkbox"
              type="checkbox"
              disabled
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="inline-disabled-checkbox" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">
              200+ pax
            </label>
          </div>
        </div>
      </div>
      <div className="p-2 grid gap-4 grid-cols-4">
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Antipasti</h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 1</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 2</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 3</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 4</label>
            </div>
          </li>
        </ul>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Primi</h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 1</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 2</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 3</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 4</label>
            </div>
          </li>
        </ul>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">secondi</h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 1</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 2</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 3</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 4</label>
            </div>
          </li>
        </ul>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">dessert</h3>
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 1</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 2</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">antipasto 3</label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div className="flex items-center ps-3">
              <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Antipasto 4</label>
            </div>
          </li>
        </ul>
        <button> Prenota il tuo appuntamento e scarica il menù </button>
      </div>
    </>
  );
};

export default MenuVille;
