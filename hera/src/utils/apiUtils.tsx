import { useState, useEffect } from 'react';
import axios from 'axios';
import { ICatering, IDimore, ISale, IUSers, IVille } from './LocationInterface';

export const useFetchData = () => {
  const [ville, setVille] = useState<IVille[]>([]);
  const [sale, setSale] = useState<ISale[]>([]);
  const [dimore, setDimore] = useState<IDimore[]>([]);
  const [catering, setCatering] = useState<ICatering[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    try {
      const [villeResponse, saleResponse, dimoreResponse, cateringResponse] = await Promise.all([
        axios.get('http://localhost:5000/ville'),
        axios.get('http://localhost:5000/sale'),
        axios.get('http://localhost:5000/dimore'),
        axios.get('http://localhost:5000/catering')
      ]);

      setVille(villeResponse.data);
      setSale(saleResponse.data);
      setDimore(dimoreResponse.data);
      setCatering(cateringResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return { ville, sale, dimore, catering, loading, error };
};


export const useFetchUsers = () => {
  const [users, setUsers] = useState<IUSers[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAllData = async () => {
    try {
      const [usersResponse] = await Promise.all([
        axios.get('http://localhost:5000/users'),
      
      ]);

      setUsers(usersResponse.data);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return { users, loading, error };
}