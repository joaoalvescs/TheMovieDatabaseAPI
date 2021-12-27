import React, { useState, useEffect } from 'react'

function App() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=5e3331f5003efc4ef18f2a1a4699927b&language=pt-BR&page=1`,
      );
      const json = await res.json()
      setMovie(json.results)
    };
    fetchData();
  });

  return (
    <ul>
      {movie.map(item => (
        <li>
          <a> {item.title} </a>
        </li>
      ))}
    </ul>
  );
}

export default App