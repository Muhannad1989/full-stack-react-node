import { useState } from "react";

// get data function from api or database
export const useApi = endpoint => {
  const [productionTable, setProductionTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const callApi = async () => {
    setLoading(true);
    const data = await fetch(endpoint)
      .then(response => response.json())
      .then(item => {
        console.log(item);
        setLoading(false);
        setProductionTable(item);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
    console.log(data);
  };

  return { productionTable, loading, error, callApi };
};
