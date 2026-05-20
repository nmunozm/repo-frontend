import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Hacemos la petición al puerto 3000 del backend
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then(response => response.json())
      .then(json => setData(json.mensaje))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend en React</h1>
      <div className="card">
        <p>Respuesta del servidor:</p>
        {/* Si 'data' tiene algo, lo muestra. Si no, dice 'Cargando...' */}
        {data ? <h2>{data}</h2> : <p>Cargando datos del backend...</p>}
      </div>
    </div>
  )
}

export default App