import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BandLinks = () => {
  const { id } = useParams();
  const [bandData, setBandData] = useState(null);

  useEffect(() => {
    const fetchBand = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/bands_name/${id}`
        );
        const data = await res.json();
        setBandData(data);
      } catch (err) {
        console.error("Failed to fetch band:", err);
      }
    };
    fetchBand();
  }, [id]);

  if (!bandData) return <p>Loading band info...</p>;

  return (
    <div className="band-page">
      {/* 1️⃣ YouTube Snippets */}
      <div className="band-card band-card-songs">
        <h2>Song Previews</h2>
        {bandData.youtubeLinks.slice(0, 5).map((link, i) => (
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
        <p>{bandData.info}</p>
      </div>

      {/* 3️⃣ Merch Links */}
      <div className="band-card band-card-merch">
        <h2>Merch & Links</h2>
        <ul>
          {bandData.merchLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 4️⃣ Tour Dates */}
      <div className="band-card band-card-tour">
        <h2>Tour Dates</h2>
        <ul>
          {bandData.tourDates.map((date, i) => (
            <li key={i}>{date}</li>
          ))}
        </ul>
      </div>
      <div>
        {bandItems && bandItems.length > 0 ? (
          <ul>
            {bandItems.map((link) => (
              <li key={link.id}>
                <a
                  href={link.short_url}
                  title={`Short Url for ${link.title}`}
                  className={styles.BandLink}
                  onClick={(e) => {
                    e.preventDefault();
                    goToBand(link.id);
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Bands did not load</p>
        )}
      </div>
    </div>
  );
};

export default BandLinks;
