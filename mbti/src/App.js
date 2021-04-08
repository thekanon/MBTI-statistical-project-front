import logo from './logo.svg';
import React from 'react';
import './App.css';
import VoteList from './Component/VoteEdit/VoteList'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          임시 설문지 작성
        </header>
        <main className="App-body">
          <VoteList />
        </main>
      </div>
    );
  }
}
export default App;
