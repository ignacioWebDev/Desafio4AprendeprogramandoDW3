
import { useState, useEffect } from 'react';
import './style.css'


function App() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
        fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res);
      setLoading(false);
  })
  }, []);
  console.log(data);
  console.log(data[0]);


  return (
    <>
      {
        loading ? <h1>Cargando...</h1> : 
        (
          (data.map((user) => ( 
            <h2 key={user.id}>{user.name}</h2>
          )))
        )
      }
    </>
  )
}

export default App



