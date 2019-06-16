import React, { Component } from 'react';

import AmountInput from './components/amount/Amount';
import CurrencySelect from './components/selector/Selector';
import ExchangeRateInformation from './components/rate/Rate';
import TimeInformation from './components/date/Date';

class App extends Component{
    
  state = {
    currencies: [
      {
        code: 'AUD',
        name: 'Australian dollar'
      },
      {
        code: 'BRL',
        name: 'Brazilian real'
      },
      {
        code: 'BGN',
        name: 'Bulgarian lev'
      },
      {
        code: 'CAD',
        name: 'Canadian dollar'
      },
      {
        code: 'CNY',
        name: 'Chinese yuan renminbi'
      },
      {
        code: 'HRK',
        name: 'Croatian kuna'
      },
      {
        code: 'CZK',
        name: 'Czech koruna'
      },
      {
        code: 'DKK',
        name: 'Danish krone'
      },
      {
        code: 'EUR',
        name: 'European euro'
      },
      {
        code: 'HKD',
        name: 'Hong Kong dollar'
      },
      {
        code: 'HUF',
        name: 'Hungarian forint'
      },
      {
        code: 'ISK',
        name: 'Icelandic krona'
      },
      {
        code: 'INR',
        name: 'Indian rupee'
      },
      {
        code: 'IDR',
        name: 'Indonesian rupiah'
      },
      {
        code: 'ILS',
        name: 'Israeli new shekel'
      },
      {
        code: 'JPY',
        name: 'Japanese yen'
      },
      {
        code: 'MYR',
        name: 'Malysian ringgit'
      },
      {
        code: 'MXN',
        name: 'Mexican peso'
      },
      {
        code: 'NZD',
        name: 'New Zealand dollar'
      },
      {
        code: 'NOK',
        name: 'Norwegian krone'
      },
      {
        code: 'PHP',
        name: 'Philippine peso'
      },
      {
        code: 'PLN',
        name: 'Polish zloty'
      },
      {
        code: 'GBP',
        name: 'Pound sterling'
      },
      {
        code: 'RON',
        name: 'Romanian leu'
      },
      {
        code: 'RUB',
        name: 'Russian ruble'
      },
      {
        code: 'SGD',
        name: 'Singapore dollar'
      },
      {
        code: 'ZAR',
        name: 'South African rand'
      },
      {
        code: 'KRW',
        name: 'South Korean won'
      },
      {
        code: 'SEK',
        name: 'Swedish krona'
      },
      {
        code: 'CHF',
        name: 'Swiss franc'
      },
      {
        code: 'THB',
        name: 'Thai baht'
      },
      {
        code: 'TRY',
        name: 'Turkish lira'
      },
      {
        code: 'USD',
        name: 'United States dollar'
      },
    ],

    convertFrom: 'AUD',
    convertTo: 'AUD',
    amount: 0,
    result: 0,
    date: '',
    rate: 0,
  }

  calculateCurrency = () => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.convertFrom}`)
    .then(res => res.json())
    .then(data => {
        const result = (data.rates[this.state.convertTo] * this.state.amount).toFixed(2)
        const date = data.date
        const rate = data.rates[this.state.convertTo]
        this.setState({
            result,
            date: date,
            rate,
        })
    })
  }

  handleChangeConvertFrom = (e) => {
    this.setState({
      convertFrom: e.target.value,
      },
    this.calculateCurrency
    )
  }

  handleChangeConvertTo = (e) => {
    this.setState({
      convertTo: e.target.value
    },
    this.calculateCurrency
    )
  }
  
  handleChangeAmount = (e) => {
    this.setState({
      amount: e.target.value
    },
    this.calculateCurrency
    )
  }

  swap = () => {
    this.setState({
      convertFrom: this.state.convertTo,
      convertTo: this.state.convertFrom,
    })
  }

  render() { 
    return (
      <div className = 'container'>
        <div className = 'mycontainer'>
          <h2 className = 'row class1 d-flex justify-content-center'>
            Exchange Currency Converter
          </h2>
          <div className = 'row class2 d-flex justify-content-center'>
            <div className = 'mycol1 col-sm-7 col-md-4'>
              <CurrencySelect currencies = {this.state.currencies} label='From' handleChangeConvertFrom = {this.handleChangeConvertFrom}/>
            </div>
            <div className = 'mycol2 col-sm-7 col-md-4'>
              <AmountInput amount = {this.state.amount} convertFrom = {this.state.convertFrom} label='Amount' handleChangeAmount = {this.handleChangeAmount}/> 
            </div>
          </div>
          <div className = 'row class3 d-flex justify-content-center'>
            <div className = 'mycol1 col-sm-7 col-md-4'>
              <CurrencySelect currencies = {this.state.currencies} label='To' handleChangeConvertFrom = {this.handleChangeConvertTo}/>
            </div>
            <div className = 'mycol2 col-sm-7 col-md-4'>
              <AmountInput amount = {this.state.result} convertFrom = {this.state.convertTo} label='Exchange' disabled = {true}/> 
            </div>
          </div>
          <div className = 'row d-flex justify-content-center'>
            <ExchangeRateInformation rate={this.state.rate} convertFrom={this.state.convertFrom} convertTo={this.state.convertTo} />
          </div>
          <div className = 'row d-flex justify-content-center'>
            <TimeInformation date={this.state.date} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;