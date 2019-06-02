import React from 'react';

const Amount = (props) => {
    return(
      <>
      <div className="form-group">
        <div className="col">
          <label htmlFor="panel">{props.label}</label>
        </div>
        <div className="input-group">
          <input className="form-control" type="number" name="" id="panel" value={props.amount} onChange = {props.handleChangeAmount} disabled={props.disabled}/>
          <div className="inut-group-append">
            <span className ="input-group-text" id="basic-addon1">{props.convertFrom}</span>
          </div>
        </div>
      </div>
      </>
    )
  }

  export default Amount