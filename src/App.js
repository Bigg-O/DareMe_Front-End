import React, { Component } from 'react'
import './App.css';
import {
  Router, Route, Switch
} from "react-router-dom";
import NavBar from './Components/NavBar'
import Body from './Containers/Body'
import NewDare from './Components/Forms/NewDare'
import LogIn from './Components/Forms/LogIn'
import SignUp from './Components/Forms/SignUp'
import Authentication from './Middlewares/Authentication'
import history from './history'
import axios from "axios";

export class App extends Component {
  constructor() {
    super()
    this.state = {
      dares: []
    }
  }

  hanleDareDataLoad = () => {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      // GET request to backend using JWT key to retrieve data
      axios
        .get("http://localhost:3000/dares", {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        })
        .then(response => {
          this.setState({ dares: response.data.dares })
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  setCurrentUser = user => {
    for (const prop in user)
      localStorage.setItem(prop, user[prop]);
  }

  setDares = dares => {
    this.setState({ dares })
  }

  render() {
    const { dares } = this.state
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <LogIn onLogin={this.setCurrentUser} />
          </Route>
          <Route path="/signup" component={SignUp} />

          <Authentication onDareDataLoad={this.hanleDareDataLoad}>
            <NavBar />
            <Route exact path="/">
              <Body dares={dares} onDareDataLoad={this.hanleDareDataLoad}/>
            </Route>
            <Route exact path="/new_dare">
              <NewDare onSubmit={this.handleNewDare} onDareDataLoad={this.hanleDareDataLoad}/>
            </Route>
          </Authentication>
        </Switch>
      </Router >
    )
  }
}

export default App

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
