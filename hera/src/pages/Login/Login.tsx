import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa il hook per la navigazione
import '../../assets/SignUp.css'; // Il file CSS


const Login = () => {
  const navigate = useNavigate(); // Hook per la navigazione

  // Funzione per gestire la navigazione
  const handleNavigation = (path: string) => {
    navigate(path); // Naviga verso la pagina specificata
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>SignUp</h1>
        <p>CHI SEI</p>
        <button 
          type="button" 
          className="user-type-btn" 
          onClick={() => handleNavigation('/login/location')}
        >
          STRUTTURA RICETTIVA
        </button>
        <button 
          type="button" 
          className="user-type-btn" 
          onClick={() => handleNavigation('/login/user')}
        >
          UTENTE
        </button>
      </div>
    </div>
  );
};

export default Login;
