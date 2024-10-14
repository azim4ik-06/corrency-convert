import { useCallback, useState } from "react";
import axios from "axios";
import { urlCurrency } from "../types/url";

export const useConvertCurrency = (
  fromAmount: number,
  fromCurrency: string,
  toCurrency: string
) => {
  const [toAmount, setToAmount] = useState<number>(0);
  const [converting, setConverting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const convertCurrency = useCallback(async () => {
    if (!fromAmount || !fromCurrency || !toCurrency) return;
    setConverting(true);
    setError(null);

    try {
      const res = await axios.get(urlCurrency);
      const rates = res.data.eur;
      const fromRate = rates[fromCurrency.toLowerCase()];
      const toRate = rates[toCurrency.toLowerCase()];

      if (fromRate && toRate) {
        const conversion = (fromAmount * toRate) / fromRate;
        setToAmount(conversion);
      }
    } catch (error) {
      setError("Ошибка при конвертации валют: " + error);
    } finally {
      setConverting(false);
    }
  }, [fromAmount, fromCurrency, toCurrency]);

  return { toAmount, setToAmount, converting, error, convertCurrency };
};
