import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    try {
      const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'google-search1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
      },
    });

    const data = await res.json();
    console.log('Data', [data]);

    setResults(data);
    setLoading(false);
    } 
    catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
