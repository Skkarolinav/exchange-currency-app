import React from 'react';

const Date = (props) => {
    return(
      <>
        {props.date ? <p><strong>Last Updated: </strong>{props.date}</p> : <p className='hiddenElement'></p>}
      </>
    )
  }

export default Date