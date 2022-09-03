import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Coin from "./Coin"
import './App.css';
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import DataGrid from '@mui/x-data-grid'
import Header from './components/Header';

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
    let cryptoPrice = document.getElementById('crypto-price');
    let lastPrice: string | null = null;
  
    ws.onmessage = (event) => {
    let cryptoObject = JSON.parse(event.data);
    cryptoPrice!.innerText = parseFloat(cryptoObject.p).toFixed(2);
    let price = parseFloat(cryptoObject.p).toFixed(2);
    
    cryptoPrice!.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';
    lastPrice = price;
    }

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleUIResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handleUIResize)
  }, [])
  return size;
}


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


//The CoinResponse interface variable names below (name, current_price etc) need to match 
interface CoinResponse {
  name: string
  current_price: any
  image: any
  market_cap_rank: any
  market_cap: any
  price_change_percentage_24h: number
}


const App = () => {
  const [coins, setCoins] = useState<CoinResponse[]>([])
  const [search, setSearch] = useState("")
  
  
  useEffect(() => {
    axios
    .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=nzd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
    .then (res =>{
      setCoins(res.data);
      console.log(res.data)
    })
    .catch(error => console.log(error));
  }, []); //<- The empty array means we want the useEffect to render one time

  const handleChange = (e:any) => {
    setSearch(e.target.value)
  }

  const filterCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

 const[height, width] = useWindowSize();


  return (
    <div>
      height: {height}, width: {width}
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <div className = "coin-search">
        <Header>This is our story header!</Header>
        <Typography variant = "h2" align ="center"> Cryptocurrency price tracker</Typography>
        <Typography variant = "h4" align="center"> Search Crypto </Typography>
        <form>
          <TextField 
          id="filled-basic" 
          label="Enter Crypto Name" 
          variant="outlined" 
          color = "secondary"
          onChange = {handleChange}
          placeholder = "e.g Bitcoin"
          />
          
        </form>
      </div> 

    

      {filterCoins.map((coin, key) => {return <Coin 
      key = {key} 
      name = {coin.name} 
      price = {coin.current_price} 
      image = {coin.image} 
      market_cap_rank = {coin.market_cap_rank}
      market_cap = {coin.market_cap}
      price_change= {coin.price_change_percentage_24h}
      />})}
      </ThemeProvider>
    </div>
  );

}

export default App