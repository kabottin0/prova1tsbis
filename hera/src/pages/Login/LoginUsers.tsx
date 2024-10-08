import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import '../../assets/SignUp.css';
import { useFetchUsers } from '../../utils/apiUtils';

const LoginUsers = () => {

  const { users, loading, error } = useFetchUsers();
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
      // Verifica se l'email e la password sono presenti tra gli utenti
      const isAuthenticated = users.some(user => 
        user.email === email && user.password === password
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
        <h1>Login utente</h1>
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

export default LoginUsers;
