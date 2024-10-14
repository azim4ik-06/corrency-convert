import { useEffect, useState } from "react";
import axios from "axios";
import { urlSity } from "../types/url";


interface CurrencyOption {
  code: string;
  name: string;
}

export const useFetchCurrencies = () => {
  const [currencies, setCurrencies] = useState<CurrencyOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrencies = async () => {
    setLoading(true);
    try {
      const res = await axios.get(urlSity);
      const currencyArray: CurrencyOption[] = Object.entries(res.data).map(
        ([code, name]) => ({
          code,
          name: name as string,
        })
      );
      setCurrencies(currencyArray);
    } catch (error) {
      setError("Ошибка при загрузке валют: " + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return { currencies, loading, error };
};
