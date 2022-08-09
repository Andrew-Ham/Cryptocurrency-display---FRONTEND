import { MarkEmailReadTwoTone, PriceChange } from '@mui/icons-material'
import React from 'react'
import "./Coin.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box } from '@mui/system';

interface CoinProps{
    name: string
    price: number
    image: any
    market_cap_rank : any
    market_cap : any
    price_change : number

}


const Coin = ({
    name, 
    price, 
    image, 
    market_cap_rank,
    market_cap,
    price_change

}

    : CoinProps ) => {
  return (
    <div>
        <div className = "row">
            <div className = "coin">
                <h1>{name}</h1>
                <img src = {image} />
            </div>
            <div className = "coin-data">
                <p>NZD ${price.toLocaleString()}</p>
                <p>Rank {market_cap_rank}</p>
                <p>Market Cap ${market_cap.toLocaleString()}</p>

                {price_change < 0 ? (
                    <p className = "red-percent">{price_change.toFixed(2)}%</p>
                ) : (<p className = "green-percent">{price_change.toFixed(2)}%</p>)}

            </div>
        </div>
    </div>
  )
}

export default Coin