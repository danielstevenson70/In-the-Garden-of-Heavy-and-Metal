import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

const BandLinkList = () => {
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
            "long_url": bandLinks,
            "short_url": shortUrl,
            "title": bandSong,
            "user_id": 1
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
            navigate("/searchband");
        } catch (error) {
            console.error(error);
        }
    };

    const searchBandCards = () => (
        <>
            <div className="band-section">
                <div className="band-card">
                    <h2>Band Links and Merch</h2>
                    <ul>
                        <li><a href="https://.com" target="_blank" rel="noopener noreferrer">Official Website</a></li>
                        <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">Merchlink</a></li>
                    </ul>
                </div>
            </div>

            <div className="band-card">
                <h2>Song Preview</h2>
                <iframe width="100%" height="200"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?start=30&end=60"
                    title="Band Song Snippet" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>

            <div className="band-card">
                <h2>About the Band</h2>
                <p>
                    
                </p>
            </div>
        </>
    );

    return (
        <>
            {/* <SearchBand /> Uncomment if SearchBand is defined/imported */}
            {searchBandCards()}
        </>
    );
};

export default BandLinkList;