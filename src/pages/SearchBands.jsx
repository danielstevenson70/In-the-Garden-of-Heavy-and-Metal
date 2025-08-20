import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // use react-router-dom not react-router

const SearchBands = () => {
  const [bandItems, setBandItems] = useState([]);
  const navigate = useNavigate();
  const { genreId } = useParams();

  const goToBand = (bandId) => {
    navigate(`/band/${bandId}`);
  };

  const getBands = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/genre/${genreId}`;
      console.log("Fetching:", url);

      const response = await fetch(url);
      const data = await response.json();
      setBandItems(data);
      displayBands(bands);
    } catch (err) {
      console.error("Failed to fetch bands:", err);
    }
  };

  useEffect(() => {
    getBands();
  }, []);

  return (
    <>
      {bandItems && bandItems.length > 0 ? (
        <ul className={styles.linkList}>
          {bandItems.map(band => (
            <li key={band.id}>
              <Link
                to={`/band/1`}
                title={`Short URL for ${Link.title}`}
                className={styles.linkLink}
                {...link.title}
                >
                )
              </Link>
                {band.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>Bands did not load</p>
      )}
    </>
        // <>
        // {bandLinkItems && bandLinkItems.length > 0 ? (
        //     <ul className={styles.linkList}>
        //         {bandLinkItems.map(link => {
        //             return (<li key={link.id}>
        //                 <a link to={`/band/1${bandId.short_url}`} 
        //                 title={`Short URL for ${link.title}`}
        //                 className={styles.linkLink}
        //                 >{link.title}</a>
        //             </li>)
        //         })}
        //     </ul>
        // ) : (
        //     <p>Bands did not load</p>
        //     )}
        // </>



      //   {bandItems && bandItems.length > 0 ? (
      //   <ul className={styles.linkList}>
      //     {bandItems.map(band => (
      //       <li key={band.id}>
      //         <a
      //           href={`/band/${band.short_url}`}
      //           title={`Short URL for ${band.title}`}
      //           className={styles.linkLink}
      //         >
      //           {band.title}
      //         </a>
      //       </li>
      //     ))}
      //   </ul>
      // ) : (
      //   <p>Bands did not load</p>
      // )}
    // </>
    );
};

export default SearchBands;


