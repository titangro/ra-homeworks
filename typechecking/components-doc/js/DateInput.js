'use strict';

const DateInput = props => {
  const now = (new Date()).getFullYear() + "-" + ((new Date()).getUTCMonth() < 9 ? "0" + ((new Date()).getUTCMonth() + 1) : ((new Date()).getUTCMonth() + 1))  + "-" + ((new Date()).getDate() < 10 ? "0" + (new Date()).getDate() : (new Date()).getDate());
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value == "" ? now : props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  value: PropTypes.string
};