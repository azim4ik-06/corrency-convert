import { useEffect, useState } from "react";
import Box from "./components/Box";
import Currency from "./components/Currency";
import ReverseCurrency from "./components/ReverseCurrency";
import { useFetchCurrencies } from "./lib/useFetchCurrencies";
import { useConvertCurrency } from "./lib/useCovertCurrency";

export default function App() {
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("usd");
  const [toCurrency, setToCurrency] = useState<string>("tjs");

  const { currencies, loading, error } = useFetchCurrencies();

  const { toAmount, setToAmount, convertCurrency } = useConvertCurrency(
    fromAmount,
    fromCurrency,
    toCurrency
  );

  useEffect(() => {
    if (fromAmount > 0 && toCurrency !== "") {
      convertCurrency();
    }
  }, [fromCurrency, toCurrency, fromAmount, convertCurrency]);

  const handleFromCurrencyChange = (currency: string) => {
    if (currency !== toCurrency) {
      setFromCurrency(currency);
    }
  };

  const handleToCurrencyChange = (currency: string) => {
    if (currency !== fromCurrency) {
      setToCurrency(currency);
    }
  };

  const handleAmountChange = (amount: number) => {
    setFromAmount(amount);
    setToAmount(amount > 0 ? toAmount : 0);
  };

  const handleSwapCurrencies = () => {
    const tempCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount);
  };

  if (loading) return <div>Загрузка валют...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center">
      <Box>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <Currency
            setCurrency={handleFromCurrencyChange}
            currency={fromCurrency}
            currencies={currencies}
            title="From"
            amount={fromAmount}
            setAmount={handleAmountChange}
          />
          <ReverseCurrency swapCurrencies={handleSwapCurrencies} />
          <Currency
            setCurrency={handleToCurrencyChange}
            currency={toCurrency}
            currencies={currencies}
            title="To"
            amount={toAmount}
            setAmount={setToAmount}
          />
        </div>
      </Box>
    </div>
  );
}
