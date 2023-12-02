import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/data`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Available Fruits</h1>
      <ol>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ol>
    </div>
  );
}

export default App;

