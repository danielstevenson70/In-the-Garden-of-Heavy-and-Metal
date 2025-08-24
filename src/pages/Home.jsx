import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Home = () => {
  const [genresItems, setGenresItems] = useState([]);
  const [linkName, setLinkName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchGenres = async () => {
      const url = `${import.meta.env.VITE_API_URL}/genres`;
      const data = await fetch(url).then((response) => response.json());
      console.log(data);
      setGenresItems(data);
    };

    fetchGenres();
  };

return (
  <>
  <form onSubmit={handleSubmit}>
  <h1><center>Find Your Metal Band:</center></h1>
      <input
        type="text"
        name="linkName"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
        placeholder="doom, death, heavy"
        style={{
          fontSize: '20px',
          alignItems: 'center',
          width: '35%',
          padding: '12px 15px',
          margin: '10px 20px 0',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxSizing: 'border-box',
          fontSize: '20px',
          transition: 'border 0.3s',
          marginTop: '30px',
          marginBottom: '20px',
          marginLeft: '450px'
        }}
      />
       <button 
        type="submit"
        style={{
          marginLeft: '650px',
          marginBottom: '20px',
          padding: '12px 24px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '20px',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </form>
    {genresItems.length > 0 ? (
    <ul>
      {genresItems.map((genre) => (
        <li key={genre.id}>
          <Link to={`/searchBands/${genre.id}`}>{genre.name}</Link>
        </li>
      ))}
    </ul>
  ) : (
  <p></p>
)}
    <img src="/ozzman.jpg" alt="Ozzy Osbourne" className="Ozzy"></img>
    <h2><center>R.I.P to the Godfather of all that is Metal</center></h2>
  </>

);
};

export default Home;
