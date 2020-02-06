import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import NavBar from './Components/NavBar'
import Body from './Containers/Body'
import NewDare from './Components/Forms/NewDare'
import LogIn from './Components/Forms/LogIn'
import SignUp from './Components/Forms/SignUp'
import Authentication from './Middlewares/Authentication'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

export class App extends Component {
  constructor() {
    super()
    this.state = {
      dares: []
    }
  }

  setCurrentUser = user => {
    for (const prop in user)
      localStorage.setItem(prop, user[prop]);
    history.push("/")
    this.render()
  }

  setDares = dares => {
    this.setState({ dares })
  }

  render() {
    const { dares } = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LogIn onLogin={this.setCurrentUser} />
          </Route>
          <Route path="/signup" component={SignUp} />

          <Authentication history={history} onDataLoad={this.setDares}>
            <NavBar />
            <Route path="/">
              <Body dares={dares} onPay={this.handlePayment} />
            </Route>
            <Route path="/new_dare">
              <NewDare
                onSubmit={this.handleNewDare}
              />
            </Route>
          </Authentication>
        </Switch>
      </BrowserRouter >
    )
  }
}

export default App


  // componentDidMount() {
  //   const currentUser = {
  //     id: "d1h98hd3190j",
  //     username: "Bigg-O",
  //     wallet: 100,
  //     profile_pic_url: "https://www.fakepersongenerator.com/Face/male/male1084242792541.jpg",
  //     about: "Internetaholic. Total creator. Passionate coffee expert. Hipster-friendly travel buff."
  //   }
  //   const data = require('./temp_data.json')

  //   this.setState({ currentUser })
  //   this.setState({ dares: data.dares })
  // }


  // handlePayment = (dare_id, amount) => {
  //   let dares = [...this.state.dares]
  //   let dare = dares.find(dare => dare.id === dare_id)
  //   let user = this.state.currentUser

  //   if (dare.amount + amount <= dare.wanted_profit && amount <= user.wallet) {
  //     user.wallet -= amount
  //     dare.amount += amount
  //     this.setState({ user })
  //     this.setState({ dares })
  //   }
  // }
