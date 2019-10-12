import React from 'react'
import Account from '../components/Account.js'
import './Accounts.scss'

const platforms = ["facebook", "google", "instagram", "twitter", "yelp"]

const Accounts = ({ onLinkChange, onSubmit }) => {
    return(
      <div>
        <h2>Fill in your social accounts:</h2>
        <div className="AccountsContainer" >
          <form target="_blank" onSubmit={onSubmit} >
            {
              platforms.map((platform, i) => {
                return(
                  <Account key={i} platform={platform} linkChange={onLinkChange} />
                );
              })
            }
            <input type="submit" value="Print it out!" className="b ph5 pv3 input-reset ba b--black bg-transparent grow pointer f3 dib" />
          </form>
        </div>
      </div>
    )
}

export default Accounts;