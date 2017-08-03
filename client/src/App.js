import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './App.css';


class Houses extends Component {
  state = {houses:[]}

    componentDidMount() {
      console.log('Fetch houses');
      fetch('/houses')
        .then(res => {
          return res.json()})
        .then(houses => this.setState({ houses })).catch((err) => {
          console.log('Error:', err);
        });
    }

  render() {
    return (
      <div>
        <h1>Houses</h1>
          {this.state.houses.map(house =>
          <div key={house.id}>{house.house}</div>
        )}
      </div>
      );
  }
}

class Users extends Component {
  state = {users:[]}

    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

  render() {
    return (
      <div>
        <h1>Users</h1>
          {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
      );
  }
}

class App extends Component {
  



  render() {
    return (
      <div className="App">
        <h1>Home</h1>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/houses">Houses</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
        <Switch>
          <Route path="/users" render={() => <Users/>}/>
          <Route path="/houses" render={() => <Houses/>}/>
          <Route render={() => <h1>Home Nigga</h1>}/>
        </Switch>
     
      </div>
    );
  }
}

export default App;
