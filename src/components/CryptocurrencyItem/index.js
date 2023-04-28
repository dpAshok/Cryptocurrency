// Write your JS code here
import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {eachCurrency} = this.props
    const {currencyLogo, currencyName, usdValue, euroValue} = eachCurrency
    return (
      <li className="listItem">
        <div className="coinTypeContainer">
          <img src={currencyLogo} alt={currencyName} className="logo" />
          <p>{currencyName}</p>
        </div>
        <div className="moneyContainer">
          <p className="usd">{usdValue}</p>
          <p className="euro">{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem
