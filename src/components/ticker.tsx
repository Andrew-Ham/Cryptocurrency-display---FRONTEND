import { TickerTape, CopyrightStyles } from "react-ts-tradingview-widgets";

export const Example = () => {
  const styles: CopyrightStyles = {
    parent: {
      fontSize: "10px",
      color: "grey",
    },

    span: {
      color: "darkblue",
    },
  };
  
  return <TickerTape colorTheme="dark" copyrightStyles={styles} isTransparent = {true} displayMode = {"adaptive"} symbols = {
  [
    {
      "proName": "BINANCE:LUNCBUSD",
      "title": "LUNAC/USD"
    },
    {
      "proName": "BINANCE:ADAUSDT",
      "title": "ADA/USD"
    },
    {
      "proName": "BINANCE:LTCUSDT",
      "title": "LTC/USD"
    },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "BTC/USD"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
      "title": "ETH/USD"
    },
    {
      "proName": "BINANCE:DOGEUSDT",
      "title": "DOGE/USD"
    }
  ]
}   
  />;
};