import React from 'react'
import Account from '../components/Account.js'
import './Accounts.scss'

const platforms = ["facebook", "google", "instagram", "twitter", "yelp"]

const Accounts = ({ onLinkChange, onSubmit }) => {
    return(
      <div>
        <h2 className="dark-gray" >Fill in your social accounts:</h2>
        <div className="AccountsContainer" >
          <form target="_blank" onSubmit={onSubmit} >
            {
              platforms.map((platform, i) => {
                return(
                  <Account key={i} platform={platform} linkChange={onLinkChange} />
                );
              })
            }
            <div className="reminders">
              <h4>When you print: </h4>
              <ul>
                <li>Set size to A4(297mm x 210mm)</li>
                <li>Turn off headers and footers</li>
              </ul>
            </div>
            <input type="submit" value="Print it out!" className="btn-action mt3 b ph3 pv3 input-reset navy grow pointer f4 dib" />
          </form>
        </div>
      </div>
    )
}

export default Accounts;