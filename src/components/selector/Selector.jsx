import React from 'react';

const Selector = (props) => {
    return(
      <div className='form-group'>
        <div className='col'>
          <label htmlFor='select'>
            {props.label}
          </label>
        </div>
        <select id='select' className='custom-select' onChange={props.handleChangeConvertFrom}>
          {props.currencies.map(currency=>(<option key={currency.code} value={currency.code} >{currency.name}</option>))}
        </select>
      </div>
    )
  }

  export default Selector