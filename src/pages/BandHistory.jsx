import { use, useState } from "react";
import bandLinkList from "../components/BandLink";
import styles from "../components/BandLink.module.css";
import { useNavigate } from "react-router";

const bandLinkList = () => {
    const [bandSong, setBandSong] = useState("");
    const [bandLinks, setBandLinks] = useState("");
    const [bandInfo, setBandInfo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const shortUrl = nanoid(6);
        const apiUrl = `${import.meta.env.VITE_API_URL}/urls`;
        const access_token = localStorage.getItem("access_token");

        const body = {
           "long_url": linkUrl,
            "short_url": shortUrl,
            "title": linkName,
            "user_id" : 1
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access_token}`
                },
            });
            const data = await response.json();
            console.log("DATA:", data);
            navigate("/searchband")
        } catch (error) {
            console.error(error);
        }
    };
    }

const searchBandCards = () => {
  return (
      <>
          <div class="band-section">
              <div class="band-card">
                  <h2>Band Links and Merch</h2>
                  <ul>
                      <li><a href="https://.com" target="_blank">Official Website</a></li>
                      <li><a href="https://instagram.com/" target="_blank">Instagram</a></li>
                      <li><a href="https://facebook.com/" target="_blank">Facebook</a></li>
                      <li><a href="" target="">Merchlink</a></li>
                  </ul>
              </div>
          </div>

          <div class="band-card">
              <h2>Song Preview</h2>
              <iframe width="100%" height="200" 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?start=30&end=60"
                  title="Band Song Snippet" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
              </iframe>
          </div>

          <div class="band-card">
              <h2>About the Band</h2>
              <p>
                  
              </p>
          </div>
      </>
  )
};
  return (
        <>
        <SearchBand />
        </>
    );
};

export default bandLinkList;