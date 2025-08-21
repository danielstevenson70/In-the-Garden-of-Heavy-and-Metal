import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // use react-router-dom not react-router

const SearchBands = () => {
  const [bandItems, setBandItems] = useState([]);
  const [linkUrl, setLinkUrl] = useState("");
  const navigate = useNavigate();
  const { genreId } = useParams();
  

  const handleSubmit = async (event) => {
      event.preventDefault();
      const bandItems = async () => {
        const url = `${import.meta.env.VITE_API_URL}/genre/${genreId}`;
        const data = await fetch(url).then(response => response.json());
          
          const body = {
            band_name: "The Acacia Strain",
            id: 1,
            song_id: [0],
          };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("DATA: ", data);
    navigate("/bands");
  } catch (error) {
    console.error(error);
    navigate("/404")
    
  }
};

return (
<div>
    <h2>Search Results</h2>
    {bands.length > 0 ? (
      <ul>
        {bands.map((band, index) => (
          <li key={index}>{band.band_name}</li>
        ))}
      </ul>
    ) : (
      <p>No bands found.</p>
    )}
    <form method="POST" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name of Link
        <input
          type="text"
          name="linkName"
          value={bandName}
          onChange={(e) => setLinkName(e.target.value)}
        />
      </label>
      <label>
        Url of Link
        <input
          type="text"
          name="linkUrl"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
</div>
);
};
};

export default SearchBands;