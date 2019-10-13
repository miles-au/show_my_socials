import React from 'react';
import './Account.scss';

const Account = ({platform, linkChange}) => {
  return(
    <div className="Account bt bb b--light-gray pa2">
      <img src={`images/${platform}.png`} />
      <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name={platform} placeholder={`Enter ${platform} url`} onChange={linkChange}/>
    </div>
  )
}

export default Account;