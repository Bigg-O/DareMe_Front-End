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
import UserInfo from './Components/UserInfo'
import axios from "axios";
const HEROKU_URL = "https://dareme-server.herokuapp.com"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      dares: [],
      isLoading: false
    }
  }

  hanleDareDataLoad = () => {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) this.props.history.push("/login");
    else {
      // GET request to backend using JWT key to retrieve data
      axios
        .get(HEROKU_URL + "/dares", {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        })
        .then(response => {
          this.setState({ dares: response.data.dares })
        })
        .catch(err => {
          console.log(err);
          localStorage.clear()
        });
    }
  }

  handleUserDataLoad = e => {
    // Make Post request to backend and store JWT key to local storage
    if (!localStorage.getItem("username")) {
      e.preventDefault()
      this.setState({ isLoading: true })
      axios
        .post(HEROKU_URL + "/users/login", {
          username: e.target.formUsername.value,
          password: e.target.formPassword.value
        })
        .then(response => {
          this.setState({ isLoading: false })
          console.log("successful Login: ", response);
          localStorage.setItem("JWT", response.data.token);
          this.setCurrentUser(response.data.user);
          history.push("/");
        })
        .catch(error => {
          console.log("Error in Login: ", error);
          if (error.response) alert(error.response.data.message);
        });
    } else {
      axios.get(HEROKU_URL + `/users/${localStorage.getItem("_id")}`)
        .then(resp => localStorage.setItem("wallet", resp.data.wallet))
        .catch(err => console.log(err))
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
    const { dares, isLoading } = this.state
    if (isLoading) {
      return (
        <>
          <h1>LOADING.....</h1>
          <h1>LOADING.....</h1>
          <h1>LOADING.....</h1>
        </>
      )
    } else {
      return (
        <Router history={history}>
          <Switch>
            <Route path="/login">
              <LogIn onUserDataLoad={this.handleUserDataLoad} />
            </Route>
            <Route path="/signup" component={SignUp} />

            <Authentication onDareDataLoad={this.hanleDareDataLoad}>
              <NavBar />
              <Route exact path="/">
                <Body dares={dares} onDareDataLoad={this.hanleDareDataLoad} onUserDataLoad={this.handleUserDataLoad} />
              </Route>
              <Route exact path="/new_dare">
                <NewDare onSubmit={this.handleNewDare} onDareDataLoad={this.hanleDareDataLoad} />
              </Route>
              <Route exact path="/user_info" component={UserInfo} />
            </Authentication>
          </Switch>
        </Router >
      )
    }
  }
}

export default App