import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BandLinks = () => {
  const { bandId } = useParams();
  const [bandData, setBandData] = useState([]);

  useEffect(() => {
    const fetchBandItems = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/bands/${bandId}`);
        const data = await res.json();
        console.log('API returned', data);
        setBandData(data);
    };
    fetchBandItems();
  }, [bandId]);

  return (
    <div className="band-page">
      {/* 1️⃣ YouTube Snippets */}
      <div className="band-card band-card-songs">
        <h2>Song Previews</h2>
         {bandData.songs?.length > 0 ? (
    <ul>
      {bandData.songs?.map((song) => (
        <li key={song.id}>
          {song.name}
        </li>
      ))}
    </ul>
  ) : (
  <p>No genres found.</p>
)}
        {bandData.youtube?.map((link, i) => (
          <iframe
            key={i}
            width="25%"
            height="200"
            src={link}
            title={`Song snippet ${i + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>

      {/* 2️⃣ Band Info */}
      <div className="band-card band-card-info">
        <h2>About the Band</h2>
        {bandData && <p>{bandData.info}</p>}
        <li>The Acacia Strain is an American deathcore band that was founded in 2001 and originally based in Chicopee, Massachusetts, but now based in Albany, New York. The group is currently signed to Rise Records[1] and initially consisted of high school friends Vincent Bennett, Christopher Daniele, and Ben Abert, Karrie Whitfield, Daniel "DL" Laskiewicz, and Daniel Daponde joining shortly after. They recorded and released their debut album ...And Life Is Very Long in 2002 via Devil's Head records. Since then, the band has released twelve full-length albums.</li>
      </div>

      {/* 3️⃣ Merch Links */}
      <div className="band-card band-card-merch">
        <h2>Merch & Links</h2>
          <ul> 
              <li>
                <p>https://youaresafefromgodhere.com/</p>
                <p>https://riserecords.com/collections/artist-the-acacia-strain</p>
                <p>https://www.coldcutsmerch.com/collections/the-acacia-strain?srsltid=AfmBOorg-97tt5obQA4xDb9oRGThfwdXpUtOANg4bBVXC-QXKNMc1vry</p>
              </li>
          </ul>
      </div>

      {/* 4️⃣ Tour Dates */}
      <div className="band-card band-card-tour">
        <h2>Tour Dates</h2>
          <ul>
          CHECK BACK SOON!
          </ul>
      </div>
    </div>
  );
};

export default BandLinks;
