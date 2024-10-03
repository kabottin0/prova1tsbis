import axios from 'axios';
export const fetchAllData = async () => {
    try {
      const [villeResponse, saleResponse, dimoreResponse, cateringResponse] = await Promise.all([
        axios.get('http://localhost:5000/ville'),
        axios.get('http://localhost:5000/sale'),
        axios.get('http://localhost:5000/dimore'),
        axios.get('http://localhost:5000/catering')
      ]);
      
      return {
        ville: villeResponse.data,
        sale: saleResponse.data,
        dimore: dimoreResponse.data,
        catering: cateringResponse.data
      };
    } catch (error) {
      console.error('There was an error fetching the data!', error);
      throw error; // Puoi rilanciare l'errore se vuoi gestirlo altrove
    }
  };