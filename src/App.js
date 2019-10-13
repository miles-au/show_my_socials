import React from 'react'
import Accounts from './containers/Accounts.js'
import Printout from './containers/Printout.js'
import './App.scss'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      facebook: '',
      google: '',
      instagram: '',
      twitter: '',
      yelp: '',
      printing: false,
    }
  }

  componentDidUpdate(){
    if(this.state.printing === true){
      window.print();
    }
  }

  onLinkChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value} );
    console.log("state", this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ printing: true});
  }

  goBack = () => {
    this.setState({printing:false});
  }

  render() {
    if(this.state.printing){
      return(
        <div className="whiteBack">
          <div className="ma2 noprint btn-action mt3 b ph5 pv3 input-reset navy grow pointer f3 dib" onClick={this.goBack} >
            back
          </div>
          <Printout accounts={this.state}/>
        </div>
      )
    }
    return(
      <div className="App">
        <h1 className="f1 headline">Show My Socials</h1>
        <h2 className="dark-gray">Free printout to display your social media accounts</h2>
        <div className="ma3 bg-white ba b--light-gray br4 mw5 mw7-ns center pa3 ph5-ns">
          <Accounts onLinkChange={this.onLinkChange} onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default App;