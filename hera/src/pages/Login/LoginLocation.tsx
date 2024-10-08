import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useFetchData } from '../../utils/apiUtils';
import '../../assets/SignUp.css';

const LoginLocation = () => {
  const { ville, sale, dimore, catering, loading, error } = useFetchData();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Funzione per controllare le credenziali
    const checkCredentials = () => {
      const allLocations = [...ville, ...sale, ...dimore, ...catering];

      // Verifica se l'email e la password sono presenti in una delle location
      const isAuthenticated = allLocations.some(location => 
        location.email === email && location.password === password
      );

      if (isAuthenticated) {
        alert('Autenticazione riuscita!');
        // Redirigi o esegui altre azioni dopo l'autenticazione
      } else {
        setAuthError('Email o password non validi.');
      }
    };

    checkCredentials();
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Login location</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={handleChange} 
            required 
          />
          {authError && <p className="error-message">{authError}</p>}
          <button type="submit">Accedi</button>
        </form>
        {loading && <p>Caricamento...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginLocation;
