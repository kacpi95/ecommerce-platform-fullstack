import { useContext } from 'react';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { CURRENCY_SIGN, CURRENCIES } from '../../constants/currencies';

export function Price({ product }) {
  const [currency] = useContext(CurrencyContext);
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {CURRENCY_SIGN[currency]}
    </>
  );
}
