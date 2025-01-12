import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './components/DataTable';
import Filters from './components/Filters';
// import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = 'BiZMxzznguLzvLpotehtUTZqzWuBRTSk';
      const endpoint = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&limit=100&apikey=${API_KEY}`;

      try {
        const response = await axios.get(endpoint);
        console.log('API Response:', response.data);
        setData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="App">
      <h1>AAPL Financial Data</h1>
      <Filters data={data} setFilteredData={setFilteredData} />
      <DataTable data={filteredData} />
    </div>
  );
};

export default App;
