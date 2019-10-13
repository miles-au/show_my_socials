import React from 'react'
import './PrintAccount.scss'

const PrintAccount = ({ platform, accountLink }) => {
  if(accountLink === ""){
    return null
  }
  return(
    <div className="linkContainer">
      <div>
        <img src={`images/${platform}.png`} />
      </div>
      <div>
        <p>{accountLink}</p>
      </div>
    </div>
  )
}

export default PrintAccount