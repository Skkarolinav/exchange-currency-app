import React from 'react';

const Rate = (props) => {
    return(
      <>
        {props.rate ? <p><strong>Exchange Rate:</strong> 1 {props.convertFrom} = {props.rate.toFixed(4)} {props.convertTo}</p> : <p className='hiddenElement'></p>}
      </>
    )
  }

export default Rate