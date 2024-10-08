import { useNavigate } from 'react-router-dom'; 
import '../../assets/SignUp.css'; 

const SignUp = () => {
  const navigate = useNavigate(); 

 
  const handleNavigation = (path: string) => {
    navigate(path); 
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>SignUp</h1>
        <p>CHI SEI</p>
        <button 
          type="button" 
          className="user-type-btn" 
          onClick={() => handleNavigation('/signup/location')}
        >
          STRUTTURA RICETTIVA
        </button>
        <button 
          type="button" 
          className="user-type-btn" 
          onClick={() => handleNavigation('/signup/users')}
        >
          UTENTE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
