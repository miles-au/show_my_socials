import React from 'react';
import PrintAccount from '../components/PrintAccount'
import './Printout.scss'

const platforms = ["facebook", "google", "instagram", "twitter", "yelp"]

const Printout = ({ accounts }) => {
  return(
    <div className="Printout" >
      <div className="left section">
      </div>
      <div className="f3 section flip">
        bottom
      </div>
      <div className="Instructions section flip">
        <img src="images/instructions.png" />
        <p>Print your own at: https://miles-au.github.io/show_my_socials/</p>
      </div>
      <div className="Accounts section pa4">
        <p className="f3" >Follow and Review Us!</p>
        <div className="accountLinksContainer" >
        {
          platforms.map((platform, i) => {
            return(
              <PrintAccount key={i} platform={platform} accountLink={accounts[platform]} />
            );
          })
        }
        </div>
      </div>
      <div className="f3 section">
        bottom
      </div>
      <div className="right section">
      </div>
    </div>
  )
}

export default Printout;