import React, { useState } from 'react';

const MenuVille = () => {
  const [budget, setBudget] = useState(100);

  return (
    <div className="p-10 text-white">
      <h1 className="text-center text-4xl font-bold mb-6">NOME VILLA</h1>
      
      <div className="bg-white text-black p-6 rounded-md">
        <div className="mb-4">
          <h2 className="text-2xl mb-2">Numero Persone</h2>
          <div className="flex flex-wrap gap-4">
            {['0 - 50', '51 - 100', '101 - 200', '200+'].map(range => (
              <label key={range} className="flex items-center">
                <input type="radio" name="number-of-people" className="mr-2" />
                {range}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl mb-2">Budget</h2>
          <input
            type="number"
            value={budget}
            // onChange={(e) => setBudget(e.target.value)}
            className="border p-2 w-20 text-center"
          /> €
        </div>

        {['Antipasti', 'Primi', 'Secondi', 'Dolci'].map((section) => (
          <div key={section} className="mb-6">
            <h2 className="text-2xl mb-2">{section}</h2>
            <ul>
              {getDishes(section).map(dish => (
                <li key={dish} className="flex justify-between items-center mb-2">
                  <span>{dish}</span>
                  <input type="checkbox" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDishes = (section:any) => {
  switch(section) {
    case 'Antipasti':
      return ['Carpaccio di Manzo Balsamico', 'Tartare di Salmone e Avocado', 'Crostini con Pate d\'Anatra', 'Insalata di Mare Limoncello', 'Involtini di Melanzane Ricotta'];
    case 'Primi':
      return ['Risotto Nero ai Frutti di Mare', 'Tagliolini Tartufo e Panna', 'Gnocchi Spinaci e Ricotta Burro Nocciola', 'Ravioli Zucca e Amaretti in Salsa di Salvia', 'Linguine Vongole e Zafferano'];
    case 'Secondi':
      return ['Filetto di Manzo al Barolo', 'Branzino al Limone e Rosmarino', 'Cosciotto d\'Agnello alle Erbe', 'Petto di Pollo al Marsala', 'Salmone Grigliato alla Senape'];
    case 'Dolci':
      return ['Tiramisù al Cioccolato Fondente', 'Panna Cotta Frutti di Bosco', 'Cannolo Siciliano al Pistacchio', 'Torta Caprese all\'Arancia', 'Semifreddo al Torrone'];
    default:
      return [];
  }
};

export default MenuVille;
