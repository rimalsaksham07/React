import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://v6.exchangerate-api.com/v6/d74f039db8c5c5656921d45c/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch currency data');
        }
        return res.json();
      })
      .then((res) => {
        // Access the `conversion_rates` property from the API response
        setData(res.conversion_rates);
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, [currency]); // Re-run effect when `currency` changes

  return data;
}

export default useCurrencyInfo;