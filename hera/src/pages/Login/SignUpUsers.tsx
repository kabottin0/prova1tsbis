import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ISubmit, IUSers } from '../../utils/LocationInterface'; 
import axios from 'axios';

const SignUpUsers = () => {
  const [formData, setFormData] = useState<IUSers>({
    name: '',
    surname: '',
    password: '',
    email: '',
    phone: '',
  });

  const [confirmPassword, setConfirmPassword] = useState(''); // Stato per la conferma della password
  const [passwordError, setPasswordError] = useState(''); // Stato per gestire errori di password
  const [passwordValid, setPasswordValid] = useState(true); // Stato per la validità della password

  // Funzione per gestire il cambiamento degli input testuali
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    // Reset dell'errore di password quando l'input cambia
    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
      setPasswordValid(true);
    }
  };

  // Funzione per gestire la conferma della password
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmPassword(value);

    // Controllo se la password e la conferma corrispondono
    if (value !== formData.password) {
      setPasswordError('Le password non corrispondono');
    } else {
      setPasswordError('');
    }
  };

  // Funzione per validare la password
  const validatePassword = (password: string) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Almeno una maiuscola, un numero, una lettera e minimo 8 caratteri
    return passwordPattern.test(password);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validazione della password
    if (!validatePassword(formData.password)) {
      setPasswordError('La password deve contenere almeno 8 caratteri, una maiuscola, un numero e una lettera.');
      setPasswordValid(false);
      return;
    }

    // Se ci sono errori, non procedere con l'invio
    if (passwordError) {
      return;
    }

    const completeFormData = {
      ...formData,
    };

    try {
      const response = await axios.post('http://localhost:5000/users', completeFormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Risposta dal server:', response.data);
      // Gestisci la risposta dal server qui
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>SignUp Users</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Nome " 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="surname" 
            placeholder="Cognome" 
            value={formData.surname} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          <input 
            type="password" 
            name="confirmPassword" // Nuovo campo per confermare la password
            placeholder="Conferma Password" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>} {/* Messaggio di errore per la password */}

          <input 
            type="tel" 
            name="phone" 
            placeholder="Numero di Telefono" 
            value={formData.phone} 
            onChange={handleChange} 
          />

          <button type="submit" className="submit-btn">SignUp / Registrati</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpUsers;
