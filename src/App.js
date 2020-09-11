import React from 'react';
import logo from './logo.svg';
import './App.css';


const list = [{
  title:'react',
  url: 'https://www.google.com',
author: 'robin',
num_comments:3,
points:4,
objectID:0,
},{
  title:'redux',
  url: 'https://www.google.com',
author: 'sy',
num_comments:2,
points:5,
objectID:1,
}]

function App() {

  var helloWorld="Welcome some refresh magic al";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div><h2>{helloWorld}</h2></div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{list.map(function(item){
          return (
            <div>
          <span><a href={item.url}>{item.title}</a></span><br/>
          <span>Author: {item.author}</span><br/>
          <span>Number of comment: {item.num_comments}</span><br/>
          <span>{item.points}</span></div>)
        })}</div>
      </header>
      
    </div>
    
  );
}

export default App;


