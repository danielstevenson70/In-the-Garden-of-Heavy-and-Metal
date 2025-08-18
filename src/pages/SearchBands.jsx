import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // use react-router-dom not react-router

const SearchBands = () => {
  const [bandItems, setBandItems] = useState([]);
  const navigate = useNavigate();

  const goToBand = (bandId) => {
    navigate(`/band/${bandId}`);
  };

  const getBands = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/bands?search_string=deathcore&limit=5`;
      console.log("Fetching:", url);

      const response = await fetch(url);
      if (!response.ok) {
        console.log("DEBUG: Error response =", errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data:", data);
      setBandItems(data);
    } catch (err) {
      console.error("Failed to fetch bands:", err);
    }
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <>
      <div>
        <h1>Search Bands</h1>
        {bandItems && bandItems.length > 0 ? (
          <ul>
            {bandItems.map((band) => ( // Fixed: consistent variable name
              <li key={band.id}> {/* Fixed: li instead of ul */}
                <span>{band.name}</span>
                <button onClick={() => goToBand(band.id)}>View Band</button> {/* Fixed: band.id */}
                {band.short_url && (
                  <a href={band.short_url} title={`Short URL for ${band.name}`}> {/* Fixed: band.name */}
                    Visit Link
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Bands did not load</p>
        )}
      </div>
    </>
  );
};

export default SearchBands;
