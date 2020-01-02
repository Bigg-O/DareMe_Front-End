import React, { Component } from 'react'
import NavBar from './components/NavBar'
import './App.css';
import Body from './containers/Body'
import { BrowserRouter as Router } from "react-router-dom";

export class App extends Component {
  constructor() {
    super()
    this.state = {
      logged_user: '',
      dares: []
    }
  }

  handlePayment = (dare_id, amount) => {
    let dares = [...this.state.dares]
    let dare = dares.find(dare => dare.id === dare_id)
    let user = this.state.logged_user

    if (dare.amount + amount <= dare.wanted_profit && amount <= user.wallet) {
      user.wallet -= amount
      dare.amount += amount
      this.setState({ user })
      this.setState({ dares })
    }
  }

  render() {
    const { logged_user, dares } = this.state
    return (
      <div className="App">
        <NavBar user={logged_user} />
        <br />
        <Body dares={dares} onPay={this.handlePayment} />
      </div>
    )
  }

  componentDidMount() {
    const logged_user = {
      id: "d1h98hd3190j",
      username: "Bigg-O",
      wallet: 100,
      profile_pic_url: "https://www.fakepersongenerator.com/Face/male/male1084242792541.jpg",
      about: "Internetaholic. Total creator. Passionate coffee expert. Hipster-friendly travel buff."
    }
    const dares = [
      {
        id: "dj2390jd340hivfwek",
        username: "AloneLola",
        status: "open",
        open_title: "I'm gonna do this",
        open_description: "I'm gonna take a spoon full of cinnamon pouder and take it like a beast y'all",
        open_pic_url: "https://si.wsj.net/public/resources/images/P1-BF319_CINNAM_E_20120314182945.jpg",
        wanted_profit: 100,
        amount: 80
      },
      {
        id: "dj2390j123123hivfwek",
        username: "GuantoGazette",
        status: "open",
        open_title: "Eat this cihp!",
        open_description: "WORLD'S HOTTEST CHIP CHALLENGE! | Carolina Reaper Pepper Chip | One Chip",
        open_pic_url: "https://i.ytimg.com/vi/tRfOIPi_KGE/maxresdefault.jpg",
        wanted_profit: 24,
        amount: 1
      },
      {
        id: "dj2390jd34234ivfwek",
        username: "Longill",
        status: "open",
        open_title: "jumping",
        open_description: "Businessman jumping out of window Stock",
        open_pic_url: "https://c8.alamy.com/comp/X5E5N9/businessman-jumping-out-of-window-X5E5N9.jpg",
        wanted_profit: 178,
        amount: 170
      },
      {
        id: "dj2390jd3243f34fivfwek",
        username: "QuantPhoenix",
        status: "open",
        open_title: "I will fly!!!!",
        open_description: "pshhhhhhh",
        open_pic_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2011/12/Screen-shot-2011-12-09-at-5.41.18-PM.png",
        wanted_profit: 560,
        amount: 300
      },
      {
        id: "dj239034f234fivfwek",
        username: "Lovelysi",
        status: "open",
        open_title: "DIVING INTO THE DEEPEST OCEAN",
        open_description: "Ooh lalalalalalala",
        open_pic_url: "http://santanaphuket.com/wp-content/uploads/2016/11/Jump_for_joy_scuba.jpg",
        wanted_profit: 100,
        amount: 2
      },
      {
        id: "dj2390jd234f6h6wek",
        username: "King_Chorizo",
        status: "open",
        open_title: "Will eat all of these!!!",
        open_description: "Eleven-time men's champion Joey Chestnut and and five time women's champion, Miki Sudo weighed-in for the annual Nathan's Famous International Fourth of July hot dog-eating contest. (July 3) AP",
        open_pic_url: "https://www.gannett-cdn.com/presto/2019/07/03/USAT/8b27ed83-80db-4268-baec-e2515be25531-EPA_USA_NEW_YORK_HOT_DOG_EATING_CONTEST_WEIGH-IN.JPG?width=660&height=372&fit=crop&format=pjpg&auto=webp",
        wanted_profit: 99999,
        amount: 360
      },
      {
        id: "dj2390h56h56ek",
        username: "ByteBoy",
        status: "open",
        open_title: "I will climb this big-o-thang",
        open_description: "Young woman standing in front of climbing wall, Brooklyn Bridge Park, Brooklyn, New",
        open_pic_url: "https://cdn9.dissolve.com/p/D25_92_127/D25_92_127_1200.jpg",
        wanted_profit: 50,
        amount: 12
      }
    ]
    this.setState({ logged_user })
    this.setState({ dares })
  }

}

export default App
