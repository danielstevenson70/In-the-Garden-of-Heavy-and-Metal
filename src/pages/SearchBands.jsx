import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
// import styles from "../styles/BandLink.module.css"; // Update with your actual styles file

  const SearchBands = () => {
    const [bandsItems, setBandsItems] = useState([]);
    const { genreId } = useParams();

  useEffect(() => {
    const fetchBands = async () => {
        const url = `${import.meta.env.VITE_API_URL}/genre/${genreId}`;
        const data = await fetch(url).then((response) => response.json());
        setBandsItems(data.bands || []);   
    };

    fetchBands();
}, []);

return (
    <>
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
    </>
  );
};

//   return (
//         <>
//         {SearchBands && SearchBands.length > 0 ? (
//             <ul className={styles.bandLink}>
//                 {bandLinkItems.map(link => {
//                     return (<li key={link.id}>
//                         <a href={`/searchBands/${link.short_url}`} 
//                         title={`Short URL for ${link.title}`}
//                         className={styles.linkLink}
//                         >
//                         {link.title}
//                         </a>
//                     </li>)
//                 })}
//             </ul>
//         ) : (
//             <p>Bands did not load</p>
//             )}
//         </>
//     );
// };


export default SearchBands;