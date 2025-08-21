import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // use react-router-dom not react-router

const SearchBands = () => {
  const [bandsItems, setBandsItems] = useState([]);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkName, setLinkName] = useState("");
  const navigate = useNavigate();
  const { genreId } = useParams();
  
useEffect(() => {
    const fetchBands = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/genre/${genreId}`;
        const data = await fetch(url).then((response) => response.json());
        setBandsItems(data.bands || []);   // ✅ update state
      } catch (error) {
        console.error("Error fetching bands:", error);
      }
    };

    fetchBands();
  }, [genreId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      band_name: linkName,  
      id: 1,
      song_id: [0],
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/bands`, {
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
      navigate("/404");
    }
  };

return (
<div>
    <h2>Search Results</h2>
    {bandsItems.length > 0 ? (
      <ul>
        {bandsItems.map((band, index) => (
          <li key={index}>{band.band_name}</li>
        ))}
      </ul>
    ) : (
      <p>No bands found.</p>
    )}
    <form method="POST" onSubmit={(e) => handleSubmit(e)}>
    </form>
</div>
);
};


export default SearchBands;