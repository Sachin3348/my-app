import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  useEffect(()=> {

    async function getData(){

      try {
        
        const data =await axios.get("https://near-fuzzy-stealer.glitch.me/books")
        console.log(data.data.data)
        setData(data.data.data)
      } catch (error) {
        
      }
    }

    getData()
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {

          data.map((x, i) => (
            <p key={i}>{x.category}</p>

          ))

        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
