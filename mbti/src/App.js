import logo from './logo.svg';
import React from 'react';
import './App.css';
import VoteList from './Component/VoteEdit/VoteList'
import { Route } from "react-router-dom";
import voteListPage from './Page/VoteListPage';
import userListPage from './Page/UserListPage'
import userProfilePage from './Page/UserProfilePage'
import reactRouter2 from './Page/R089_reactRouter2'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          임시 설문지 작성
          <div className="menu">
            <Link to={'/voteList'}>voteList</Link>
            <Link to={'/userListPage'}>userList</Link>
            <Link to={'/userProfilePage'}>userProfile</Link>
            <Link to={'/voteList'}>voteList</Link>
            <Link to={'/reactRouter2'}>reactRouter2</Link>
            <Link to={'/voteList'}>voteList</Link>
            <Link to={'/reactRouter2'}>reactRouter2</Link>
            <Link to={'/voteList'}>voteList</Link>
            <Link to={'/reactRouter2'}>reactRouter2</Link>
            <Link to={'/voteList'}>voteList</Link>
            <Link to={'/reactRouter2'}>reactRouter2</Link>
          </div>
        </header>
        <Route exact path='/voteList' component={voteListPage} />
        <Route exact path='/userListPage' component={userListPage} />
        <Route exact path='/userProfilePage' component={userProfilePage} />
      </div>
    );
  }
}
export default App;