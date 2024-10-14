interface CurrencyOption {
  code: string;
  name: string;
}

export interface CurrencyProps {
  title: string;
  currencies: CurrencyOption[];
  currency: string;
  setCurrency: (currency: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
}

export interface Swap {
  swapCurrencies: () => void;
}

