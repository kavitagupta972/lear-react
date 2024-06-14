import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [name, setName] = useState([]);

  function getFruits() {
    return new Promise((resolve) => {
      resolve({
        data: [
          { name: 'Apple', id: 1 },
          { name: 'Orange', id: 2 },
          { name: 'Mango', id: 3 },
        ],
      });
    });
  }
  useEffect(() => {
    const promise = getFruits();
    promise.then((result) => {
      console.log('data', result);
      setName(result.data);
    });
  }, []);

  return <>{name && name.map((item) => <h1 key={item.id}>{item.name}</h1>)}</>;
}

export default App;
