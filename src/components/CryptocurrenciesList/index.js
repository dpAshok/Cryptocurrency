// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedCurrency = data.map(eachCurrency => ({
      currencyName: eachCurrency.currency_name,
      currencyLogo: eachCurrency.currency_logo,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
    }))
    // console.log(updatedCurrency)
    this.setState({currencyList: updatedCurrency, isLoading: false})
  }

  renderCurrency() {
    const {currencyList} = this.state
    return (
      <div className="container">
        <h1>Cryptocurrency Tracker</h1>
        {/* <h1>Cryptocurrency Tracker</h1> */}
        <div className="image_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <ul className="currencyListCard">
          <div className="coinType">
            <p>Coin Type</p>
            <div className="money">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          {currencyList.map(eachCurrency => (
            <CryptocurrencyItem
              key={eachCurrency.id}
              eachCurrency={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrency()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
