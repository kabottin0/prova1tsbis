import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { ISubmit } from '../../utils/LocationInterface'; 
import axios from 'axios';

const SignUpLocation = () => {
  const [formData, setFormData] = useState<ISubmit>({
    name: '',
    address: '',
    email: '',
    password: '',
    phone: '',
    vatNumber: '',
    imgCover: '', 
    shortDescription: '', 
    longDescription: '', 
     });
  const [path, setPath] = useState('')

  const pathLocation: { [key: string]: string } = { 
    'Sala ricevimenti': 'http://localhost:5000/sale',
    'Villa ricevimenti': 'http://localhost:5000/ville',
    'Dimora nobiliare': 'http://localhost:5000/dimore',
    'Catering': 'http://localhost:5000/catering',
  };
  const [typeLocation, setTypeLocation] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const [passwordValid, setPasswordValid] = useState(true); 


  // Funzione per gestire il cambiamento degli input testuali
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    if (name === 'password' || name === 'confirmPassword') {
        setPasswordError('');
        setPasswordValid(true);
      }
  };
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

  const validatePassword = (password: string) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
  };

  // Funzione per gestire il cambiamento dei radio button
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTypeLocation(value);
};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     if (!validatePassword(formData.password)) {
      setPasswordError('La password deve contenere almeno 8 caratteri, una maiuscola, un numero e una lettera.');
      setPasswordValid(false);
      return;
    }
    if (passwordError) {
      return;
    }

    const completeFormData = {
      ...formData,
    };
    try {
      const response = await axios.post(path, completeFormData, {
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

  useEffect(() => {
    if (typeLocation) {
      setPath(pathLocation[typeLocation]);
    }
  }, [typeLocation]); 

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>SignUp Location</h1>
        <form onSubmit={handleSubmit}>
          <h3>Che tipo di struttura sei?</h3>
          <div>
            <label>
              <input 
                type="radio" 
                name="tipoStruttura" 
                value="Sala ricevimenti" 
                checked={typeLocation === 'Sala ricevimenti'}
                onChange={handleRadioChange}
              />
              Sala ricevimenti
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="tipoStruttura" 
                value="Villa ricevimenti" 
                checked={typeLocation === 'Villa ricevimenti'}
                onChange={handleRadioChange}
              />
              Villa ricevimenti
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="tipoStruttura" 
                value="Dimora nobiliare" 
                checked={typeLocation === 'Dimora nobiliare'}
                onChange={handleRadioChange}
              />
              Dimora nobiliare
            </label>
          </div>
          <div>
            <label>
              <input 
                type="radio" 
                name="tipoStruttura" 
                value="Catering" 
                checked={typeLocation === 'Catering'}
                onChange={handleRadioChange}
              />
              Catering
            </label>
          </div>

          <input 
            type="text" 
            name="name" 
            placeholder="Nome Location" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="address" 
            placeholder="Indirizzo Location" 
            value={formData.address} 
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
          <input 
            type="text" 
            name="vatNumber" 
            placeholder="Partita IVA" 
            value={formData.vatNumber} 
            onChange={handleChange} 
          />
         

          <button type="submit" className="submit-btn">SignUp / Registrati</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpLocation;
