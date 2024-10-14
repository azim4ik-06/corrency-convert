import { useEffect } from "react";
import { CurrencyProps } from "../types/props/script";

export default function Currency({
  title,
  currencies,
  currency,
  setCurrency,
  amount,
  setAmount,
}: CurrencyProps) {

  
  useEffect(() => {
    setAmount(parseFloat(amount.toFixed(2)));
  }, [amount, setAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseFloat(e.target.value);
    setAmount(value !== "" && !isNaN(value) ? value : 0);
  };

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <div className="flex overflow-hidden p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input
            value={amount === 0 ? "" : amount.toString()}
            onChange={handleInputChange}
            type="number"
            step="0.01"
            className="w-full focus:outline-none"
            placeholder={`Amount in ${currency}`}
          />
          <div className="w-[2px] bg-gray-400 h-6"></div>
          <div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full focus:outline-none"
            >
              {currencies.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name} ({code})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
