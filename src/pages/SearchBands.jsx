import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import styles from "../styles/BandLink.module.css"; // Update with your actual styles file

const SearchBands = () => {
  const [bandsItems, setBandsItems] = useState([]);
  const { genreId } = useParams();

  useEffect(() => {
    const fetchBands = async () => {
      const url = `${import.meta.env.VITE_API_URL}/genre/${genreId}`;
      const data = await fetch(url).then((response) => response.json());
      console.log(data);
      setBandsItems(data.bands || []);
    };

    fetchBands();
  }, []);

  return (
  <>
    <h2>Search Results: </h2>
    {bandsItems.length > 0 ? (
      <ul>
        {bandsItems.map((band) => (
          <li key={band.id}>
            <Link to={`/bands/${band.id}`}>{band.band_name}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>No bands found.</p>
    )}
  </>
  );
};

export default SearchBands;
