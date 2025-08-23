import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//import styles from "./pages/BandLink.module.css";

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
            width="100%"
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
      </div>

      {/* 3️⃣ Merch Links */}
      <div className="band-card band-card-merch">
        <h2>Merch & Links</h2>
        {bandData && bandData.merchLinks && (
          <ul>
            {bandData.merchLinks.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 4️⃣ Tour Dates */}
      <div className="band-card band-card-tour">
        <h2>Tour Dates</h2>
        {bandData && bandData.tourDates && (
          <ul>
            {bandData.tourDates.map((date, i) => (
              <li key={i}>{date}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BandLinks;
