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
    if(this.state.printing == true){
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

  render() {
    if(this.state.printing){
      return <Printout accounts={this.state}/>
    }
    return(
      <div className="App">
        <h1 className="f1">Show My Socials</h1>
        <h2>Free printout to display your social media accounts</h2>
        <div className="mw5 mw7-ns center pa3 ph5-ns">
          <Accounts onLinkChange={this.onLinkChange} onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}

export default App;